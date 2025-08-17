import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Liberian Mining Corporation",
      industry: "Mining & Natural Resources",
      challenge: "Complex multi-currency operations requiring sophisticated cash management and trade finance solutions for international mineral exports.",
      solution: "Implemented comprehensive treasury management system with automated FX hedging, trade finance facilities, and real-time cash positioning across 12 currencies.",
      results: [
        "40% reduction in FX exposure risk",
        "$50M+ in trade finance facilitated",
        "Real-time visibility across operations"
      ],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      testimonial: "International Bank's sophisticated treasury solutions have transformed our global operations, providing the financial infrastructure needed for sustainable growth.",
      clientName: "James Morrison",
      clientTitle: "CFO, Liberian Mining Corporation"
    },
    {
      id: 2,
      title: "West African Development Fund",
      industry: "International Development",
      challenge: "Multi-institutional funding requirements with complex compliance needs and diverse stakeholder reporting across multiple African countries.",
      solution: "Developed custom institutional banking platform with automated compliance reporting, multi-party approval workflows, and integrated impact measurement tools.",
      results: [
        "$200M+ in development projects funded",
        "99.9% compliance accuracy",
        "50% faster project disbursements"
      ],
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      testimonial: "The institutional banking solutions provided by International Bank have enabled us to scale our development impact across West Africa efficiently.",
      clientName: "Dr. Amelia Konneh",
      clientTitle: "Executive Director, WADF"
    },
    {
      id: 3,
      title: "Monrovia Port Authority",
      industry: "Transportation & Logistics",
      challenge: "High-volume transaction processing with multiple payment methods, international settlements, and complex fee structures for port operations.",
      solution: "Implemented enterprise payment processing system with API integration, automated reconciliation, and multi-currency settlement capabilities.",
      results: [
        "300% increase in transaction capacity",
        "24/7 automated processing",
        "$100M+ annual transaction volume"
      ],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      testimonial: "International Bank's digital infrastructure has modernized our payment systems, enabling seamless operations for one of West Africa's busiest ports.",
      clientName: "William Tweh",
      clientTitle: "Managing Director, MPA"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how we've partnered with leading institutions to deliver transformative financial solutions that drive growth and operational excellence.
          </p>
        </motion.div>

        <div className="space-y-16">
          {caseStudies?.map((study, index) => (
            <motion.div
              key={study?.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-elevation">
                  <Image
                    src={study?.image}
                    alt={`${study?.title} case study`}
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <div className="text-white font-semibold">{study?.industry}</div>
                      <div className="text-white/80 text-sm">{study?.title}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-6">
                  <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                      {study?.industry}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
                      {study?.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <Icon name="AlertCircle" size={20} className="mr-2 text-warning" />
                        Challenge
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">{study?.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <Icon name="Lightbulb" size={20} className="mr-2 text-secondary" />
                        Solution
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">{study?.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <Icon name="TrendingUp" size={20} className="mr-2 text-success" />
                        Results
                      </h4>
                      <div className="grid sm:grid-cols-3 gap-4">
                        {study?.results?.map((result, resultIndex) => (
                          <div key={resultIndex} className="bg-muted rounded-lg p-4 text-center">
                            <div className="text-lg font-bold text-primary mb-1">
                              {result?.split(' ')?.[0]}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {result?.split(' ')?.slice(1)?.join(' ')}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-xl p-6 shadow-neumorphic border border-border">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Quote" size={24} color="white" />
                      </div>
                      <div>
                        <p className="text-foreground italic mb-4 leading-relaxed">
                          "{study?.testimonial}"
                        </p>
                        <div>
                          <div className="font-semibold text-foreground">{study?.clientName}</div>
                          <div className="text-sm text-muted-foreground">{study?.clientTitle}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;