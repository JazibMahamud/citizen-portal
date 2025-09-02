import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import Layout from '@/components/Layout';
import { Calculator, FileText, Download, RefreshCw } from 'lucide-react';

interface TaxResult {
  annualIncome: number;
  exemptionLimit: number;
  taxableIncome: number;
  totalTax: number;
  monthlyTax: number;
  effectiveRate: number;
}

interface VATResult {
  basePrice: string;
  vatAmount: string;
  totalPrice: string;
  vatRate: number;
}

export default function TaxCalculator() {
  const [incomeTax, setIncomeTax] = useState({
    annualIncome: '',
    taxYear: '2024-25',
    gender: '',
    age: '',
    location: 'dhaka'
  });

  const [vatCalculation, setVatCalculation] = useState({
    productPrice: '',
    vatRate: '15',
    includeVat: false
  });

  const [taxResult, setTaxResult] = useState<TaxResult | null>(null);
  const [vatResult, setVatResult] = useState<VATResult | null>(null);

  // Income Tax Calculation
  const calculateIncomeTax = () => {
    const income = parseFloat(incomeTax.annualIncome);
    if (!income || income <= 0) {
      alert('Please enter a valid annual income');
      return;
    }

    // Tax slabs for Bangladesh (2024-25)
    let taxableIncome = income;
    let totalTax = 0;
    let exemptionLimit = 350000; // Default exemption

    // Exemption limits based on gender and age
    if (incomeTax.gender === 'female' || incomeTax.gender === 'disabled') {
      exemptionLimit = 400000;
    } else if (incomeTax.gender === 'senior') {
      exemptionLimit = 450000;
    }

    if (income <= exemptionLimit) {
      totalTax = 0;
    } else {
      taxableIncome = income - exemptionLimit;
      
      // Tax calculation based on slabs
      if (taxableIncome <= 100000) {
        totalTax = taxableIncome * 0.05;
      } else if (taxableIncome <= 300000) {
        totalTax = 100000 * 0.05 + (taxableIncome - 100000) * 0.10;
      } else if (taxableIncome <= 400000) {
        totalTax = 100000 * 0.05 + 200000 * 0.10 + (taxableIncome - 300000) * 0.15;
      } else if (taxableIncome <= 500000) {
        totalTax = 100000 * 0.05 + 200000 * 0.10 + 100000 * 0.15 + (taxableIncome - 400000) * 0.20;
      } else {
        totalTax = 100000 * 0.05 + 200000 * 0.10 + 100000 * 0.15 + 100000 * 0.20 + (taxableIncome - 500000) * 0.25;
      }
    }

    setTaxResult({
      annualIncome: income,
      exemptionLimit,
      taxableIncome: Math.max(0, taxableIncome),
      totalTax: Math.max(0, totalTax),
      monthlyTax: Math.max(0, totalTax / 12),
      effectiveRate: income > 0 ? (totalTax / income * 100) : 0
    });
  };

  // VAT Calculation
  const calculateVAT = () => {
    const price = parseFloat(vatCalculation.productPrice);
    const rate = parseFloat(vatCalculation.vatRate);
    
    if (!price || price <= 0) {
      alert('Please enter a valid product price');
      return;
    }

    let vatAmount, totalPrice, basePrice;

    if (vatCalculation.includeVat) {
      // Price includes VAT
      basePrice = price / (1 + rate / 100);
      vatAmount = price - basePrice;
      totalPrice = price;
    } else {
      // Price excludes VAT
      basePrice = price;
      vatAmount = price * (rate / 100);
      totalPrice = price + vatAmount;
    }

    setVatResult({
      basePrice: basePrice.toFixed(2),
      vatAmount: vatAmount.toFixed(2),
      totalPrice: totalPrice.toFixed(2),
      vatRate: rate
    });
  };

  const resetIncomeTax = () => {
    setIncomeTax({
      annualIncome: '',
      taxYear: '2024-25',
      gender: '',
      age: '',
      location: 'dhaka'
    });
    setTaxResult(null);
  };

  const resetVAT = () => {
    setVatCalculation({
      productPrice: '',
      vatRate: '15',
      includeVat: false
    });
    setVatResult(null);
  };

  return (
    <Layout showSidebar>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tax & VAT Calculator</h1>
          <p className="text-gray-600">কর ও ভ্যাট ক্যালকুলেটর</p>
        </div>

        <Tabs defaultValue="income-tax" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="income-tax">Income Tax</TabsTrigger>
            <TabsTrigger value="vat">VAT Calculator</TabsTrigger>
          </TabsList>

          {/* Income Tax Calculator */}
          <TabsContent value="income-tax">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Input Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Income Tax Calculation</CardTitle>
                  <CardDescription>
                    Calculate your annual income tax
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="annual-income">Annual Income (BDT)</Label>
                    <Input
                      id="annual-income"
                      type="number"
                      placeholder="Enter your annual income"
                      value={incomeTax.annualIncome}
                      onChange={(e) => setIncomeTax(prev => ({ ...prev, annualIncome: e.target.value }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tax-year">Tax Year</Label>
                    <Select value={incomeTax.taxYear} onValueChange={(value) => setIncomeTax(prev => ({ ...prev, taxYear: value }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024-25">2024-25</SelectItem>
                        <SelectItem value="2023-24">2023-24</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gender">Category</Label>
                    <Select value={incomeTax.gender} onValueChange={(value) => setIncomeTax(prev => ({ ...prev, gender: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">General Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="senior">Senior Citizen (65+)</SelectItem>
                        <SelectItem value="disabled">Disabled Person</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex space-x-2">
                    <Button onClick={calculateIncomeTax} className="flex-1 bg-green-600 hover:bg-green-700">
                      <Calculator className="h-4 w-4 mr-2" />
                      Calculate Tax
                    </Button>
                    <Button onClick={resetIncomeTax} variant="outline">
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Results */}
              <Card>
                <CardHeader>
                  <CardTitle>Tax Results</CardTitle>
                </CardHeader>
                <CardContent>
                  {taxResult ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-600">Annual Income</p>
                          <p className="text-xl font-bold text-blue-600">
                            ৳{taxResult.annualIncome.toLocaleString()}
                          </p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-600">Tax-Free Limit</p>
                          <p className="text-xl font-bold text-green-600">
                            ৳{taxResult.exemptionLimit.toLocaleString()}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Taxable Income:</span>
                          <span className="font-semibold">৳{taxResult.taxableIncome.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold">
                          <span>Annual Tax:</span>
                          <span className="text-red-600">৳{Math.round(taxResult.totalTax).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Monthly Tax:</span>
                          <span className="font-semibold">৳{Math.round(taxResult.monthlyTax).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Effective Rate:</span>
                          <span className="font-semibold">{taxResult.effectiveRate.toFixed(2)}%</span>
                        </div>
                      </div>

                      <Button className="w-full" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download Report
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Enter income details to calculate tax</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* VAT Calculator */}
          <TabsContent value="vat">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* VAT Input Form */}
              <Card>
                <CardHeader>
                  <CardTitle>VAT Calculation</CardTitle>
                  <CardDescription>
                    Calculate VAT for products and services
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="product-price">Product Price (BDT)</Label>
                    <Input
                      id="product-price"
                      type="number"
                      placeholder="Enter product price"
                      value={vatCalculation.productPrice}
                      onChange={(e) => setVatCalculation(prev => ({ ...prev, productPrice: e.target.value }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vat-rate">VAT Rate (%)</Label>
                    <Select value={vatCalculation.vatRate} onValueChange={(value) => setVatCalculation(prev => ({ ...prev, vatRate: value }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15% (Standard)</SelectItem>
                        <SelectItem value="10">10% (Reduced)</SelectItem>
                        <SelectItem value="5">5% (Essential)</SelectItem>
                        <SelectItem value="0">0% (Exempt)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="include-vat"
                      checked={vatCalculation.includeVat}
                      onCheckedChange={(checked) => setVatCalculation(prev => ({ ...prev, includeVat: checked as boolean }))}
                    />
                    <Label htmlFor="include-vat">Price includes VAT</Label>
                  </div>

                  <div className="flex space-x-2">
                    <Button onClick={calculateVAT} className="flex-1 bg-green-600 hover:bg-green-700">
                      <Calculator className="h-4 w-4 mr-2" />
                      Calculate VAT
                    </Button>
                    <Button onClick={resetVAT} variant="outline">
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* VAT Results */}
              <Card>
                <CardHeader>
                  <CardTitle>VAT Results</CardTitle>
                </CardHeader>
                <CardContent>
                  {vatResult ? (
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-600">Base Price</p>
                          <p className="text-xl font-bold text-blue-600">
                            ৳{parseFloat(vatResult.basePrice).toLocaleString()}
                          </p>
                        </div>
                        
                        <div className="bg-red-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-600">VAT Amount ({vatResult.vatRate}%)</p>
                          <p className="text-xl font-bold text-red-600">
                            ৳{parseFloat(vatResult.vatAmount).toLocaleString()}
                          </p>
                        </div>
                        
                        <div className="bg-green-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-600">Total Price</p>
                          <p className="text-xl font-bold text-green-600">
                            ৳{parseFloat(vatResult.totalPrice).toLocaleString()}
                          </p>
                        </div>
                      </div>

                      <Button className="w-full" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download Report
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Enter product details to calculate VAT</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}