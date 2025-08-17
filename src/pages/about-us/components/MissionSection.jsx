import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';


const MissionSection = () => {
  const values = [
    {
      icon: 'Shield',
      title: 'Trust & Integrity',
      description: 'We maintain the highest standards of ethical conduct and transparency in all our banking operations.'
    },
    {
      icon: 'Users',
      title: 'Customer First',
      description: 'Our customers are at the heart of everything we do, driving innovation and service excellence.'
    },
    {
      icon: 'Heart',
      title: 'Community Focus',
      description: 'We are committed to supporting local communities and contributing to Liberia\'s economic growth.'
    },
    {
      icon: 'TrendingUp',
      title: 'Innovation',
      description: 'We embrace technology and innovation to provide modern banking solutions for all Liberians.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Our Mission & Values
          </h2>
          <p className="text-lg lg:text-xl font-body text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            To provide accessible, reliable, and innovative banking services that empower individuals, 
            businesses, and communities throughout Liberia to achieve their financial goals and contribute 
            to the nation's economic prosperity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values?.map((value, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-neumorphic hover:shadow-elevation transition-all duration-300 animate-scale-hover text-center"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-neumorphic">
                <Icon name={value?.icon} size={32} color="white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">
                {value?.title}
              </h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">
                {value?.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-2xl p-8 lg:p-12 shadow-neumorphic">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-6">
                Our Vision for Liberia
              </h3>
              <p className="text-base font-body text-muted-foreground mb-6 leading-relaxed">
                To be the leading financial institution in Liberia, recognized for our commitment to 
                excellence, innovation, and community development. We envision a future where every 
                Liberian has access to quality banking services that support their dreams and aspirations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} color="var(--color-success)" />
                  <p className="text-sm font-body text-muted-foreground">
                    Financial inclusion for all Liberians
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} color="var(--color-success)" />
                  <p className="text-sm font-body text-muted-foreground">
                    Supporting small and medium enterprises
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} color="var(--color-success)" />
                  <p className="text-sm font-body text-muted-foreground">
                    Promoting economic development nationwide
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elevation">
                <Image
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=500&h=400&fit=crop"
                  alt="Liberian community members discussing financial planning"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;