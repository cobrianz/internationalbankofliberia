import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const LeadershipSection = () => {
  const leaders = [
    {
      name: 'Samuel K. Johnson',
      position: 'Chief Executive Officer',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      bio: 'With over 20 years of banking experience in West Africa, Samuel leads our strategic vision and commitment to financial inclusion across Liberia.',
      linkedin: '#'
    },
    {
      name: 'Martha T. Williams',
      position: 'Chief Financial Officer',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      bio: 'Martha brings extensive expertise in financial management and regulatory compliance, ensuring our operations meet international banking standards.',
      linkedin: '#'
    },
    {
      name: 'David M. Cooper',
      position: 'Head of Operations',
      image: 'https://randomuser.me/api/portraits/men/38.jpg',
      bio: 'David oversees our branch network and operational excellence, focusing on customer service and technological innovation.',
      linkedin: '#'
    },
    {
      name: 'Grace N. Kollie',
      position: 'Head of Community Banking',
      image: 'https://randomuser.me/api/portraits/women/28.jpg',
      bio: 'Grace leads our community outreach programs and financial literacy initiatives, connecting banking services with local communities.',
      linkedin: '#'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Leadership Team
          </h2>
          <p className="text-lg lg:text-xl font-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the experienced professionals who guide International Bank (Liberia) Limited 
            in serving our customers and communities with excellence and integrity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders?.map((leader, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-neumorphic hover:shadow-elevation transition-all duration-300 animate-scale-hover text-center"
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-neumorphic">
                  <Image
                    src={leader?.image}
                    alt={`${leader?.name} - ${leader?.position}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-neumorphic">
                  <Icon name="Linkedin" size={16} color="white" />
                </div>
              </div>
              
              <h3 className="text-lg font-heading font-bold text-primary mb-2">
                {leader?.name}
              </h3>
              <p className="text-sm font-body text-secondary font-semibold mb-4">
                {leader?.position}
              </p>
              <p className="text-xs font-body text-muted-foreground leading-relaxed">
                {leader?.bio}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-neumorphic">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-6">
              Board of Directors
            </h3>
            <p className="text-base font-body text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Our Board of Directors comprises distinguished professionals from various sectors, 
              providing strategic oversight and governance to ensure we maintain the highest 
              standards of banking excellence and corporate responsibility.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="text-lg font-heading font-bold text-primary mb-2">
                  Dr. Elizabeth M. Reeves
                </h4>
                <p className="text-sm font-body text-secondary font-semibold mb-2">
                  Chairperson
                </p>
                <p className="text-xs font-body text-muted-foreground">
                  Former Minister of Finance, 15+ years in public service
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-heading font-bold text-primary mb-2">
                  Hon. James K. Tubman
                </h4>
                <p className="text-sm font-body text-secondary font-semibold mb-2">
                  Vice Chairperson
                </p>
                <p className="text-xs font-body text-muted-foreground">
                  Legal expert and former Supreme Court Justice
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-heading font-bold text-primary mb-2">
                  Mrs. Comfort B. Lamptey
                </h4>
                <p className="text-sm font-body text-secondary font-semibold mb-2">
                  Independent Director
                </p>
                <p className="text-xs font-body text-muted-foreground">
                  Business leader and community development advocate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;