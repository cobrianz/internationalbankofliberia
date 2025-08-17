import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Banking Solutions Designed to Simplify Your Life",
      subtitle: "Build businesses, strengthen our economy & empower communities",
      description: "Experience modern banking with International Bank (Liberia) Limited. From personal accounts to business solutions, we're here to support your financial journey.",
      image: "https://platform.keesingtechnologies.com/wp-content/uploads/2022/10/Liberia_500f.jpg",
      cta: "Open Account Today",
      ctaAction: () => alert("Account opening form would open here")
    },
    {
      id: 2,
      title: "Digital Banking at Your Fingertips",
      subtitle: "Secure, Fast, and Available 24/7",
      description: "Access your accounts, transfer money, and manage your finances anytime, anywhere with our comprehensive e-Banking platform.",
      image: "https://images.squarespace-cdn.com/content/v1/57a9e1de15d5dbd7b0893d88/1620062505946-AHWC4VXNAUEF0WP59ZOK/e4cf99ab-f44b-4e3a-ac9f-d6547e6dcc94.jpg?format=500w",
      cta: "Try e-Banking",
      ctaAction: () => alert("e-Banking login would open here")
    },
    {
      id: 3,
      title: "Supporting Liberian Businesses",
      subtitle: "Grow with confidence and reliable financial partnership",
      description: "From small enterprises to large corporations, we provide tailored financial solutions to help Liberian businesses thrive and contribute to economic growth.",
      image: "https://ibliberia.com/wp-content/themes/ib/images/ib-building.png",
      cta: "Business Solutions",
      ctaAction: () => alert("Business banking page would open here")
    },
    {
      id: 4,
      title: "9 Branches Across Liberia",
      subtitle: "Bringing banking services closer to you",
      description: "Visit any of our conveniently located branches for personalized service and expert financial advice from our dedicated team.",
      image: "https://elements.envato.com/100-liberian-dollar-bills-on-money-printing-machin-AWK2H8Z",
      cta: "Find Branch",
      ctaAction: () => alert("Branch locator would open here")
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides?.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides?.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides?.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides?.length) % slides?.length);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-gradient-to-br from-secondary to-accent">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <Image
              src={slides?.[currentSlide]?.image}
              alt={slides?.[currentSlide]?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-4xl mx-auto px-4 text-center text-white">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4"
                >
                  {slides?.[currentSlide]?.title}
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-lg md:text-xl font-body font-medium mb-2 text-accent"
                >
                  {slides?.[currentSlide]?.subtitle}
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-base md:text-lg font-body mb-8 max-w-2xl mx-auto opacity-90"
                >
                  {slides?.[currentSlide]?.description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Button
                    variant="default"
                    size="lg"
                    onClick={slides?.[currentSlide]?.ctaAction}
                    className="shadow-elevation animate-scale-hover"
                  >
                    {slides?.[currentSlide]?.cta}
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides?.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? 'bg-white scale-110' :'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;