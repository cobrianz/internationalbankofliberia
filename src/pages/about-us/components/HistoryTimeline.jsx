import React from 'react';
import Icon from '../../../components/AppIcon';

const HistoryTimeline = () => {
  const milestones = [
    {
      year: '1999',
      title: 'Bank Establishment',
      description: 'International Bank (Liberia) Limited was founded with a vision to provide accessible banking services to all Liberians.',
      icon: 'Building'
    },
    {
      year: '2003',
      title: 'First Branch Expansion',
      description: 'Opened our second branch in Buchanan, marking the beginning of our nationwide expansion strategy.',
      icon: 'MapPin'
    },
    {
      year: '2008',
      title: 'Digital Banking Launch',
      description: 'Introduced online banking services and ATM network, bringing modern banking technology to Liberia.',
      icon: 'Smartphone'
    },
    {
      year: '2012',
      title: 'Community Programs',
      description: 'Launched financial literacy programs and community development initiatives across rural Liberia.',
      icon: 'Users'
    },
    {
      year: '2016',
      title: 'Mobile Banking',
      description: 'Pioneered mobile banking solutions, making banking accessible to remote communities nationwide.',
      icon: 'Phone'
    },
    {
      year: '2020',
      title: 'COVID-19 Response',
      description: 'Provided emergency financial support and contactless banking solutions during the pandemic.',
      icon: 'Shield'
    },
    {
      year: '2023',
      title: 'Sustainability Initiative',
      description: 'Launched green banking programs and renewable energy financing for sustainable development.',
      icon: 'Leaf'
    },
    {
      year: '2024',
      title: 'Innovation Hub',
      description: 'Established fintech innovation center to develop cutting-edge financial solutions for Liberia.',
      icon: 'Lightbulb'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Our Journey Through Time
          </h2>
          <p className="text-lg lg:text-xl font-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to becoming a trusted financial partner, 
            discover the key milestones that have shaped our commitment to serving Liberia.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-secondary"></div>

          <div className="space-y-12">
            {milestones?.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:flex-row`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-neumorphic z-10"></div>

                {/* Content */}
                <div className={`w-full lg:w-5/12 ml-12 lg:ml-0 ${
                  index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                }`}>
                  <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-neumorphic hover:shadow-elevation transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-neumorphic">
                        <Icon name={milestone?.icon} size={24} color="white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-heading font-bold text-primary">
                          {milestone?.year}
                        </h3>
                        <h4 className="text-lg font-heading font-semibold text-secondary">
                          {milestone?.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-sm font-body text-muted-foreground leading-relaxed">
                      {milestone?.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden lg:block w-2/12"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-neumorphic">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-6">
              Looking Ahead
            </h3>
            <p className="text-base font-body text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              As we continue our journey, we remain committed to innovation, community development, 
              and financial inclusion. Our vision for the future includes expanding digital services, 
              supporting sustainable development, and empowering the next generation of Liberian entrepreneurs.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-neumorphic">
                  <Icon name="Target" size={32} color="white" />
                </div>
                <h4 className="text-lg font-heading font-bold text-primary mb-2">
                  2025 Goals
                </h4>
                <p className="text-sm font-body text-muted-foreground">
                  Expand to 15 branches and launch advanced digital banking platform
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-neumorphic">
                  <Icon name="Globe" size={32} color="white" />
                </div>
                <h4 className="text-lg font-heading font-bold text-primary mb-2">
                  Regional Expansion
                </h4>
                <p className="text-sm font-body text-muted-foreground">
                  Explore partnerships across West Africa for enhanced services
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-neumorphic">
                  <Icon name="Zap" size={32} color="white" />
                </div>
                <h4 className="text-lg font-heading font-bold text-primary mb-2">
                  Innovation Focus
                </h4>
                <p className="text-sm font-body text-muted-foreground">
                  Develop AI-powered financial solutions and blockchain technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;