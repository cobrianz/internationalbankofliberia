import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicesGrid from './components/ServicesGrid';
import LoanCalculator from './components/LoanCalculator';
import SuccessStories from './components/SuccessStories';
import ResourceCenter from './components/ResourceCenter';
import RelationshipManager from './components/RelationshipManager';
import Icon from '../../components/AppIcon';

const SmallBusinessBanking = () => {
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
        <title>Small Business Banking - International Bank Liberia</title>
        <meta name="description" content="Comprehensive business banking services for Liberian SMEs including business accounts, commercial loans, merchant services, and dedicated relationship management support." />
        <meta name="keywords" content="small business banking, commercial loans, business accounts, merchant services, Liberia business banking, SME financing" />
        <meta property="og:title" content="Small Business Banking - International Bank Liberia" />
        <meta property="og:description" content="Empowering Liberian entrepreneurs with comprehensive business banking services, flexible credit solutions, and personalized support." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Small Business Banking - International Bank Liberia" />
        <meta name="twitter:description" content="Comprehensive business banking services for Liberian SMEs with dedicated relationship management support." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "International Bank Liberia - Small Business Banking",
            "description": "Comprehensive business banking services for small and medium enterprises in Liberia",
            "url": "https://internationalbank.lr/small-business-banking",
            "telephone": "+231-77-123-4567",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "LR",
              "addressLocality": "Monrovia"
            },
            "serviceType": [
              "Business Checking Accounts",
              "Business Savings Accounts", 
              "Commercial Loans",
              "Lines of Credit",
              "Merchant Services",
              "International Money Transfer"
            ]
          })}
        </script>

        {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T5NDMDLC');`}
        </script>
      </Helmet>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-T5NDMDLC"
          height="0" 
          width="0" 
          style={{display: 'none', visibility: 'hidden'}}
        />
      </noscript>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Breadcrumb Navigation */}
        <nav className="bg-muted border-b border-border" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <a href="/home-page" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Home
                </a>
              </li>
              <li className="flex items-center">
                <Icon name="ChevronRight" size={16} className="text-muted-foreground mx-2" />
                <span className="text-foreground font-medium">Small Business Banking</span>
              </li>
            </ol>
          </div>
        </nav>

        <main>
          <HeroSection />
          <ServicesGrid />
          <LoanCalculator />
          <SuccessStories />
          <ResourceCenter />
          <RelationshipManager />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <Icon name="Landmark" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold">International Bank</h3>
                    <p className="text-sm opacity-80">Liberia</p>
                  </div>
                </div>
                <p className="text-sm opacity-90 leading-relaxed mb-4">
                  Banking solutions designed to simplify your life, build businesses, 
                  strengthen our economy & empower communities.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all duration-200">
                    <Icon name="Facebook" size={16} />
                  </a>
                  <a href="#" className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all duration-200">
                    <Icon name="Linkedin" size={16} />
                  </a>
                  <a href="#" className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all duration-200">
                    <Icon name="Instagram" size={16} />
                  </a>
                </div>
              </div>

              {/* Business Services */}
              <div>
                <h4 className="text-lg font-heading font-semibold mb-6">Business Services</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-200">Business Checking</a></li>
                  <li><a href="#" className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-200">Business Savings</a></li>
                  <li><a href="#" className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-200">Commercial Loans</a></li>
                  <li><a href="#" className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-200">Lines of Credit</a></li>
                  <li><a href="#" className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-200">Merchant Services</a></li>
                  <li><a href="#" className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-200">International Transfer</a></li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-heading font-semibold mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  <li><a href="/personal-banking" className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-200">Personal Banking</a></li>
                  <li><a href="/corporate-institutional-banking" className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-200">Corporate Banking</a></li>
                  <li><a href="/about-us" className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-200">About Us</a></li>
                  <li><a href="/publications-resources" className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-200">Publications</a></li>
                  <li><a href="#" className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-200">Online Banking</a></li>
                  <li><a href="#" className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-200">Contact Us</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-heading font-semibold mb-6">Contact Information</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="MapPin" size={16} className="mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm opacity-90">Broad Street</p>
                      <p className="text-sm opacity-90">Monrovia, Liberia</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={16} className="flex-shrink-0" />
                    <p className="text-sm opacity-90">+231-77-123-4567</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={16} className="flex-shrink-0" />
                    <p className="text-sm opacity-90">business@internationalbank.lr</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Clock" size={16} className="mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm opacity-90">Mon-Fri: 9AM-2PM</p>
                      <p className="text-sm opacity-90">Sat: 9AM-12PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white border-opacity-20 mt-12 pt-8 text-center">
              <p className="text-sm opacity-80">
                © {new Date()?.getFullYear()} International Bank (Liberia) Limited. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-elevation hover:shadow-neumorphic transition-all duration-300 animate-scale-hover z-50 flex items-center justify-center"
            aria-label="Back to top"
          >
            <Icon name="ArrowUp" size={20} />
          </button>
        )}
      </div>
    </>
  );
};

export default SmallBusinessBanking;