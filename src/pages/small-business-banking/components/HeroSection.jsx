import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-secondary to-accent overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight"
            >
              Grow Your Business with
              <span className="block text-accent"> Trusted Banking Solutions</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-white text-opacity-90 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Empowering Liberian entrepreneurs with comprehensive business banking services, 
              flexible credit solutions, and personalized support to fuel your growth journey.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="default"
                size="lg"
                className="bg-white text-primary hover:bg-gray-50 shadow-neumorphic animate-scale-hover"
                iconName="Calendar"
                iconPosition="left"
                iconSize={20}
              >
                Schedule Consultation
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary shadow-neumorphic animate-scale-hover"
                iconName="Calculator"
                iconPosition="left"
                iconSize={20}
              >
                Loan Calculator
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevation">
              <Image
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Liberian small business owner working in their shop"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black from-opacity-20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-elevation border border-border"
            >
              <div className="text-center">
                <div className="text-2xl font-heading font-bold text-primary mb-1">500+</div>
                <div className="text-sm font-body text-muted-foreground">Businesses Served</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;