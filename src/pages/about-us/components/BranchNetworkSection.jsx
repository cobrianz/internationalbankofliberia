import React from 'react';
import Icon from '../../../components/AppIcon';

const BranchNetworkSection = () => {
  const branches = [
    {
      name: 'Monrovia Main Branch',
      address: 'Broad Street, Central Monrovia',
      phone: '+231-77-123-4567',
      hours: 'Mon-Fri: 9AM-2PM, Sat: 9AM-12PM',
      services: ['Full Banking Services', 'ATM', 'Safe Deposit Boxes', 'Foreign Exchange'],
      manager: 'John K. Mensah',
      coordinates: '6.3106,-10.8047'
    },
    {
      name: 'Buchanan Branch',
      address: 'J.J. Roberts Street, Buchanan',
      phone: '+231-77-234-5678',
      hours: 'Mon-Fri: 9AM-2PM, Sat: 9AM-12PM',
      services: ['Personal Banking', 'Business Banking', 'ATM', 'Money Transfer'],
      manager: 'Mary T. Johnson',
      coordinates: '5.8808,-10.0467'
    },
    {
      name: 'Gbarnga Branch',
      address: 'Kakata Highway, Gbarnga',
      phone: '+231-77-345-6789',
      hours: 'Mon-Fri: 9AM-2PM, Sat: 9AM-12PM',
      services: ['Personal Banking', 'Microfinance', 'ATM', 'Mobile Banking'],
      manager: 'Samuel B. Kpoto',
      coordinates: '6.9978,-9.4739'
    },
    {
      name: 'Kakata Branch',
      address: 'Tubman Boulevard, Kakata',
      phone: '+231-77-456-7890',
      hours: 'Mon-Fri: 9AM-2PM, Sat: 9AM-12PM',
      services: ['Personal Banking', 'Agricultural Loans', 'ATM', 'Savings Accounts'],
      manager: 'Grace N. Williams',
      coordinates: '6.5186,-10.3508'
    },
    {
      name: 'Harper Branch',
      address: 'Main Street, Harper',
      phone: '+231-77-567-8901',
      hours: 'Mon-Fri: 9AM-2PM, Sat: 9AM-12PM',
      services: ['Personal Banking', 'Business Banking', 'ATM', 'International Transfers'],
      manager: 'Robert C. Davis',
      coordinates: '4.3750,-7.7169'
    },
    {
      name: 'Zwedru Branch',
      address: 'Commercial District, Zwedru',
      phone: '+231-77-678-9012',
      hours: 'Mon-Fri: 9AM-2PM, Sat: 9AM-12PM',
      services: ['Personal Banking', 'Small Business Loans', 'ATM', 'Financial Advisory'],
      manager: 'Elizabeth M. Cooper',
      coordinates: '6.0667,-8.1333'
    },
    {
      name: 'Voinjama Branch',
      address: 'Central Market Area, Voinjama',
      phone: '+231-77-789-0123',
      hours: 'Mon-Fri: 9AM-2PM, Sat: 9AM-12PM',
      services: ['Personal Banking', 'Cross-border Services', 'ATM', 'Money Transfer'],
      manager: 'Mohammed A. Kamara',
      coordinates: '8.4219,-9.7478'
    },
    {
      name: 'Greenville Branch',
      address: 'Sinoe Avenue, Greenville',
      phone: '+231-77-890-1234',
      hours: 'Mon-Fri: 9AM-2PM, Sat: 9AM-12PM',
      services: ['Personal Banking', 'Marine Insurance', 'ATM', 'Trade Finance'],
      manager: 'Janet K. Brown',
      coordinates: '5.0114,-9.0417'
    },
    {
      name: 'Tubmanburg Branch',
      address: 'Main Highway, Tubmanburg',
      phone: '+231-77-901-2345',
      hours: 'Mon-Fri: 9AM-2PM, Sat: 9AM-12PM',
      services: ['Personal Banking', 'Mining Sector Services', 'ATM', 'Equipment Financing'],
      manager: 'David L. Taylor',
      coordinates: '6.8500,-10.8167'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Our Branch Network
          </h2>
          <p className="text-lg lg:text-xl font-body text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            With 9 strategically located branches across Liberia, we bring banking services 
            closer to communities nationwide. Find your nearest branch and discover the 
            comprehensive services available to serve your financial needs.
          </p>
        </div>

        {/* Interactive Map */}
        <div className="mb-16">
          <div className="bg-card rounded-2xl p-6 shadow-neumorphic">
            <h3 className="text-2xl font-heading font-bold text-primary mb-6 text-center">
              Branch Locations Map
            </h3>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-elevation">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="International Bank Liberia Branch Locations"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=6.3106,-10.8047&z=8&output=embed"
                className="border-0"
              />
            </div>
            <p className="text-sm font-body text-muted-foreground text-center mt-4">
              Interactive map showing all 9 branch locations across Liberia
            </p>
          </div>
        </div>

        {/* Branch Listings */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches?.map((branch, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-neumorphic hover:shadow-elevation transition-all duration-300 animate-scale-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">
                    {branch?.name}
                  </h3>
                  <p className="text-sm font-body text-secondary font-semibold">
                    Manager: {branch?.manager}
                  </p>
                </div>
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-neumorphic">
                  <Icon name="MapPin" size={20} color="white" />
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={16} color="var(--color-muted-foreground)" className="mt-0.5" />
                  <p className="text-sm font-body text-muted-foreground">
                    {branch?.address}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} color="var(--color-muted-foreground)" />
                  <p className="text-sm font-body text-muted-foreground">
                    {branch?.phone}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={16} color="var(--color-muted-foreground)" />
                  <p className="text-sm font-body text-muted-foreground">
                    {branch?.hours}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-heading font-semibold text-primary mb-3">
                  Available Services:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {branch?.services?.map((service, serviceIndex) => (
                    <span
                      key={serviceIndex}
                      className="text-xs font-body bg-accent text-primary px-2 py-1 rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-lg font-body font-medium text-sm hover:bg-primary/90 transition-colors duration-200 shadow-neumorphic">
                  Get Directions
                </button>
                <button className="flex-1 bg-secondary text-secondary-foreground py-2 px-4 rounded-lg font-body font-medium text-sm hover:bg-secondary/90 transition-colors duration-200 shadow-neumorphic">
                  Call Branch
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Branch Services Overview */}
        <div className="mt-16">
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-neumorphic">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-primary text-center mb-8">
              Services Available Across Our Network
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-neumorphic">
                  <Icon name="CreditCard" size={32} color="white" />
                </div>
                <h4 className="text-lg font-heading font-bold text-primary mb-2">
                  Personal Banking
                </h4>
                <p className="text-sm font-body text-muted-foreground">
                  Savings, checking accounts, and personal loans
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-neumorphic">
                  <Icon name="Building2" size={32} color="white" />
                </div>
                <h4 className="text-lg font-heading font-bold text-primary mb-2">
                  Business Banking
                </h4>
                <p className="text-sm font-body text-muted-foreground">
                  Commercial accounts and business financing
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-neumorphic">
                  <Icon name="Smartphone" size={32} color="white" />
                </div>
                <h4 className="text-lg font-heading font-bold text-primary mb-2">
                  Digital Services
                </h4>
                <p className="text-sm font-body text-muted-foreground">
                  Online and mobile banking solutions
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-neumorphic">
                  <Icon name="Send" size={32} color="white" />
                </div>
                <h4 className="text-lg font-heading font-bold text-primary mb-2">
                  Money Transfer
                </h4>
                <p className="text-sm font-body text-muted-foreground">
                  Domestic and international transfers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchNetworkSection;