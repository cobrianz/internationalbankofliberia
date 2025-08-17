import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import LeadershipSection from './components/LeadershipSection';
import HistoryTimeline from './components/HistoryTimeline';
import CommunitySection from './components/CommunitySection';
import BranchNetworkSection from './components/BranchNetworkSection';
import CareersSection from '../careers/components/CareersSection';

const AboutUsPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - International Bank (Liberia) Limited | Banking Excellence Since 1999</title>
        <meta 
          name="description" 
          content="Learn about International Bank Liberia's mission, leadership, community impact, and 25+ years of banking excellence. Discover our 9 branches across Liberia and career opportunities." 
        />
        <meta name="keywords" content="International Bank Liberia, about us, banking history, leadership team, community impact, branch network, careers, Liberian banking" />
        <meta property="og:title" content="About International Bank (Liberia) Limited - Banking Excellence Since 1999" />
        <meta property="og:description" content="Discover our mission to empower communities, strengthen Liberia's economy, and provide innovative banking solutions across 9 branches nationwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://internationalbank.lr/about-us" />
        <link rel="canonical" href="https://internationalbank.lr/about-us" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "International Bank (Liberia) Limited",
            "description": "Leading financial institution in Liberia providing comprehensive banking services since 1999",
            "foundingDate": "1999",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Broad Street",
              "addressLocality": "Monrovia",
              "addressCountry": "LR"
            },
            "telephone": "+231-77-123-4567",
            "url": "https://internationalbank.lr",
            "sameAs": [
              "https://facebook.com/internationalbanklib",
              "https://linkedin.com/company/international-bank-liberia",
              "https://instagram.com/internationalbanklib"
            ]
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <MissionSection />
          <LeadershipSection />
          <HistoryTimeline />
          <CommunitySection />
          <BranchNetworkSection />
          <CareersSection />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-heading font-bold mb-6">Contact Information</h3>
                <div className="space-y-3 text-sm font-body">
                  <p>Broad Street, Central Monrovia</p>
                  <p>Phone: +231-77-123-4567</p>
                  <p>Email: info@internationalbank.lr</p>
                  <p>Hours: Mon-Fri 9AM-2PM</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold mb-6">Quick Links</h3>
                <div className="space-y-2 text-sm font-body">
                  <a href="/personal-banking" className="block hover:text-accent transition-colors">Personal Banking</a>
                  <a href="/small-business-banking" className="block hover:text-accent transition-colors">Business Banking</a>
                  <a href="/corporate-institutional-banking" className="block hover:text-accent transition-colors">Corporate Banking</a>
                  <a href="/publications-resources" className="block hover:text-accent transition-colors">Publications</a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold mb-6">Services</h3>
                <div className="space-y-2 text-sm font-body">
                  <p>Online Banking</p>
                  <p>Mobile Banking</p>
                  <p>Money Transfer</p>
                  <p>International Trade</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-accent transition-colors">Facebook</a>
                  <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
                  <a href="#" className="hover:text-accent transition-colors">Instagram</a>
                </div>
              </div>
            </div>
            <div className="border-t border-primary-foreground/20 pt-8 text-center">
              <p className="text-sm font-body">
                © {new Date()?.getFullYear()} International Bank (Liberia) Limited. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutUsPage;