import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const navigationItems = [

    { label: 'PERSONAL', path: '/personal-banking', icon: 'User' },
    { label: 'SMALL BUSINESS', path: '/small-business-banking', icon: 'Building2' },
    { label: 'CORPORATE & INSTITUTIONAL', path: '/corporate-institutional-banking', icon: 'Building' },
    { label: 'ABOUT', path: '/about-us', icon: 'Info' },
    { label: 'PUBLICATIONS', path: '/publications-resources', icon: 'FileText' },
     { label: 'CAREERS', path: '/careers', icon: 'Briefcase' },
  ];

  // Sub-navigation data based on current page
  const subNavigationData = {
    '/personal-banking': [
      { label: 'OPEN AN ACCOUNT', path: '/personal-banking#ib-personal-get-an-account' },
      { label: 'CREDIT FACILITIES', path: '/personal-banking#ib-personal-credit-facilities' },
      { label: 'E-BANKING', path: '/personal-banking#ib-e-banking' },
      { label: 'MONEY TRANSFER SERVICES', path: '/money-transfer-service' }
    ],
    '/small-business-banking': [
      { label: 'OPEN AN ACCOUNT', path: '/small-business-banking#ib-small-business-get-an-account' },
      { label: 'BUSINESS CREDIT FACILITIES', path: '/small-business-banking#ib-small-business-credit-facilities' },
      { label: 'BUSINESS E-BANKING', path: '/small-business-banking#ib-small-business-e-banking' },
      { label: 'MONEY TRANSFER SERVICES', path: '/money-transfer-service' },
      { label: 'OTHER SERVICES', path: '/other-services' }
    ],
    '/corporate-institutional-banking': [
      { label: 'OPEN AN ACCOUNT', path: '/corporate-institutional-banking#ib-corporate-get-an-account' },
      { label: 'CREDIT FACILITIES', path: '/corporate-institutional-banking#ib-corporate-credit-facilities' },
      { label: 'E-BANKING', path: '/corporate-institutional-banking#ib-e-banking' },
      { label: 'MONEY TRANSFER SERVICES', path: '/money-transfer-service' }
    ],
    '/about-us': [
      { label: 'OUR TEAM', path: '/about-us#ib-team' },
      { label: 'IB PARTNERS', path: '/our-partners' },
      { label: 'IB IN THE COMMUNITY', path: '/ib-community' },
      { label: 'IB LOCATIONS', path: '/locations' },
      { label: 'BOOK APPOINTMENT', path: '/book-appointment' }
    ],
    '/publications-resources': [
      { label: 'ANNOUNCEMENT', path: '/publications' },
      { label: 'ONLINE APPLICATION FORMS', path: '/online-forms' },
      { label: 'RESOURCES', path: '/resources' },
      { label: 'MEDIA & GALLERY', path: '/media-gallery' },
      { label: 'NEWS', path: '/blog' }
    ],
    '/careers': [
      { label: 'JOB OPENINGS', path: '/careers#job-openings' },
      { label: 'APPLY NOW', path: '/careers#apply-now' },
      { label: 'CAREER PATHS', path: '/careers#career-paths' },
      { label: 'BENEFITS', path: '/careers#benefits' }
    ]
  };

  const currentSubNav = subNavigationData?.[location?.pathname] || [];

  // Mobile menu items with sub-items
  const mobileMenuItems = [
    {
      label: 'CAREERS',
      path: '/careers',
      icon: 'Briefcase',
      subItems: [
        { label: 'JOB OPENINGS', path: '/careers#job-openings' },
        { label: 'APPLY NOW', path: '/careers#apply-now' },
        { label: 'CAREER PATHS', path: '/careers#career-paths' },
        { label: 'BENEFITS', path: '/careers#benefits' }
      ]
    },
    {
      ...navigationItems[1],
      label: 'PERSONAL',
      subItems: [
        { label: 'OPEN AN ACCOUNT', path: '/personal-banking#ib-personal-get-an-account' },
        { label: 'CREDIT FACILITIES', path: '/personal-banking#ib-personal-credit-facilities' },
        { label: 'E-BANKING', path: '/personal-banking#ib-e-banking' },
        { label: 'MONEY TRANSFER SERVICES', path: '/money-transfer-service' }
      ]
    },
    {
      ...navigationItems[2],
      label: 'SMALL BUSINESS',
      subItems: [
        { label: 'OPEN AN ACCOUNT', path: '/small-business-banking#ib-small-business-get-an-account' },
        { label: 'BUSINESS CREDIT FACILITIES', path: '/small-business-banking#ib-small-business-credit-facilities' },
        { label: 'BUSINESS E-BANKING', path: '/small-business-banking#ib-small-business-e-banking' },
        { label: 'MONEY TRANSFER SERVICES', path: '/money-transfer-service' },
        { label: 'OTHER SERVICES', path: '/other-services' }
      ]
    },
    {
      ...navigationItems[3],
      label: 'CORPORATE & INSTITUTIONAL',
      subItems: [
        { label: 'OPEN AN ACCOUNT', path: '/corporate-institutional-banking#ib-corporate-get-an-account' },
        { label: 'CREDIT FACILITIES', path: '/corporate-institutional-banking#ib-corporate-credit-facilities' },
        { label: 'E-BANKING', path: '/corporate-institutional-banking#ib-e-banking' },
        { label: 'MONEY TRANSFER SERVICES', path: '/money-transfer-service' }
      ]
    },
    {
      ...navigationItems[4],
      label: 'ABOUT',
      subItems: [
        { label: 'OUR TEAM', path: '/about-us#ib-team' },
        { label: 'IB PARTNERS', path: '/our-partners' },
        { label: 'IB IN THE COMMUNITY', path: '/ib-community' },
        { label: 'IB LOCATIONS', path: '/locations' },
        { label: 'BOOK APPOINTMENT', path: '/book-appointment' }
      ]
    },
    {
      ...navigationItems[5],
      label: 'PUBLICATIONS',
      subItems: [
        { label: 'ANNOUNCEMENT', path: '/publications' },
        { label: 'ONLINE APPLICATION FORMS', path: '/online-forms' },
        { label: 'RESOURCES', path: '/resources' },
        { label: 'MEDIA & GALLERY', path: '/media-gallery' },
        { label: 'NEWS', path: '/blog' }
      ]
    }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setSearchQuery('');
    }
  };

  const handleSearchSubmit = (e) => {
    e?.preventDefault();
    if (searchQuery?.trim()) {
      // Implement search functionality here
      console.log('Searching for:', searchQuery);
      alert(`Searching for: ${searchQuery}`);
    }
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location?.pathname]);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-primary/10 border-b border-primary/20 py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between text-sm">
            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://web.facebook.com/ibliberialimited/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors duration-200"
                aria-label="Facebook"
              >
                <Icon name="Facebook" size={16} />
              </a>
              <a 
                href="https://www.linkedin.com/company/international-bank-liberia-ltd/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Icon name="Linkedin" size={16} />
              </a>
              <a 
                href="https://www.instagram.com/ibliberia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors duration-200"
                aria-label="Instagram"
              >
                <Icon name="Instagram" size={16} />
              </a>
            </div>

            {/* Opening Hours */}
            <div className="text-foreground/80">
              Opening Hours : Monday to Friday - 9AM to 2PM | Saturday 9AM to 12 Noon
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Header */}
      <div className="header_mobile lg:hidden bg-card shadow-sm">
        <div className="flex items-center justify-between p-4">
          <div className="mobile_logo">
            <Link 
              to="/home-page"
              className="flex items-center space-x-3"
            >
              <img 
                src="https://ibliberia.com/wp-content/themes/ib/images/ib-brand-logo-with-name-white.png" 
                alt="International Bank Liberia" 
                className="h-10"
              />
            </Link>
          </div>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg hover:bg-accent transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>
      {/* Main Navigation Header */}
      <header className="ib-main-header sticky top-0 z-navigation bg-card shadow-elevation border-b border-border hidden lg:block">
        <div className="ib-main-header-wrap max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-20 px-4 lg:px-6">
            {/* Logo and Navigation */}
            <div className="ib-navigation flex items-center space-x-8">
              <Link 
                to="/home-page" 
                className="ib-brand-logo flex items-center hover:opacity-80 transition-opacity duration-200"
              >
                <img 
                  src="https://ibliberia.com/wp-content/themes/ib/images/ib-brand-logo-with-name.png" 
                  alt="International Bank Liberia" 
                  className="h-12"
                />
              </Link>
              
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`ib-menu-link px-4 py-2 rounded-lg font-body font-medium text-sm transition-all duration-200 hover:bg-accent hover:text-accent-foreground ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-neumorphic'
                      : 'text-foreground hover:shadow-neumorphic'
                  }`}
                >
                  {item?.label}
                </Link>
              ))}
            </div>

            {/* Online Banking and Search */}
            <div className="wrap-online-banking-and-search flex items-center space-x-4">
              <a
                target="_blank"
                href="https://onlinebanking.ibliberia.com/Trustbank_InternetBanking/"
                rel="noopener noreferrer"
                className="ib-internet-banking hidden sm:flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-neumorphic"
              >
                <img 
                  src="https://ibliberia.com/wp-content/themes/ib/icons/online-banking.png" 
                  alt="Online Banking" 
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">Online Banking</span>
              </a>
              
              <a
                target="_blank"
                href="https://onlinebanking.ibliberia.com/Trustbank_InternetBanking/"
                rel="noopener noreferrer"
                className="ib-internet-banking-icon sm:hidden p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-neumorphic"
                aria-label="Online Banking"
              >
                <img 
                  src="https://ibliberia.com/wp-content/themes/ib/icons/online-banking-icon.png" 
                  alt="Online Banking" 
                  className="w-5 h-5"
                />
              </a>

              {/* Search */}
              <div className="relative">
                <button
                  onClick={toggleSearch}
                  className={`search-button p-2 rounded-lg transition-colors duration-200 ${
                    isSearchOpen 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                  aria-label="Search"
                >
                  <Icon name={isSearchOpen ? "X" : "Search"} size={20} />
                </button>
                
                {isSearchOpen && (
                  <form 
                    onSubmit={handleSearchSubmit}
                    className="search-form absolute right-0 top-full mt-2 w-80 bg-popover border border-border rounded-lg shadow-elevation p-4 z-50"
                  >
                    <div className="flex items-center space-x-2">
                      <input
                        type="search"
                        className="search-field flex-1 px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter keyword..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e?.target?.value)}
                        autoFocus
                      />
                      <button
                        type="submit"
                        className="search-submit p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
                        aria-label="Submit search"
                      >
                        <Icon name="Search" size={16} />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Sub Navigation Header */}
      {currentSubNav?.length > 0 && (
        <div className="ib-sub-header bg-accent border-b border-border hidden lg:block">
          <div className="ib-sub-header-wrap max-w-7xl mx-auto">
            <div className="ib-navigation px-4 lg:px-6 py-3">
              <div className="flex items-center space-x-6 overflow-x-auto">
                {currentSubNav?.map((item, index) => (
                  <Link
                    key={index}
                    to={item?.path}
                    className="ib-menu-link whitespace-nowrap px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-background hover:shadow-neumorphic rounded-lg transition-all duration-200"
                  >
                    {item?.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-mobile-menu lg:hidden">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={closeMobileMenu}
          />
          <div className="absolute top-0 right-0 w-80 max-w-full h-full bg-card shadow-elevation overflow-y-auto">
            {/* Mobile Menu Header */}
            <div className="bg-primary/5 border-b border-border p-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-heading font-semibold text-foreground">
                  Navigation
                </h2>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <Icon name="X" size={24} />
                </button>
              </div>
              
              {/* Mobile Opening Hours */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={14} className="text-primary" />
                  <span className="text-foreground/80">Monday to Friday - 9AM to 2PM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={14} className="text-primary" />
                  <span className="text-foreground/80">Saturday 9AM to 12 Noon</span>
                </div>
              </div>
            </div>
            
            {/* Mobile Navigation */}
            <nav className="p-4">
              {mobileMenuItems?.map((item) => (
                <div key={item?.path} className="mb-2">
                  <Link
                    to={item?.path}
                    onClick={closeMobileMenu}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg font-body font-medium transition-all duration-200 min-h-touch ${
                      isActivePath(item?.path)
                        ? 'bg-primary text-primary-foreground shadow-neumorphic'
                        : 'text-foreground hover:bg-accent hover:text-accent-foreground hover:shadow-neumorphic'
                    }`}
                  >
                    <span>{item?.label}</span>
                  </Link>
                  
                  {/* Sub-menu items */}
                  {item?.subItems && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item?.subItems?.map((subItem, index) => (
                        <Link
                          key={index}
                          to={subItem?.path}
                          onClick={closeMobileMenu}
                          className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-accent rounded-lg transition-all duration-200"
                        >
                          {subItem?.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Online Banking Button */}
              <div className="pt-4 mt-4 border-t border-border">
                <a
                  target="_blank"
                  href="https://onlinebanking.ibliberia.com/Trustbank_InternetBanking/"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg shadow-neumorphic hover:bg-primary/90 transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  <Icon name="LogIn" size={20} />
                  <span>ONLINE BANKING LOGIN</span>
                </a>
                
                {/* Mobile Social Links */}
                <div className="flex items-center justify-center space-x-4 mt-4">
                  <a 
                    href="https://web.facebook.com/ibliberialimited/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <Icon name="Facebook" size={18} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/international-bank-liberia-ltd/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <Icon name="Linkedin" size={18} />
                  </a>
                  <a 
                    href="https://www.instagram.com/ibliberia/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <Icon name="Instagram" size={18} />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
      {/* Search Overlay for Mobile */}
      {isSearchOpen && (
        <div className="lg:hidden fixed inset-0 z-mobile-menu bg-background">
          <div className="p-4 border-b border-border">
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleSearch}
                className="p-2 rounded-lg hover:bg-accent transition-colors duration-200"
                aria-label="Close search"
              >
                <Icon name="ArrowLeft" size={24} />
              </button>
              <form onSubmit={handleSearchSubmit} className="flex-1">
                <div className="flex items-center space-x-2">
                  <input
                    type="search"
                    className="flex-1 px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e?.target?.value)}
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
                    aria-label="Submit search"
                  >
                    <Icon name="Search" size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;