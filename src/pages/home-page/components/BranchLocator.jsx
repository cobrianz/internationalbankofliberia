import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BranchLocator = () => {
  const [selectedBranch, setSelectedBranch] = useState(0);

  const branches = [
    {
      id: 1,
      name: "Head Office - Monrovia",
      address: "Broad Street, Central Monrovia, Montserrado County",
      phone: "+231-77-123-4567",
      hours: "Mon-Fri: 9:00 AM - 2:00 PM, Sat: 9:00 AM - 12:00 PM",
      services: ["Full Banking", "ATM", "Safe Deposit", "Foreign Exchange"],
      lat: 6.3106,
      lng: -10.8047
    },
    {
      id: 2,
      name: "Paynesville Branch",
      address: "SKD Boulevard, Paynesville, Montserrado County",
      phone: "+231-77-234-5678",
      hours: "Mon-Fri: 9:00 AM - 2:00 PM, Sat: 9:00 AM - 12:00 PM",
      services: ["Full Banking", "ATM", "Money Transfer"],
      lat: 6.2907,
      lng: -10.7581
    },
    {
      id: 3,
      name: "Gbarnga Branch",
      address: "Kakata Highway, Gbarnga, Bong County",
      phone: "+231-77-345-6789",
      hours: "Mon-Fri: 9:00 AM - 2:00 PM, Sat: 9:00 AM - 12:00 PM",
      services: ["Full Banking", "ATM", "Agency Banking"],
      lat: 6.9987,
      lng: -9.4722
    }
  ];

  const handleBookAppointment = (branchName) => {
    alert(`Appointment booking for ${branchName} would open here. Please call ${branches?.[selectedBranch]?.phone} or visit our online booking system.`);
  };

  return (
    <section className="py-16 bg-accent bg-opacity-30">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Find Our Branches
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Visit any of our 9 conveniently located branches across Liberia for personalized banking services and expert financial advice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Branch List */}
          <div className="space-y-4">
            {branches?.map((branch, index) => (
              <motion.div
                key={branch?.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-card rounded-2xl p-6 shadow-neumorphic cursor-pointer transition-all duration-300 ${
                  selectedBranch === index ? 'ring-2 ring-primary shadow-elevation' : 'hover:shadow-elevation'
                }`}
                onClick={() => setSelectedBranch(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-neumorphic flex-shrink-0">
                    <Icon name="MapPin" size={24} color="white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      {branch?.name}
                    </h3>
                    
                    <div className="space-y-2 text-sm font-body text-muted-foreground">
                      <div className="flex items-start space-x-2">
                        <Icon name="MapPin" size={16} className="mt-0.5 flex-shrink-0" />
                        <span>{branch?.address}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Icon name="Phone" size={16} className="flex-shrink-0" />
                        <span>{branch?.phone}</span>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <Icon name="Clock" size={16} className="mt-0.5 flex-shrink-0" />
                        <span>{branch?.hours}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-3">
                      {branch?.services?.map((service, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-secondary bg-opacity-20 text-secondary text-xs font-body rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            <div className="text-center pt-4">
              <Button
                variant="outline"
                onClick={() => handleBookAppointment(branches?.[selectedBranch]?.name)}
                iconName="Calendar"
                iconPosition="left"
                iconSize={16}
              >
                Book Appointment
              </Button>
            </div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card rounded-2xl shadow-neumorphic overflow-hidden"
          >
            <div className="h-96 lg:h-full min-h-[400px]">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title={branches?.[selectedBranch]?.name}
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${branches?.[selectedBranch]?.lat},${branches?.[selectedBranch]?.lng}&z=14&output=embed`}
                className="border-0"
              />
            </div>
            
            <div className="p-4 bg-gradient-to-r from-primary to-secondary text-white">
              <h4 className="font-heading font-semibold mb-1">
                {branches?.[selectedBranch]?.name}
              </h4>
              <p className="text-sm opacity-90">
                {branches?.[selectedBranch]?.address}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BranchLocator;