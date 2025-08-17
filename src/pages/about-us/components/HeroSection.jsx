import React from 'react';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-secondary to-accent py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-entrance">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-primary mb-6">
              About International Bank
            </h1>
            <p className="text-xl lg:text-2xl font-body text-foreground mb-8 leading-relaxed">
              Banking solutions designed to simplify your life, build businesses, strengthen our economy & empower communities across Liberia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="bg-card rounded-lg p-6 shadow-neumorphic">
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">9</h3>
                <p className="text-sm font-body text-muted-foreground">Branches Across Liberia</p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-neumorphic">
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">25+</h3>
                <p className="text-sm font-body text-muted-foreground">Years of Service</p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-neumorphic">
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">50K+</h3>
                <p className="text-sm font-body text-muted-foreground">Satisfied Customers</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevation">
              <Image
                src="https://www.bbc.com/news/world-africa-48540699"
                alt="International Bank Liberia headquarters building"
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-lg p-4 shadow-neumorphic">
              <p className="text-sm font-body text-primary font-semibold">Established 1999</p>
              <p className="text-xs font-body text-muted-foreground">Serving Liberia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;