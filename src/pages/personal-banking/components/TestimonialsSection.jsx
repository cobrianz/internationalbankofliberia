import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah K.",
      location: "Monrovia",
      occupation: "Teacher",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      testimonial:
        "The personal loan process was quick and easy. It helped me with my home improvement project without any hassle.",
      service: "Personal Loan",
    },
    {
      id: 2,
      name: "John D.",
      location: "Gbarnga",
      occupation: "Business Owner",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      testimonial:
        "Mobile banking has made managing my accounts so convenient. I can transfer funds and check balances on the go.",
      service: "Mobile Banking",
    },
    {
      id: 3,
      name: "Mary T.",
      location: "Buchanan",
      occupation: "Nurse",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5,
      testimonial:
        "The savings account with competitive rates has helped me build my emergency fund effectively.",
      service: "Savings Account",
    },
    {
      id: 4,
      name: "David S.",
      location: "Kakata",
      occupation: "Engineer",
      avatar: "https://randomuser.me/api/portraits/men/78.jpg",
      rating: 5,
      testimonial:
        "Sending money via Western Union through IB was fast and secure. Great service at convenient locations.",
      service: "Money Transfer",
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
            Customer Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from our satisfied personal banking customers in Liberia.
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial */}
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-neumorphic border border-border max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <Image
                    src={testimonials[activeTestimonial].avatar}
                    alt={testimonials[activeTestimonial].name}
                    className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover shadow-elevation"
                  />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-neumorphic">
                    <Icon name="Quote" size={16} color="white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex justify-start space-x-1 mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map(
                    (_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={20}
                        className="text-warning fill-current"
                      />
                    )
                  )}
                </div>

                <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-6 italic">
                  "{testimonials[activeTestimonial].testimonial}"
                </blockquote>

                <div className="space-y-2">
                  <h4 className="text-xl font-heading font-semibold text-primary">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[activeTestimonial].occupation} •{" "}
                    {testimonials[activeTestimonial].location}
                  </p>
                  <div className="inline-flex items-center space-x-2 bg-accent px-3 py-1 rounded-full">
                    <Icon
                      name="CheckCircle"
                      size={16}
                      className="text-success"
                    />
                    <span className="text-sm font-medium text-foreground">
                      {testimonials[activeTestimonial].service}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-card rounded-full shadow-neumorphic flex items-center justify-center hover:bg-accent transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <Icon name="ChevronLeft" size={24} className="text-foreground" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-card rounded-full shadow-neumorphic flex items-center justify-center hover:bg-accent transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <Icon name="ChevronRight" size={24} className="text-foreground" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === activeTestimonial
                  ? "bg-primary shadow-neumorphic"
                  : "bg-muted-foreground hover:bg-primary"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
