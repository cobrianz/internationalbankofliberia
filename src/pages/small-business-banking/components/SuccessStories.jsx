import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      name: "Martha Johnson",
      business: "Johnson\'s Fashion Boutique",
      location: "Monrovia, Liberia",
      story: `Started with a small loan of $5,000 USD to open my boutique in 2022. With International Bank's support and flexible repayment terms, I've expanded to three locations across Monrovia and now employ 12 people. The business banking services have been instrumental in managing our growth.`,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      loanAmount: "$5,000",
      employees: "12",
      locations: "3"
    },
    {
      id: 2,
      name: "Samuel Kpakolo",
      business: "Kpakolo Construction Ltd",
      location: "Gbarnga, Liberia",
      story: `Our construction company needed working capital to take on larger projects. International Bank provided a $25,000 USD line of credit that allowed us to purchase equipment and hire skilled workers. We've completed over 50 projects and are now one of Bong County's leading construction firms.`,
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      loanAmount: "$25,000",
      employees: "25",
      projects: "50+"
    },
    {
      id: 3,
      name: "Grace Pewee",
      business: "Pewee Agribusiness",
      location: "Kakata, Liberia",
      story: `International Bank believed in my vision to modernize farming in Margibi County. Their agricultural loan helped me purchase modern equipment and establish a rice processing facility. Today, we supply rice to major retailers across Liberia and support over 200 local farmers.`,
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      loanAmount: "$15,000",
      farmers: "200+",
      coverage: "National"
    }
  ];

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
            Success Stories from Our Business Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how International Bank has helped Liberian entrepreneurs transform their 
            business dreams into thriving enterprises that strengthen our local economy.
          </p>
        </motion.div>

        <div className="space-y-12">
          {stories?.map((story, index) => (
            <motion.div
              key={story?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-elevation">
                  <Image
                    src={story?.image}
                    alt={`${story?.name} - ${story?.business}`}
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black from-opacity-40 to-transparent"></div>
                  
                  {/* Overlay Stats */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-card bg-opacity-95 rounded-xl p-4 backdrop-blur-sm">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-heading font-bold text-primary">
                            {story?.loanAmount}
                          </div>
                          <div className="text-xs text-muted-foreground">Initial Loan</div>
                        </div>
                        <div>
                          <div className="text-lg font-heading font-bold text-secondary">
                            {story?.employees || story?.farmers || story?.projects}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {story?.employees ? 'Employees' : story?.farmers ? 'Farmers' : 'Projects'}
                          </div>
                        </div>
                        <div>
                          <div className="text-lg font-heading font-bold text-success">
                            {story?.locations || story?.coverage}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {story?.locations ? 'Locations' : 'Coverage'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="bg-card rounded-2xl p-8 shadow-neumorphic border border-border">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-neumorphic flex-shrink-0">
                      <Icon name="Quote" size={24} color="white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
                        {story?.name}
                      </h3>
                      <p className="text-primary font-body font-medium mb-1">
                        {story?.business}
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <Icon name="MapPin" size={14} className="mr-1" />
                        {story?.location}
                      </p>
                    </div>
                  </div>

                  <blockquote className="text-foreground leading-relaxed mb-6 italic">
                    "{story?.story}"
                  </blockquote>

                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2 bg-accent rounded-lg px-4 py-2">
                      <Icon name="TrendingUp" size={16} className="text-primary" />
                      <span className="text-sm font-body font-medium text-foreground">
                        Business Growth
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 bg-accent rounded-lg px-4 py-2">
                      <Icon name="Users" size={16} className="text-secondary" />
                      <span className="text-sm font-body font-medium text-foreground">
                        Job Creation
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 bg-accent rounded-lg px-4 py-2">
                      <Icon name="Heart" size={16} className="text-success" />
                      <span className="text-sm font-body font-medium text-foreground">
                        Community Impact
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful Liberian businesses that have grown with our support. 
              Let's discuss how we can help your business thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => alert('Business consultation request submitted! Our relationship manager will contact you within 24 hours to schedule your appointment.')}
                className="bg-white text-primary px-8 py-3 rounded-lg font-body font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-neumorphic animate-scale-hover flex items-center justify-center space-x-2"
              >
                <Icon name="Calendar" size={20} />
                <span>Schedule Consultation</span>
              </button>
              <button
                onClick={() => alert('Application process initiated! You will be redirected to our secure application portal.')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-body font-semibold hover:bg-white hover:text-primary transition-all duration-200 shadow-neumorphic animate-scale-hover flex items-center justify-center space-x-2"
              >
                <Icon name="FileText" size={20} />
                <span>Apply Now</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;