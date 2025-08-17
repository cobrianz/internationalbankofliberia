import React from "react";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-secondary to-accent overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
              Banking Solutions for Your Personal Journey
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              From savings accounts to personal loans, we provide comprehensive
              financial services designed to help you achieve your personal
              goals and secure your financial future in Liberia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                className="shadow-neumorphic animate-scale-hover"
                iconName="UserPlus"
                iconPosition="left"
                iconSize={20}
              >
                Open Account Today
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="shadow-neumorphic animate-scale-hover"
                iconName="Calculator"
                iconPosition="left"
                iconSize={20}
              >
                Loan Calculator
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>FDIC Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>24/7 Online Banking</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>9 Branches Nationwide</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevation">
              <Image
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg"
                alt="Happy Liberian family using digital banking services"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-elevation border border-border max-w-xs">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-success rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Account Opened
                  </p>
                  <p className="text-xs text-muted-foreground">
                    In just 5 minutes
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Join over 50,000 satisfied customers across Liberia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
