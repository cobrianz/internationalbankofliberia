import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RelationshipManager = () => {
  const managers = [
    {
      id: 1,
      name: "Patricia Williams",
      title: "Senior Business Banking Manager",
      specialization: "Small Business & Retail",
      experience: "8 years",
      phone: "+231-77-123-4501",
      email: "p.williams@internationalbank.lr",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      expertise: [
        "Business Account Setup",
        "Small Business Loans",
        "Merchant Services",
        "Financial Planning"
      ],
      languages: ["English", "Kpelle"]
    },
    {
      id: 2,
      name: "James Konneh",
      title: "Commercial Banking Specialist",
      specialization: "Manufacturing & Construction",
      experience: "12 years",
      phone: "+231-77-123-4502",
      email: "j.konneh@internationalbank.lr",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      expertise: [
        "Commercial Loans",
        "Equipment Financing",
        "Lines of Credit",
        "International Trade"
      ],
      languages: ["English", "Bassa"]
    },
    {
      id: 3,
      name: "Sarah Tubman",
      title: "Agricultural Banking Manager",
      specialization: "Agriculture & Agribusiness",
      experience: "10 years",
      phone: "+231-77-123-4503",
      email: "s.tubman@internationalbank.lr",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      expertise: [
        "Agricultural Loans",
        "Seasonal Financing",
        "Cooperative Banking",
        "Rural Development"
      ],
      languages: ["English", "Gio"]
    }
  ];

  const handleContactManager = (manager) => {
    alert(`Contacting ${manager?.name}\n\n${manager?.title}\nSpecialization: ${manager?.specialization}\n\nPhone: ${manager?.phone}\nEmail: ${manager?.email}\n\nA meeting request has been sent. You will receive a confirmation call within 2 hours.`);
  };

  const handleScheduleCall = (manager) => {
    alert(`Call scheduled with ${manager?.name}\n\nYour call has been scheduled for tomorrow at 10:00 AM.\n\nPreparation tips:\n• Have your business documents ready\n• Prepare questions about your financing needs\n• Consider your business goals for the next 2-3 years\n\nYou will receive a confirmation SMS shortly.`);
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Your Dedicated Relationship Managers
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet our experienced business banking specialists who provide personalized service 
            and expert guidance to help your business succeed in Liberia's dynamic economy.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {managers?.map((manager, index) => (
            <motion.div
              key={manager?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl overflow-hidden shadow-neumorphic hover:shadow-elevation transition-all duration-300 animate-scale-hover border border-border"
            >
              {/* Profile Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={manager?.image}
                  alt={`${manager?.name} - ${manager?.title}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black from-opacity-40 to-transparent"></div>
                
                {/* Experience Badge */}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-lg text-sm font-body font-medium shadow-neumorphic">
                  {manager?.experience}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
                    {manager?.name}
                  </h3>
                  <p className="text-primary font-body font-medium mb-2">
                    {manager?.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Specializing in {manager?.specialization}
                  </p>
                </div>

                {/* Expertise */}
                <div className="mb-6">
                  <h4 className="text-sm font-heading font-semibold text-foreground mb-3">
                    Areas of Expertise
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {manager?.expertise?.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center space-x-2 text-xs"
                      >
                        <Icon name="Check" size={12} className="text-success flex-shrink-0" />
                        <span className="text-muted-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-6">
                  <h4 className="text-sm font-heading font-semibold text-foreground mb-2">
                    Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {manager?.languages?.map((language, langIndex) => (
                      <span
                        key={langIndex}
                        className="bg-accent text-accent-foreground px-2 py-1 rounded-lg text-xs font-body font-medium"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={16} className="text-primary" />
                    <span className="text-sm text-foreground">{manager?.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={16} className="text-primary" />
                    <span className="text-sm text-foreground">{manager?.email}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button
                    variant="default"
                    fullWidth
                    onClick={() => handleContactManager(manager)}
                    className="shadow-neumorphic animate-scale-hover"
                    iconName="MessageCircle"
                    iconPosition="left"
                    iconSize={16}
                  >
                    Contact {manager?.name?.split(' ')?.[0]}
                  </Button>
                  
                  <Button
                    variant="outline"
                    fullWidth
                    onClick={() => handleScheduleCall(manager)}
                    className="shadow-neumorphic animate-scale-hover"
                    iconName="Calendar"
                    iconPosition="left"
                    iconSize={16}
                  >
                    Schedule Call
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* General Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-4">
                  Not Sure Which Manager to Contact?
                </h3>
                <p className="text-lg text-white text-opacity-90 mb-6">
                  Our business banking team will connect you with the right specialist 
                  based on your industry and specific needs.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={20} color="white" />
                    <span>Available Mon-Fri: 9AM-2PM, Sat: 9AM-12PM</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" size={20} color="white" />
                    <span>9 branches across Liberia</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Shield" size={20} color="white" />
                    <span>Confidential business consultations</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm mb-6">
                  <div className="text-3xl font-heading font-bold mb-2">+231-77-123-4500</div>
                  <div className="text-white text-opacity-90">Business Banking Hotline</div>
                </div>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => alert('General business inquiry submitted! Our team will review your needs and connect you with the most suitable relationship manager within 4 hours.')}
                  className="border-white text-white hover:bg-white hover:text-primary shadow-neumorphic animate-scale-hover"
                  iconName="Users"
                  iconPosition="left"
                  iconSize={20}
                >
                  General Business Inquiry
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RelationshipManager;