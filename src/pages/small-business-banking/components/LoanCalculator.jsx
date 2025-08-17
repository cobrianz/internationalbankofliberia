import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('50000');
  const [interestRate, setInterestRate] = useState('12');
  const [loanTerm, setLoanTerm] = useState('36');
  const [currency, setCurrency] = useState('USD');
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const currencyOptions = [
    { value: 'USD', label: 'US Dollar (USD)' },
    { value: 'LRD', label: 'Liberian Dollar (LRD)' }
  ];

  const termOptions = [
    { value: '12', label: '12 months (1 year)' },
    { value: '24', label: '24 months (2 years)' },
    { value: '36', label: '36 months (3 years)' },
    { value: '48', label: '48 months (4 years)' },
    { value: '60', label: '60 months (5 years)' }
  ];

  useEffect(() => {
    calculateLoan();
  }, [loanAmount, interestRate, loanTerm]);

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount) || 0;
    const rate = (parseFloat(interestRate) || 0) / 100 / 12;
    const term = parseInt(loanTerm) || 1;

    if (principal > 0 && rate > 0 && term > 0) {
      const monthly = (principal * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
      const total = monthly * term;
      const interest = total - principal;

      setMonthlyPayment(monthly);
      setTotalPayment(total);
      setTotalInterest(interest);
    } else {
      setMonthlyPayment(0);
      setTotalPayment(0);
      setTotalInterest(0);
    }
  };

  const formatCurrency = (amount) => {
    const symbol = currency === 'USD' ? '$' : 'L$';
    return `${symbol}${amount?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const handleApplyNow = () => {
    alert(`Loan application initiated!\n\nLoan Details:\nAmount: ${formatCurrency(parseFloat(loanAmount))}\nTerm: ${loanTerm} months\nEstimated Monthly Payment: ${formatCurrency(monthlyPayment)}\n\nA relationship manager will contact you within 24 hours.`);
  };

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Business Loan Calculator
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get an instant estimate of your monthly payments and total loan cost. 
            Our competitive rates help you plan your business financing effectively.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 shadow-neumorphic border border-border"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-neumorphic">
                <Icon name="Calculator" size={24} color="white" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-foreground">
                Calculate Your Loan
              </h3>
            </div>

            <div className="space-y-6">
              <Input
                label="Loan Amount"
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e?.target?.value)}
                placeholder="Enter loan amount"
                className="mb-4"
              />

              <Select
                label="Currency"
                options={currencyOptions}
                value={currency}
                onChange={setCurrency}
                className="mb-4"
              />

              <Input
                label="Annual Interest Rate (%)"
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e?.target?.value)}
                placeholder="Enter interest rate"
                className="mb-4"
              />

              <Select
                label="Loan Term"
                options={termOptions}
                value={loanTerm}
                onChange={setLoanTerm}
                className="mb-6"
              />

              <Button
                variant="default"
                fullWidth
                onClick={handleApplyNow}
                className="shadow-neumorphic animate-scale-hover"
                iconName="FileText"
                iconPosition="left"
                iconSize={20}
              >
                Apply for This Loan
              </Button>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Monthly Payment */}
            <div className="bg-card rounded-2xl p-8 shadow-neumorphic border border-border">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-heading font-semibold text-foreground">
                  Monthly Payment
                </h4>
                <Icon name="Calendar" size={24} className="text-primary" />
              </div>
              <div className="text-3xl font-heading font-bold text-primary mb-2">
                {formatCurrency(monthlyPayment)}
              </div>
              <p className="text-sm text-muted-foreground">
                Fixed monthly payment for {loanTerm} months
              </p>
            </div>

            {/* Total Payment */}
            <div className="bg-card rounded-2xl p-8 shadow-neumorphic border border-border">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-heading font-semibold text-foreground">
                  Total Payment
                </h4>
                <Icon name="DollarSign" size={24} className="text-secondary" />
              </div>
              <div className="text-3xl font-heading font-bold text-secondary mb-2">
                {formatCurrency(totalPayment)}
              </div>
              <p className="text-sm text-muted-foreground">
                Total amount you'll pay over the loan term
              </p>
            </div>

            {/* Total Interest */}
            <div className="bg-card rounded-2xl p-8 shadow-neumorphic border border-border">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-heading font-semibold text-foreground">
                  Total Interest
                </h4>
                <Icon name="Percent" size={24} className="text-warning" />
              </div>
              <div className="text-3xl font-heading font-bold text-warning mb-2">
                {formatCurrency(totalInterest)}
              </div>
              <p className="text-sm text-muted-foreground">
                Total interest paid over the loan term
              </p>
            </div>

            {/* Contact Info */}
            <div className="bg-accent rounded-2xl p-6 border border-border">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-neumorphic flex-shrink-0">
                  <Icon name="Phone" size={20} color="white" />
                </div>
                <div>
                  <h5 className="font-heading font-semibold text-foreground mb-2">
                    Need Help with Your Application?
                  </h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    Speak with our business banking specialists for personalized assistance.
                  </p>
                  <p className="text-sm font-body font-medium text-primary">
                    Call: +231-77-123-4567
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculator;