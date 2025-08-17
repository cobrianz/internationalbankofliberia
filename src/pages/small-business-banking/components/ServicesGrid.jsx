import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      title: "Business Checking Accounts",
      description: "Flexible checking solutions designed for your business operations with competitive fees and convenient access.",
      features: [
        "No minimum balance requirement",
        "Free online and mobile banking",
        "Unlimited transactions",
        "Debit card included"
      ],
      icon: "CreditCard",
      color: "bg-primary"
    },
    {
      id: 2,
      title: "Business Savings Accounts",
      description: "Grow your business reserves with attractive interest rates and flexible access to your funds.",
      features: [
        "Competitive interest rates",
        "Quarterly statements",
        "Online account management",
        "Automatic transfers available"
      ],
      icon: "PiggyBank",
      color: "bg-secondary"
    },
    {
      id: 3,
      title: "Commercial Loans",
      description: "Flexible financing solutions to support your business expansion, equipment purchases, and working capital needs.",
      features: [
        "Competitive interest rates",
        "Flexible repayment terms",
        "Quick approval process",
        "Dedicated relationship manager"
      ],
      icon: "TrendingUp",
      color: "bg-success"
    },
    {
      id: 4,
      title: "Lines of Credit",
      description: "Access funds when you need them with our flexible business lines of credit for seasonal or unexpected expenses.",
      features: [
        "Draw funds as needed",
        "Pay interest only on used amount",
        "Revolving credit facility",
        "Online access and management"
      ],
      icon: "RefreshCw",
      color: "bg-warning"
    },
    {
      id: 5,
      title: "Merchant Services",
      description: "Accept payments seamlessly with our comprehensive merchant services and point-of-sale solutions.",
      features: [
        "Credit and debit card processing",
        "Mobile payment solutions",
        "Next-day funding available",
        "24/7 customer support"
      ],
      icon: "ShoppingCart",
      color: "bg-accent"
    },
    {
      id: 6,
      title: "International Money Transfer",
      description: "Send and receive international payments efficiently with competitive exchange rates and secure transfers.",
      features: [
        "Competitive exchange rates",
        "Secure wire transfers",
        "Same-day processing available",
        "Multi-currency support"
      ],
      icon: "Globe",
      color: "bg-muted"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Comprehensive Business Banking Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From everyday banking to complex financing solutions, we provide the tools and support 
            your business needs to thrive in Liberia's growing economy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service, index) => (
            <motion.div
              key={service?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-neumorphic hover:shadow-elevation transition-all duration-300 animate-scale-hover border border-border"
            >
              <div className={`w-16 h-16 ${service?.color} rounded-xl flex items-center justify-center mb-6 shadow-neumorphic`}>
                <Icon name={service?.icon} size={28} color="white" />
              </div>
              
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                {service?.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service?.description}
              </p>
              
              <ul className="space-y-3">
                {service?.features?.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Icon name="Check" size={16} className="text-success mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-border">
                <button className="text-primary font-body font-medium hover:text-primary-foreground hover:bg-primary px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 group">
                  <span>Learn More</span>
                  <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;