import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      title: "Agency Banking",
      description: "Access banking services through our network of authorized agents across Liberia, bringing convenience to your doorstep.",
      icon: "Users",
      features: ["Cash Deposits", "Withdrawals", "Account Opening", "Bill Payments"],
      action: () => alert("Agency Banking details would be shown here")
    },
    {
      id: 2,
      title: "Personal Loan",
      description: "Flexible personal loans with competitive rates to help you achieve your goals, from education to home improvements.",
      icon: "DollarSign",
      features: ["Quick Approval", "Flexible Terms", "Low Interest", "No Hidden Fees"],
      action: () => alert("Personal Loan application would open here")
    },
    {
      id: 3,
      title: "e-Banking",
      description: "Secure online banking platform for 24/7 account access, transfers, and financial management from anywhere.",
      icon: "Smartphone",
      features: ["Account Balance", "Fund Transfer", "Bill Payment", "Transaction History"],
      action: () => alert("e-Banking platform would open here")
    },
    {
      id: 4,
      title: "Money Transfer",
      description: "Fast and secure domestic and international money transfer services with competitive exchange rates.",
      icon: "Send",
      features: ["Instant Transfer", "Global Reach", "Secure Processing", "Competitive Rates"],
      action: () => alert("Money Transfer service would open here")
    },
    {
      id: 5,
      title: "Other Services",
      description: "Comprehensive banking solutions including savings accounts, fixed deposits, trade finance, and business banking.",
      icon: "Grid3X3",
      features: ["Savings Account", "Fixed Deposits", "Trade Finance", "Business Banking"],
      action: () => alert("All services would be displayed here")
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Our Banking Services
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Comprehensive financial solutions designed to meet your personal and business needs with the trust and reliability you deserve.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service, index) => (
            <ServiceCard
              key={service?.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;