import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import PersonalBanking from './pages/personal-banking';
import SmallBusinessBanking from './pages/small-business-banking';
import CorporateInstitutionalBanking from './pages/corporate-institutional-banking';
import AboutUsPage from './pages/about-us';
import HomePage from './pages/home-page';
import PublicationsResources from './pages/publications-resources';
import CareersSection from "pages/careers/components/CareersSection";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AboutUsPage />} />
        <Route path="/personal-banking" element={<PersonalBanking />} />
        <Route path="/small-business-banking" element={<SmallBusinessBanking />} />
        <Route path="/corporate-institutional-banking" element={<CorporateInstitutionalBanking />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/publications-resources" element={<PublicationsResources />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
