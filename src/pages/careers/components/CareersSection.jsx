import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CareersSection = () => {
  const benefits = [
    {
      icon: 'Heart',
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs for employees and families'
    },
    {
      icon: 'GraduationCap',
      title: 'Professional Development',
      description: 'Continuous learning opportunities, training programs, and career advancement support'
    },
    {
      icon: 'DollarSign',
      title: 'Competitive Compensation',
      description: 'Market-competitive salaries with performance-based bonuses and incentives'
    },
    {
      icon: 'Clock',
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements and generous leave policies'
    },
    {
      icon: 'Users',
      title: 'Team Environment',
      description: 'Collaborative culture with supportive colleagues and inclusive workplace'
    },
    {
      icon: 'Award',
      title: 'Recognition Programs',
      description: 'Employee recognition and reward systems for outstanding performance'
    }
  ];

  const openPositions = [
    {
      title: 'Senior Relationship Manager',
      department: 'Personal Banking',
      location: 'Monrovia',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead customer relationship management and drive business growth in personal banking segment.'
    },
    {
      title: 'Credit Analyst',
      department: 'Risk Management',
      location: 'Monrovia',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Analyze credit applications and assess risk for loan approvals across various banking products.'
    },
    {
      title: 'Branch Operations Officer',
      department: 'Operations',
      location: 'Buchanan',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Oversee daily branch operations and ensure excellent customer service delivery.'
    },
    {
      title: 'Digital Banking Specialist',
      department: 'Technology',
      location: 'Monrovia',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive digital transformation initiatives and enhance online banking platforms.'
    },
    {
      title: 'Customer Service Representative',
      department: 'Customer Service',
      location: 'Multiple Locations',
      type: 'Full-time',
      experience: '1+ years',
      description: 'Provide exceptional customer service and support across all banking products and services.'
    },
    {
      title: 'Compliance Officer',
      department: 'Compliance',
      location: 'Monrovia',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Ensure regulatory compliance and maintain adherence to banking regulations and policies.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Join Our Team
          </h2>
          <p className="text-lg lg:text-xl font-body text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Be part of Liberia's leading financial institution. We offer exciting career opportunities 
            for talented individuals who share our commitment to excellence, innovation, and community development.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="mb-20">
          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-primary text-center mb-12">
            Why Choose International Bank as Your Career Partner?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits?.map((benefit, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-neumorphic hover:shadow-elevation transition-all duration-300 animate-scale-hover text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-neumorphic">
                  <Icon name={benefit?.icon} size={32} color="white" />
                </div>
                <h4 className="text-lg font-heading font-bold text-primary mb-4">
                  {benefit?.title}
                </h4>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                  {benefit?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Openings */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-primary text-center mb-12">
            Current Job Openings
          </h3>
          <div className="space-y-6">
            {openPositions?.map((position, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 lg:p-8 shadow-neumorphic hover:shadow-elevation transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1 mb-4 lg:mb-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-3">
                      <h4 className="text-xl font-heading font-bold text-primary">
                        {position?.title}
                      </h4>
                      <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                        <span className="text-xs font-body bg-secondary text-white px-3 py-1 rounded-full">
                          {position?.department}
                        </span>
                        <span className="text-xs font-body bg-accent text-primary px-3 py-1 rounded-full">
                          {position?.location}
                        </span>
                        <span className="text-xs font-body bg-muted text-muted-foreground px-3 py-1 rounded-full">
                          {position?.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm font-body text-muted-foreground mb-3 leading-relaxed">
                      {position?.description}
                    </p>
                    <div className="flex items-center space-x-4 text-xs font-body text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Icon name="Briefcase" size={14} />
                        <span>Experience: {position?.experience}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="MapPin" size={14} />
                        <span>{position?.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Eye"
                      iconPosition="left"
                      iconSize={16}
                    >
                      View Details
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      iconName="Send"
                      iconPosition="left"
                      iconSize={16}
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-16">
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-neumorphic">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-primary text-center mb-8">
              Our Hiring Process
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-neumorphic">
                  <span className="text-2xl font-heading font-bold text-white">1</span>
                </div>
                <h4 className="text-lg font-heading font-bold text-primary mb-2">
                  Application
                </h4>
                <p className="text-sm font-body text-muted-foreground">
                  Submit your application with resume and cover letter
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-neumorphic">
                  <span className="text-2xl font-heading font-bold text-white">2</span>
                </div>
                <h4 className="text-lg font-heading font-bold text-primary mb-2">
                  Screening
                </h4>
                <p className="text-sm font-body text-muted-foreground">
                  Initial review and phone screening with HR team
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-neumorphic">
                  <span className="text-2xl font-heading font-bold text-white">3</span>
                </div>
                <h4 className="text-lg font-heading font-bold text-primary mb-2">
                  Interview
                </h4>
                <p className="text-sm font-body text-muted-foreground">
                  In-person or virtual interview with hiring manager
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-neumorphic">
                  <span className="text-2xl font-heading font-bold text-white">4</span>
                </div>
                <h4 className="text-lg font-heading font-bold text-primary mb-2">
                  Offer
                </h4>
                <p className="text-sm font-body text-muted-foreground">
                  Job offer and onboarding process begins
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 lg:p-12 shadow-neumorphic text-white">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-6">
              Ready to Start Your Banking Career?
            </h3>
            <p className="text-lg font-body mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Join a team that values innovation, integrity, and community impact. 
              Explore opportunities to grow your career while making a difference in Liberia's financial sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                iconName="Search"
                iconPosition="left"
                iconSize={20}
                className="bg-white text-primary hover:bg-white/90"
              >
                Browse All Positions
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Mail"
                iconPosition="left"
                iconSize={20}
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Submit General Application
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm font-body opacity-80">
                Questions about careers? Contact our HR team at{' '}
                <a href="mailto:careers@internationalbank.lr" className="underline hover:no-underline">
                  careers@internationalbank.lr
                </a>{' '}
                or call +231-77-100-2000
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;