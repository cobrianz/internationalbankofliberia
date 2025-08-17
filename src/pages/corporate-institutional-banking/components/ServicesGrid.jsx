import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      title: "Corporate Accounts & Cash Management",
      description: "Comprehensive account solutions with advanced cash flow optimization, liquidity management, and automated payment processing for large-scale operations.",
      features: [
        "Multi-currency account management",
        "Real-time cash positioning",
        "Automated clearing house services",
        "Sweep account facilities"
      ],
      icon: "Wallet",
      color: "bg-primary"
    },
    {
      id: 2,
      title: "Trade Finance & Letters of Credit",
      description: "International trade facilitation with letters of credit, documentary collections, trade guarantees, and export-import financing solutions.",
      features: [
        "Import/Export letters of credit",
        "Documentary collections",
        "Trade guarantees & bonds",
        "Supply chain financing"
      ],
      icon: "Ship",
      color: "bg-secondary"
    },
    {
      id: 3,
      title: "Foreign Exchange Services",
      description: "Comprehensive FX solutions including spot transactions, forward contracts, currency hedging, and risk management for international operations.",
      features: [
        "Spot & forward contracts",
        "Currency risk hedging",
        "Multi-currency payments",
        "FX advisory services"
      ],
      icon: "DollarSign",
      color: "bg-success"
    },
    {
      id: 4,
      title: "Institutional Lending Facilities",
      description: "Tailored credit solutions including term loans, revolving credit facilities, project financing, and structured lending for institutional clients.",
      features: [
        "Term loans & credit lines",
        "Project financing",
        "Syndicated lending",
        "Asset-based financing"
      ],
      icon: "TrendingUp",
      color: "bg-warning"
    },
    {
      id: 5,
      title: "Treasury & Investment Services",
      description: "Professional treasury management, investment advisory, portfolio management, and capital market services for institutional investors.",
      features: [
        "Portfolio management",
        "Investment advisory",
        "Capital market access",
        "Risk assessment tools"
      ],
      icon: "PieChart",
      color: "bg-primary"
    },
    {
      id: 6,
      title: "Digital Banking Solutions",
      description: "Advanced digital platforms for corporate banking including API integration, automated reporting, and real-time transaction monitoring.",
      features: [
        "API banking integration",
        "Real-time reporting",
        "Mobile corporate banking",
        "Automated reconciliation"
      ],
      icon: "Smartphone",
      color: "bg-secondary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Comprehensive Corporate Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sophisticated financial services designed to meet the complex requirements of large enterprises, government institutions, and international organizations.
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
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-neumorphic hover:shadow-elevation transition-all duration-300 animate-scale-hover border border-border h-full">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${service?.color} rounded-xl flex items-center justify-center shadow-neumorphic group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={service?.icon} size={28} color="white" />
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service?.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service?.description}
                </p>

                <div className="space-y-3">
                  {service?.features?.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <button className="text-primary font-semibold hover:text-secondary transition-colors duration-200 flex items-center space-x-2 group">
                    <span>Learn More</span>
                    <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;