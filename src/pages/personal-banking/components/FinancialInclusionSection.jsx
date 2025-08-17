import React from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const FinancialInclusionSection = () => {
  const initiatives = [
    {
      id: 1,
      title: "Financial Education",
      description:
        "Workshops and resources to improve financial literacy across Liberia.",
      icon: "BookOpen",
      image:
        "https://ibliberia.com/wp-content/uploads/2024/01/IBLL-Community-1.png",
      stats: { number: "10K+", label: "People Reached" },
    },
    {
      id: 2,
      title: "Rural Access",
      description:
        "Extending services to rural areas through mobile and agent banking.",
      icon: "MapPin",
      image:
        "https://ibliberia.com/wp-content/uploads/2024/01/IBLL-Community-2.png",
      stats: { number: "20+", label: "Locations" },
    },
    {
      id: 3,
      title: "Loan Programs",
      description:
        "Affordable loans for personal and small business development.",
      icon: "Banknote",
      image:
        "https://ibliberia.com/wp-content/uploads/2024/01/IBLL-Community-3.png",
      stats: { number: "5K+", label: "Loans Issued" },
    },
  ];

  const impactStats = [
    { number: "9", label: "Branches", icon: "Building" },
    { number: "20+", label: "Agency Locations", icon: "MapPin" },
    { number: "50K+", label: "Customers", icon: "Users" },
    { number: "24/7", label: "Support", icon: "Clock" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent px-4 py-2 rounded-full mb-6">
            <Icon name="Heart" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">
              Financial Inclusion
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
            Committed to Financial Wellness
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide accessible banking services to promote financial
            inclusion across Liberia.
          </p>
        </div>

        {/* Initiatives */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <div
              key={initiative.id}
              className="bg-card rounded-2xl overflow-hidden shadow-neumorphic border border-border"
            >
              <div className="relative h-48">
                <Image
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-neumorphic">
                  <Icon name={initiative.icon} size={24} color="white" />
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-2xl font-bold">
                    {initiative.stats.number}
                  </div>
                  <div className="text-sm opacity-90">
                    {initiative.stats.label}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {initiative.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {initiative.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-neumorphic">
                <Icon name={stat.icon} size={24} color="white" />
              </div>
              <div className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="default"
            size="lg"
            className="shadow-neumorphic animate-scale-hover"
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={20}
          >
            Learn More About Our Initiatives
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinancialInclusionSection;
