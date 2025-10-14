import { NextRequest, NextResponse } from 'next/server';
import { collection, getDocs, query, where, orderBy, limit } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const propertyType = searchParams.get('type');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const city = searchParams.get('city');
    const limitNum = parseInt(searchParams.get('limit') || '20');

    let q = query(collection(db, 'properties'));

    // Add filters
    if (propertyType && propertyType !== 'all') {
      q = query(q, where('propertyType', '==', propertyType));
    }

    if (minPrice) {
      q = query(q, where('price', '>=', parseInt(minPrice)));
    }

    if (maxPrice) {
      q = query(q, where('price', '<=', parseInt(maxPrice)));
    }

    if (city) {
      q = query(q, where('city', '==', city));
    }

    // Add ordering and limit
    q = query(q, orderBy('createdAt', 'desc'), limit(limitNum));

    const snapshot = await getDocs(q);
    const properties = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({ properties });
  } catch (error) {
    console.error('Error fetching properties:', error);
    return NextResponse.json(
      { error: 'Failed to fetch properties' },
      { status: 500 }
    );
  }
}
