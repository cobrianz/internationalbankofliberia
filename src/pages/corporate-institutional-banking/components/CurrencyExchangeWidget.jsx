import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CurrencyExchangeWidget = () => {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('LRD');
  const [amount, setAmount] = useState('1000');
  const [convertedAmount, setConvertedAmount] = useState('');

  // Mock exchange rates
  const exchangeRates = {
    'USD': { 'LRD': 185.50, 'EUR': 0.85, 'GBP': 0.73, 'NGN': 460.25 },
    'LRD': { 'USD': 0.0054, 'EUR': 0.0046, 'GBP': 0.0039, 'NGN': 2.48 },
    'EUR': { 'USD': 1.18, 'LRD': 218.65, 'GBP': 0.86, 'NGN': 542.30 },
    'GBP': { 'USD': 1.37, 'LRD': 254.24, 'EUR': 1.16, 'NGN': 630.74 },
    'NGN': { 'USD': 0.0022, 'LRD': 0.40, 'EUR': 0.0018, 'GBP': 0.0016 }
  };

  const currencies = [
    { code: 'USD', name: 'US Dollar', flag: '🇺🇸' },
    { code: 'LRD', name: 'Liberian Dollar', flag: '🇱🇷' },
    { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
    { code: 'GBP', name: 'British Pound', flag: '🇬🇧' },
    { code: 'NGN', name: 'Nigerian Naira', flag: '🇳🇬' }
  ];

  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    if (amount && fromCurrency && toCurrency) {
      const rate = exchangeRates?.[fromCurrency]?.[toCurrency] || 1;
      const result = (parseFloat(amount) * rate)?.toFixed(2);
      setConvertedAmount(result);
    }
  }, [amount, fromCurrency, toCurrency]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const formatTime = (date) => {
    return date?.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      timeZone: 'Africa/Monrovia'
    });
  };

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Real-Time Currency Exchange
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Access competitive foreign exchange rates for your international transactions. Our treasury team provides personalized FX solutions for large-volume trades.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                  <Icon name="Clock" size={24} color="white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">24/7 FX Trading</div>
                  <div className="text-sm text-muted-foreground">Round-the-clock currency exchange services</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Shield" size={24} color="white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Competitive Rates</div>
                  <div className="text-sm text-muted-foreground">Best-in-market exchange rates for corporate clients</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Icon name="Users" size={24} color="white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Dedicated Support</div>
                  <div className="text-sm text-muted-foreground">Personal FX relationship managers</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-neumorphic border border-border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-heading font-bold text-foreground">Currency Calculator</h3>
                <div className="text-sm text-muted-foreground">
                  Last updated: {formatTime(lastUpdated)} WAT
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">From</label>
                  <div className="flex space-x-3">
                    <select
                      value={fromCurrency}
                      onChange={(e) => setFromCurrency(e?.target?.value)}
                      className="flex-1 px-4 py-3 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                    >
                      {currencies?.map((currency) => (
                        <option key={currency?.code} value={currency?.code}>
                          {currency?.flag} {currency?.code} - {currency?.name}
                        </option>
                      ))}
                    </select>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e?.target?.value)}
                      className="w-32 px-4 py-3 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                      placeholder="Amount"
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={swapCurrencies}
                    className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-neumorphic hover:shadow-elevation transition-all duration-200 animate-scale-hover"
                  >
                    <Icon name="ArrowUpDown" size={20} color="white" />
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">To</label>
                  <div className="flex space-x-3">
                    <select
                      value={toCurrency}
                      onChange={(e) => setToCurrency(e?.target?.value)}
                      className="flex-1 px-4 py-3 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                    >
                      {currencies?.map((currency) => (
                        <option key={currency?.code} value={currency?.code}>
                          {currency?.flag} {currency?.code} - {currency?.name}
                        </option>
                      ))}
                    </select>
                    <div className="w-32 px-4 py-3 border border-border rounded-lg bg-muted text-foreground font-semibold">
                      {convertedAmount}
                    </div>
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-2">Exchange Rate</div>
                  <div className="text-lg font-semibold text-foreground">
                    1 {fromCurrency} = {exchangeRates?.[fromCurrency]?.[toCurrency]?.toFixed(4) || '1.0000'} {toCurrency}
                  </div>
                </div>

                <Button
                  variant="default"
                  fullWidth
                  className="shadow-neumorphic"
                  iconName="Phone"
                  iconPosition="left"
                  iconSize={20}
                >
                  Contact FX Specialist
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CurrencyExchangeWidget;