import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-2xl p-6 shadow-neumorphic hover:shadow-elevation transition-all duration-300 animate-scale-hover group"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-neumorphic group-hover:scale-110 transition-transform duration-300">
          <Icon name={service?.icon} size={32} color="white" />
        </div>
        
        <h3 className="text-xl font-heading font-semibold text-foreground">
          {service?.title}
        </h3>
        
        <p className="text-muted-foreground font-body text-sm leading-relaxed">
          {service?.description}
        </p>
        
        <div className="flex flex-wrap gap-2 justify-center">
          {service?.features?.map((feature, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-accent text-accent-foreground text-xs font-body rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={service?.action}
          className="mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
          iconName="ArrowRight"
          iconPosition="right"
          iconSize={16}
        >
          Learn More
        </Button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;