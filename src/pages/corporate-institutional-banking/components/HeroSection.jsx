import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Corporate & Institutional
              <span className="block text-accent">Banking Excellence</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
              Sophisticated financial solutions designed for large-scale enterprises, government institutions, and international organizations operating in Liberia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="secondary"
                size="lg"
                className="shadow-elevation animate-scale-hover"
                iconName="Building2"
                iconPosition="left"
                iconSize={20}
              >
                Corporate Solutions
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary shadow-elevation"
                iconName="Phone"
                iconPosition="left"
                iconSize={20}
              >
                Contact Relationship Manager
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">$2.5B+</div>
                <div className="text-sm text-white/80">Assets Under Management</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">150+</div>
                <div className="text-sm text-white/80">Corporate Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">25+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevation">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Corporate banking professionals in modern office"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-elevation border border-border"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">ISO 27001 Certified</div>
                  <div className="text-sm text-muted-foreground">Enterprise Security Standards</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;