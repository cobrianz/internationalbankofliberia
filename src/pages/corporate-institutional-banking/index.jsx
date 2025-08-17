import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicesGrid from './components/ServicesGrid';
import CurrencyExchangeWidget from './components/CurrencyExchangeWidget';
import CaseStudies from './components/CaseStudies';
import ContactSection from './components/ContactSection';
import Icon from '../../components/AppIcon';

const CorporateInstitutionalBanking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Helmet>
        <title>Corporate & Institutional Banking - International Bank Liberia</title>
        <meta name="description" content="Sophisticated financial solutions for large enterprises, government institutions, and international organizations. Trade finance, treasury services, and custom banking solutions in Liberia." />
        <meta name="keywords" content="corporate banking, institutional banking, trade finance, treasury services, cash management, foreign exchange, Liberia banking" />
        <meta property="og:title" content="Corporate & Institutional Banking - International Bank Liberia" />
        <meta property="og:description" content="Advanced banking solutions for corporations and institutions with comprehensive treasury, trade finance, and cash management services." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Corporate & Institutional Banking - International Bank Liberia" />
        <meta name="twitter:description" content="Sophisticated financial solutions for large-scale enterprises and institutions operating in Liberia." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <ServicesGrid />
          <CurrencyExchangeWidget />
          <CaseStudies />
          <ContactSection />
        </main>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-primary rounded-full shadow-elevation hover:shadow-neumorphic transition-all duration-300 flex items-center justify-center animate-scale-hover z-50 group"
          aria-label="Back to top"
        >
          <Icon 
            name="ArrowUp" 
            size={24} 
            color="white" 
            className="group-hover:scale-110 transition-transform duration-200" 
          />
        </button>

        {/* Footer */}
        <footer className="bg-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg">
                    <Icon name="Landmark" size={28} color="#53622F" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold">International Bank</h3>
                    <p className="text-sm text-white/80">Liberia</p>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed mb-6">
                  Banking solutions designed to simplify your life, build businesses, strengthen our economy & empower communities.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Icon name="Facebook" size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Icon name="Linkedin" size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Icon name="Instagram" size={20} />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-heading font-semibold mb-6">Corporate Services</h4>
                <ul className="space-y-3 text-white/80">
                  <li><a href="#" className="hover:text-white transition-colors">Cash Management</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Trade Finance</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Foreign Exchange</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Treasury Services</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Institutional Lending</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-heading font-semibold mb-6">Quick Links</h4>
                <ul className="space-y-3 text-white/80">
                  <li><a href="/home-page" className="hover:text-white transition-colors">Home</a></li>
                  <li><a href="/personal-banking" className="hover:text-white transition-colors">Personal Banking</a></li>
                  <li><a href="/small-business-banking" className="hover:text-white transition-colors">Small Business</a></li>
                  <li><a href="/about-us" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="/publications-resources" className="hover:text-white transition-colors">Publications</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-heading font-semibold mb-6">Contact Information</h4>
                <div className="space-y-4 text-white/80">
                  <div className="flex items-start space-x-3">
                    <Icon name="MapPin" size={20} className="mt-1 flex-shrink-0" />
                    <div>
                      <p>Broad Street, Monrovia</p>
                      <p>Montserrado County, Liberia</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="flex-shrink-0" />
                    <p>+231-77-000-0000</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={20} className="flex-shrink-0" />
                    <p>corporate@internationalbank.lr</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={20} className="flex-shrink-0" />
                    <div>
                      <p>Mon-Fri: 9AM-2PM</p>
                      <p>Sat: 9AM-12PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
              <p>&copy; {new Date()?.getFullYear()} International Bank (Liberia) Limited. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CorporateInstitutionalBanking;