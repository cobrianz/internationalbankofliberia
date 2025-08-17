import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicesGrid from './components/ServicesGrid';
import ComparisonTable from './components/ComparisonTable';
import TestimonialsSection from './components/TestimonialsSection';
import QuickAccessWidgets from './components/QuickAccessWidgets';
import FinancialInclusionSection from './components/FinancialInclusionSection';
import PersonalAccountModal from "./PersonalAccountModal";
import BusinessAccountModal from "./BusinessAccountModal"; // Optional, if including on personal page

const PersonalBanking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Personal Banking Services | International Bank Liberia</title>
        <meta
          name="description"
          content="Discover comprehensive personal banking services in Liberia. Savings accounts, personal loans, mortgages, and digital banking solutions designed for your financial success."
        />
        <meta
          name="keywords"
          content="personal banking Liberia, savings account, personal loans, mortgage, digital banking, International Bank"
        />
        <meta
          property="og:title"
          content="Personal Banking Services | International Bank Liberia"
        />
        <meta
          property="og:description"
          content="Banking solutions designed to simplify your life and secure your financial future in Liberia."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="/personal-banking" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ServicesGrid />
          <ComparisonTable />
          <QuickAccessWidgets />
          <TestimonialsSection />
          <FinancialInclusionSection />
        </main>
        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-12 h-12 bg-primary text-white rounded-full shadow-elevation hover:shadow-neumorphic transition-all duration-200 z-50 flex items-center justify-center animate-scale-hover"
          aria-label="Back to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
        {/* Modals - Trigger them from buttons in ServicesGrid or HeroSection */}
        <PersonalAccountModal />
         <BusinessAccountModal /> 
       
      </div>
    </>
  );
};

export default PersonalBanking;