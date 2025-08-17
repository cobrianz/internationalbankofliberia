import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TrustSignals = () => {
  const trustItems = [
    {
      id: 1,
      icon: "Shield",
      title: "FDIC Insured",
      description: "Your deposits are protected up to $250,000"
    },
    {
      id: 2,
      icon: "Lock",
      title: "Bank-Level Security",
      description: "256-bit SSL encryption for all transactions"
    },
    {
      id: 3,
      icon: "Award",
      title: "Licensed & Regulated",
      description: "Authorized by Central Bank of Liberia"
    },
    {
      id: 4,
      icon: "Users",
      title: "Community Focused",
      description: "Supporting Liberian economic growth since 2010"
    }
  ];

  const stats = [
    {
      id: 1,
      number: "50,000+",
      label: "Satisfied Customers",
      icon: "Users"
    },
    {
      id: 2,
      number: "9",
      label: "Branches Nationwide",
      icon: "MapPin"
    },
    {
      id: 3,
      number: "$100M+",
      label: "Assets Under Management",
      icon: "TrendingUp"
    },
    {
      id: 4,
      number: "24/7",
      label: "Customer Support",
      icon: "Headphones"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Trust Signals */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Your Trust is Our Priority
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto mb-12">
            Banking with confidence through security, regulation, and community commitment.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustItems?.map((item, index) => (
              <motion.div
                key={item?.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-neumorphic hover:shadow-elevation transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-neumorphic">
                  <Icon name={item?.icon} size={24} color="white" />
                </div>
                
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {item?.title}
                </h3>
                
                <p className="text-sm text-muted-foreground font-body">
                  {item?.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 shadow-elevation">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
              Trusted by Thousands
            </h3>
            <p className="text-white opacity-90 font-body">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats?.map((stat, index) => (
              <motion.div
                key={stat?.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                  <Icon name={stat?.icon} size={24} color="white" />
                </div>
                
                <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-1">
                  {stat?.number}
                </div>
                
                <div className="text-white opacity-90 font-body text-sm">
                  {stat?.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;