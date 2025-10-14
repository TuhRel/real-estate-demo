'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { formatCurrency, formatDate } from '@/lib/utils';
import { Plus, Trash2, Download } from 'lucide-react';
import jsPDF from 'jspdf';

interface InvoiceItem {
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

export default function InvoiceGenerator() {
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: `INV-${Date.now()}`,
    clientName: '',
    clientEmail: '',
    clientAddress: '',
    dueDate: '',
    notes: '',
  });

  const [items, setItems] = useState<InvoiceItem[]>([
    { description: '', quantity: 1, rate: 0, amount: 0 },
  ]);

  const addItem = () => {
    setItems([...items, { description: '', quantity: 1, rate: 0, amount: 0 }]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateItem = (index: number, field: keyof InvoiceItem, value: string | number) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    
    if (field === 'quantity' || field === 'rate') {
      newItems[index].amount = newItems[index].quantity * newItems[index].rate;
    }
    
    setItems(newItems);
  };

  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + item.amount, 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.08; // 8% tax
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Header
    doc.setFontSize(24);
    doc.text('INVOICE', 20, 20);
    
    doc.setFontSize(10);
    doc.text(`Invoice #: ${invoiceData.invoiceNumber}`, 20, 30);
    doc.text(`Date: ${formatDate(new Date())}`, 20, 35);
    doc.text(`Due Date: ${invoiceData.dueDate || 'N/A'}`, 20, 40);
    
    // Client Info
    doc.setFontSize(12);
    doc.text('Bill To:', 20, 55);
    doc.setFontSize(10);
    doc.text(invoiceData.clientName, 20, 62);
    doc.text(invoiceData.clientEmail, 20, 67);
    doc.text(invoiceData.clientAddress, 20, 72);
    
    // Items Table
    let yPos = 90;
    doc.setFontSize(10);
    doc.text('Description', 20, yPos);
    doc.text('Qty', 120, yPos);
    doc.text('Rate', 145, yPos);
    doc.text('Amount', 170, yPos);
    
    yPos += 5;
    doc.line(20, yPos, 190, yPos);
    
    yPos += 7;
    items.forEach((item) => {
      doc.text(item.description, 20, yPos);
      doc.text(item.quantity.toString(), 120, yPos);
      doc.text(formatCurrency(item.rate), 145, yPos);
      doc.text(formatCurrency(item.amount), 170, yPos);
      yPos += 7;
    });
    
    // Totals
    yPos += 10;
    doc.text('Subtotal:', 145, yPos);
    doc.text(formatCurrency(calculateSubtotal()), 170, yPos);
    
    yPos += 7;
    doc.text('Tax (8%):', 145, yPos);
    doc.text(formatCurrency(calculateTax()), 170, yPos);
    
    yPos += 7;
    doc.setFontSize(12);
    doc.text('Total:', 145, yPos);
    doc.text(formatCurrency(calculateTotal()), 170, yPos);
    
    // Notes
    if (invoiceData.notes) {
      yPos += 15;
      doc.setFontSize(10);
      doc.text('Notes:', 20, yPos);
      doc.text(invoiceData.notes, 20, yPos + 5, { maxWidth: 170 });
    }
    
    doc.save(`invoice-${invoiceData.invoiceNumber}.pdf`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Invoice</CardTitle>
        <CardDescription>Generate professional invoices for your services</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Invoice Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="invoiceNumber">Invoice Number</Label>
            <Input
              id="invoiceNumber"
              value={invoiceData.invoiceNumber}
              onChange={(e) => setInvoiceData({ ...invoiceData, invoiceNumber: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="dueDate">Due Date</Label>
            <Input
              id="dueDate"
              type="date"
              value={invoiceData.dueDate}
              onChange={(e) => setInvoiceData({ ...invoiceData, dueDate: e.target.value })}
            />
          </div>
        </div>

        {/* Client Information */}
        <div className="space-y-4">
          <h3 className="font-semibold">Client Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="clientName">Client Name</Label>
              <Input
                id="clientName"
                value={invoiceData.clientName}
                onChange={(e) => setInvoiceData({ ...invoiceData, clientName: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="clientEmail">Client Email</Label>
              <Input
                id="clientEmail"
                type="email"
                value={invoiceData.clientEmail}
                onChange={(e) => setInvoiceData({ ...invoiceData, clientEmail: e.target.value })}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="clientAddress">Client Address</Label>
            <Input
              id="clientAddress"
              value={invoiceData.clientAddress}
              onChange={(e) => setInvoiceData({ ...invoiceData, clientAddress: e.target.value })}
            />
          </div>
        </div>

        {/* Line Items */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Line Items</h3>
            <Button onClick={addItem} size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Item
            </Button>
          </div>

          {items.map((item, index) => (
            <div key={index} className="grid grid-cols-12 gap-2 items-end">
              <div className="col-span-5">
                <Label>Description</Label>
                <Input
                  value={item.description}
                  onChange={(e) => updateItem(index, 'description', e.target.value)}
                  placeholder="Service description"
                />
              </div>
              <div className="col-span-2">
                <Label>Qty</Label>
                <Input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateItem(index, 'quantity', parseFloat(e.target.value) || 0)}
                  min="1"
                />
              </div>
              <div className="col-span-2">
                <Label>Rate</Label>
                <Input
                  type="number"
                  value={item.rate}
                  onChange={(e) => updateItem(index, 'rate', parseFloat(e.target.value) || 0)}
                  min="0"
                  step="0.01"
                />
              </div>
              <div className="col-span-2">
                <Label>Amount</Label>
                <Input value={formatCurrency(item.amount)} disabled />
              </div>
              <div className="col-span-1">
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => removeItem(index)}
                  disabled={items.length === 1}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="bg-gray-50 p-4 rounded-lg space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal:</span>
            <span className="font-semibold">{formatCurrency(calculateSubtotal())}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Tax (8%):</span>
            <span className="font-semibold">{formatCurrency(calculateTax())}</span>
          </div>
          <div className="flex justify-between text-lg border-t pt-2">
            <span className="font-bold">Total:</span>
            <span className="font-bold text-blue-600">{formatCurrency(calculateTotal())}</span>
          </div>
        </div>

        {/* Notes */}
        <div>
          <Label htmlFor="notes">Notes (Optional)</Label>
          <Textarea
            id="notes"
            value={invoiceData.notes}
            onChange={(e) => setInvoiceData({ ...invoiceData, notes: e.target.value })}
            placeholder="Additional notes or payment terms..."
            rows={3}
          />
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <Button onClick={generatePDF} className="flex-1">
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
          <Button variant="outline" className="flex-1">
            Save Draft
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
