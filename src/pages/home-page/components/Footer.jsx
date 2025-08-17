import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const [subscriptionEmail, setSubscriptionEmail] = useState('');
  const [subscriptionError, setSubscriptionError] = useState('');

  const handleQuickSubscription = (e) => {
    e?.preventDefault();
    
    if (!subscriptionEmail?.trim()) {
      setSubscriptionError('Email is required');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(subscriptionEmail)) {
      setSubscriptionError('Please enter a valid email address');
      return;
    }
    
    alert(`Thank you! You've been subscribed with ${subscriptionEmail}. Check your email for confirmation.`);
    setSubscriptionEmail('');
    setSubscriptionError('');
  };

  const handleSocialClick = (platform) => {
    alert(`${platform} page would open here`);
  };

  const services = [
    { name: "Personal Banking", path: "/personal-banking" },
    { name: "Small Business", path: "/small-business-banking" },
    { name: "Corporate Banking", path: "/corporate-institutional-banking" },
    { name: "Agency Banking", path: "/home-page" },
    { name: "e-Banking", path: "/home-page" },
    { name: "Money Transfer", path: "/home-page" }
  ];

  const quickLinks = [
    { name: "About Us", path: "/about-us" },
    { name: "Publications", path: "/publications-resources" },
    { name: "Branch Locator", path: "/home-page" },
    { name: "Contact Us", path: "/home-page" },
    { name: "Careers", path: "/home-page" },
    { name: "Privacy Policy", path: "/home-page" }
  ];

  const contactInfo = [
    { icon: "MapPin", text: "Broad Street, Central Monrovia, Montserrado County, Liberia" },
    { icon: "Phone", text: "+231-77-123-4567" },
    { icon: "Mail", text: "info@internationalbanklib.com" },
    { icon: "Clock", text: "Mon-Fri: 9:00 AM - 2:00 PM, Sat: 9:00 AM - 12:00 PM" }
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg shadow-neumorphic">
                <Icon name="Landmark" size={24} color="white" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold">
                  International Bank
                </h3>
                <p className="text-sm opacity-80">Liberia</p>
              </div>
            </div>
            
            <p className="text-sm opacity-80 font-body leading-relaxed">
              Banking solutions designed to simplify your life, build businesses, strengthen our economy & empower communities across Liberia.
            </p>
            
            <div className="flex space-x-4">
              <button
                onClick={() => handleSocialClick('Facebook')}
                className="w-10 h-10 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <Icon name="Facebook" size={20} />
              </button>
              
              <button
                onClick={() => handleSocialClick('LinkedIn')}
                className="w-10 h-10 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg flex items-center justify-center transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Icon name="Linkedin" size={20} />
              </button>
              
              <button
                onClick={() => handleSocialClick('Instagram')}
                className="w-10 h-10 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <Icon name="Instagram" size={20} />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services?.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service?.path}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all duration-200 font-body"
                  >
                    {service?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks?.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link?.path}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all duration-200 font-body"
                  >
                    {link?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4 mb-6">
              {contactInfo?.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Icon name={info?.icon} size={16} className="mt-0.5 flex-shrink-0 opacity-80" />
                  <span className="text-sm opacity-80 font-body">{info?.text}</span>
                </div>
              ))}
            </div>
            
            <div>
              <h5 className="text-sm font-heading font-semibold mb-3">Quick Subscribe</h5>
              <form onSubmit={handleQuickSubscription} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={subscriptionEmail}
                  onChange={(e) => {
                    setSubscriptionEmail(e?.target?.value);
                    if (subscriptionError) setSubscriptionError('');
                  }}
                  error={subscriptionError}
                  className="bg-white bg-opacity-10 border-white border-opacity-20 text-white placeholder-white placeholder-opacity-60"
                />
                <Button
                  type="submit"
                  variant="secondary"
                  size="sm"
                  fullWidth
                  iconName="Send"
                  iconPosition="right"
                  iconSize={16}
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white border-opacity-20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-80 font-body text-center md:text-left">
              © {new Date()?.getFullYear()} International Bank (Liberia) Limited. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <button
                onClick={() => alert('Privacy Policy would open here')}
                className="opacity-80 hover:opacity-100 transition-opacity duration-200 font-body"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => alert('Terms of Service would open here')}
                className="opacity-80 hover:opacity-100 transition-opacity duration-200 font-body"
              >
                Terms of Service
              </button>
              <button
                onClick={() => alert('Security Center would open here')}
                className="opacity-80 hover:opacity-100 transition-opacity duration-200 font-body"
              >
                Security
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;