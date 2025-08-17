import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    industry: '',
    message: ''
  });

  const relationshipManagers = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Relationship Manager",
      specialization: "Corporate Banking & Treasury",
      email: "sarah.johnson@internationalbank.lr",
      phone: "+231-77-123-4567",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: ["Cash Management", "Trade Finance", "FX Solutions"]
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Director, Institutional Banking",
      specialization: "Government & Institutional Services",
      email: "michael.chen@internationalbank.lr",
      phone: "+231-77-234-5678",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: ["Project Finance", "Syndicated Loans", "Capital Markets"]
    },
    {
      id: 3,
      name: "Dr. Fatima Al-Rashid",
      title: "Head of International Banking",
      specialization: "Cross-Border & Correspondent Banking",
      email: "fatima.alrashid@internationalbank.lr",
      phone: "+231-77-345-6789",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: ["International Trade", "Correspondent Banking", "Regulatory Compliance"]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    alert(`Thank you for your inquiry, ${formData?.contactName}. Our corporate banking team will contact you within 24 hours to discuss your requirements.`);
    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      industry: '',
      message: ''
    });
  };

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Connect with Our Experts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our dedicated relationship managers are ready to provide personalized solutions for your corporate and institutional banking needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {relationshipManagers?.map((manager, index) => (
            <motion.div
              key={manager?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-neumorphic border border-border text-center animate-scale-hover"
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-elevation">
                  <img
                    src={manager?.image}
                    alt={manager?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-success rounded-full flex items-center justify-center border-4 border-card">
                  <Icon name="CheckCircle" size={16} color="white" />
                </div>
              </div>

              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                {manager?.name}
              </h3>
              <p className="text-primary font-semibold mb-1">{manager?.title}</p>
              <p className="text-sm text-muted-foreground mb-4">{manager?.specialization}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="Mail" size={16} />
                  <span className="truncate">{manager?.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="Phone" size={16} />
                  <span>{manager?.phone}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Areas of Expertise</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {manager?.expertise?.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="w-full"
                iconName="Calendar"
                iconPosition="left"
                iconSize={16}
              >
                Schedule Meeting
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-8 lg:p-12 shadow-neumorphic border border-border"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-heading font-bold text-foreground mb-6">
                Get Started Today
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ready to explore how our corporate and institutional banking solutions can transform your business operations? Contact us for a personalized consultation.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Clock" size={24} color="white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">24-Hour Response</div>
                    <div className="text-sm text-muted-foreground">Guaranteed response within one business day</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <Icon name="Shield" size={24} color="white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Confidential Consultation</div>
                    <div className="text-sm text-muted-foreground">All discussions are strictly confidential</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                    <Icon name="Users" size={24} color="white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Expert Team</div>
                    <div className="text-sm text-muted-foreground">Dedicated specialists for your industry</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label="Company Name"
                    type="text"
                    name="companyName"
                    value={formData?.companyName}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    required
                  />
                  <Input
                    label="Contact Name"
                    type="text"
                    name="contactName"
                    value={formData?.contactName}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData?.email}
                    onChange={handleInputChange}
                    placeholder="your.email@company.com"
                    required
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    value={formData?.phone}
                    onChange={handleInputChange}
                    placeholder="+231-XX-XXX-XXXX"
                    required
                  />
                </div>

                <Input
                  label="Industry"
                  type="text"
                  name="industry"
                  value={formData?.industry}
                  onChange={handleInputChange}
                  placeholder="e.g., Mining, Government, Manufacturing"
                  required
                />

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData?.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                    placeholder="Tell us about your banking requirements and how we can help..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  fullWidth
                  className="shadow-neumorphic"
                  iconName="Send"
                  iconPosition="right"
                  iconSize={20}
                >
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;



