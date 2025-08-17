import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroCarousel from './components/HeroCarousel';
import ServicesGrid from './components/ServicesGrid';
import BranchLocator from './components/BranchLocator';
import TrustSignals from './components/TrustSignals';
import NewsletterSubscription from './components/NewsletterSubscription';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>International Bank (Liberia) Limited - Banking Solutions for Life</title>
        <meta name="description" content="Banking solutions designed to simplify your life, build businesses, strengthen our economy & empower communities. Personal banking, business loans, e-banking, and money transfer services across Liberia." />
        <meta name="keywords" content="banking, Liberia, personal banking, business banking, loans, e-banking, money transfer, International Bank" />
        <meta property="og:title" content="International Bank (Liberia) Limited - Banking Solutions for Life" />
        <meta property="og:description" content="Comprehensive banking services across Liberia with 9 branches nationwide. Personal banking, business solutions, and digital banking services." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="/home-page" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Hero Carousel */}
        <HeroCarousel />

        {/* Services Grid */}
        <ServicesGrid />

        {/* Trust Signals */}
        <TrustSignals />

        {/* Branch Locator */}
        <BranchLocator />

        {/* Newsletter Subscription */}
        <NewsletterSubscription />

        {/* Footer */}
        <Footer />

        {/* Back to Top Button */}
        <BackToTop />
      </div>
    </>
  );
};

export default HomePage;