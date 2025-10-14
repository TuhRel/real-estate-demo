'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/utils';

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMortgage = () => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const payment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    setMonthlyPayment(payment);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Mortgage Calculator</CardTitle>
        <CardDescription>Estimate your monthly mortgage payment</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="homePrice">Home Price</Label>
          <Input
            id="homePrice"
            type="number"
            value={homePrice}
            onChange={(e) => setHomePrice(Number(e.target.value))}
          />
        </div>

        <div>
          <Label htmlFor="downPayment">Down Payment</Label>
          <Input
            id="downPayment"
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
          />
          <p className="text-sm text-gray-500 mt-1">
            {((downPayment / homePrice) * 100).toFixed(1)}% of home price
          </p>
        </div>

        <div>
          <Label htmlFor="interestRate">Interest Rate (%)</Label>
          <Input
            id="interestRate"
            type="number"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
          />
        </div>

        <div>
          <Label htmlFor="loanTerm">Loan Term (years)</Label>
          <Input
            id="loanTerm"
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
          />
        </div>

        <Button onClick={calculateMortgage} className="w-full">
          Calculate
        </Button>

        {monthlyPayment > 0 && (
          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <p className="text-sm text-gray-600">Estimated Monthly Payment</p>
            <p className="text-3xl font-bold text-blue-600">
              {formatCurrency(monthlyPayment)}
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Loan Amount:</span>
                <span className="font-semibold">{formatCurrency(homePrice - downPayment)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Interest:</span>
                <span className="font-semibold">
                  {formatCurrency(monthlyPayment * loanTerm * 12 - (homePrice - downPayment))}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Payment:</span>
                <span className="font-semibold">
                  {formatCurrency(monthlyPayment * loanTerm * 12)}
                </span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
