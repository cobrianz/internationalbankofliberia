import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ServicesGrid = () => {
  const services = [
    {
      id: "ib-personal-get-an-account",
      title: "Open an Account",
      description:
        "Manage your everyday finances with our savings solutions designed to help you achieve your goals.",
      features: [
        "Expert guidance",
        "Digital tools for easy management",
        "Competitive interest rates",
        "Flexible account options",
      ],
      icon: "UserPlus",
      color: "bg-primary",
      rates: { lrd: "3.5%", usd: "2.8%" },
    },
    {
      id: "ib-personal-credit-facilities",
      title: "Credit Facilities",
      description:
        "Access financing for your personal needs with flexible loan options and competitive rates.",
      features: [
        "Personal loans",
        "Salaried workers' loans",
        "Auto loans",
        "Personal overdrafts",
      ],
      icon: "Banknote",
      color: "bg-accent",
      rates: { lrd: "12%", usd: "8%" },
    },
    {
      id: "ib-e-banking",
      title: "E-Banking Services",
      description:
        "Bank anytime, anywhere with our comprehensive digital banking solutions.",
      features: [
        "Card services",
        "Push & Pull transfers",
        "SMS alerts",
        "Online & Mobile banking",
      ],
      icon: "Smartphone",
      color: "bg-secondary",
      rates: { lrd: "Free", usd: "Free" },
    },
    {
      id: "money-transfer",
      title: "Money Transfer Services",
      description:
        "Send and receive money globally with trusted partners at over 20 locations nationwide.",
      features: ["Wire transfers", "MoneyGram", "Western Union", "RIA & Nobel"],
      icon: "Send",
      color: "bg-primary",
      rates: { lrd: "Variable", usd: "Variable" },
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
            Personal Banking Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tailored solutions to meet your personal financial needs in Liberia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-card rounded-2xl p-8 shadow-neumorphic hover:shadow-elevation transition-all duration-300 animate-scale-hover border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center shadow-neumorphic mr-4`}
                >
                  <Icon name={service.icon} size={24} color="white" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <div className="flex space-x-4 text-sm text-muted-foreground mt-1">
                    <span>LRD: {service.rates.lrd}</span>
                    <span>USD: {service.rates.usd}</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-success rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Icon name="Check" size={12} color="white" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="default"
                  size="sm"
                  className="flex-1 shadow-neumorphic"
                  iconName="ArrowRight"
                  iconPosition="right"
                  iconSize={16}
                >
                  Learn More
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 shadow-neumorphic"
                  iconName="Phone"
                  iconPosition="left"
                  iconSize={16}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
