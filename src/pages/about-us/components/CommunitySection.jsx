import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CommunitySection = () => {
  const initiatives = [
    {
      title: 'Financial Literacy Programs',
      description: 'Free workshops and training sessions to improve financial knowledge across rural and urban communities.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=400&h=300&fit=crop',
      impact: '5,000+ participants trained',
      icon: 'BookOpen'
    },
    {
      title: 'Small Business Support',
      description: 'Microfinance programs and business development support for local entrepreneurs and small enterprises.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      impact: '1,200+ businesses supported',
      icon: 'Briefcase'
    },
    {
      title: 'Educational Scholarships',
      description: 'Annual scholarship program supporting promising students from underserved communities.',
      image: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?w=400&h=300&fit=crop',
      impact: '300+ students supported',
      icon: 'GraduationCap'
    },
    {
      title: 'Healthcare Initiatives',
      description: 'Mobile health clinics and medical equipment donations to improve healthcare access in remote areas.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      impact: '15,000+ people reached',
      icon: 'Heart'
    }
  ];

  const partnerships = [
    {
      name: 'Ministry of Education',
      description: 'Collaborating on financial literacy curriculum development',
      logo: 'Building2'
    },
    {
      name: 'Liberia Chamber of Commerce',
      description: 'Supporting business development and entrepreneurship',
      logo: 'Users'
    },
    {
      name: 'UN Women Liberia',
      description: 'Empowering women through financial inclusion programs',
      logo: 'Heart'
    },
    {
      name: 'Local NGOs',
      description: 'Community development and poverty reduction initiatives',
      logo: 'HandHeart'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Community Impact
          </h2>
          <p className="text-lg lg:text-xl font-body text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We believe in giving back to the communities we serve. Through various initiatives and partnerships, 
            we're committed to creating positive change and sustainable development across Liberia.
          </p>
        </div>

        {/* Community Initiatives */}
        <div className="mb-20">
          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-primary text-center mb-12">
            Our Community Programs
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {initiatives?.map((initiative, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-neumorphic hover:shadow-elevation transition-all duration-300 animate-scale-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={initiative?.image}
                    alt={initiative?.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-neumorphic">
                    <Icon name={initiative?.icon} size={24} color="white" />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-heading font-bold text-primary mb-3">
                    {initiative?.title}
                  </h4>
                  <p className="text-sm font-body text-muted-foreground mb-4 leading-relaxed">
                    {initiative?.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-body text-secondary font-semibold bg-accent px-3 py-1 rounded-full">
                      {initiative?.impact}
                    </span>
                    <Icon name="ArrowRight" size={16} color="var(--color-primary)" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnerships */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-primary text-center mb-12">
            Strategic Partnerships
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships?.map((partner, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-neumorphic hover:shadow-elevation transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-neumorphic">
                  <Icon name={partner?.logo} size={32} color="white" />
                </div>
                <h4 className="text-lg font-heading font-bold text-primary mb-3">
                  {partner?.name}
                </h4>
                <p className="text-xs font-body text-muted-foreground leading-relaxed">
                  {partner?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-neumorphic">
          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-primary text-center mb-12">
            Our Community Impact by Numbers
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-secondary mb-2">
                $2.5M
              </div>
              <p className="text-sm font-body text-muted-foreground">
                Invested in Community Programs
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-secondary mb-2">
                25,000+
              </div>
              <p className="text-sm font-body text-muted-foreground">
                Lives Directly Impacted
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-secondary mb-2">
                150+
              </div>
              <p className="text-sm font-body text-muted-foreground">
                Community Projects Completed
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-heading font-bold text-secondary mb-2">
                50+
              </div>
              <p className="text-sm font-body text-muted-foreground">
                Partner Organizations
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-base font-body text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
              Our commitment to community development goes beyond banking. We believe that by investing 
              in education, healthcare, and economic empowerment, we contribute to building a stronger, 
              more prosperous Liberia for future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-accent rounded-lg p-4 shadow-neumorphic">
                <Icon name="Award" size={24} color="var(--color-primary)" className="mx-auto mb-2" />
                <p className="text-sm font-body text-primary font-semibold">
                  2023 Community Service Award
                </p>
              </div>
              <div className="bg-accent rounded-lg p-4 shadow-neumorphic">
                <Icon name="Star" size={24} color="var(--color-primary)" className="mx-auto mb-2" />
                <p className="text-sm font-body text-primary font-semibold">
                  Best Corporate Citizen 2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;