import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const NewsletterSubscription = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData?.firstName?.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData?.lastName?.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]{10,}$/?.test(formData?.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors)?.length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert(`Thank you ${formData?.firstName} ${formData?.lastName}! You've been successfully subscribed to our newsletter. We'll send updates to ${formData?.email}.`);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary to-secondary">
      <div className="max-w-4xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-3xl p-8 md:p-12 shadow-elevation"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-neumorphic">
              <Icon name="Mail" size={32} color="white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Stay Connected
            </h2>
            
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about new banking products, financial tips, and exclusive offers from International Bank (Liberia) Limited.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="First Name"
                type="text"
                name="firstName"
                value={formData?.firstName}
                onChange={handleInputChange}
                placeholder="Enter your first name"
                error={errors?.firstName}
                required
              />
              
              <Input
                label="Last Name"
                type="text"
                name="lastName"
                value={formData?.lastName}
                onChange={handleInputChange}
                placeholder="Enter your last name"
                error={errors?.lastName}
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Email Address"
                type="email"
                name="email"
                value={formData?.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                error={errors?.email}
                required
              />
              
              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                value={formData?.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                error={errors?.phone}
                required
              />
            </div>
            
            <div className="text-center pt-4">
              <Button
                type="submit"
                variant="default"
                size="lg"
                loading={isSubmitting}
                disabled={isSubmitting}
                iconName="Send"
                iconPosition="right"
                iconSize={20}
                className="shadow-neumorphic animate-scale-hover"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground text-center mt-4">
              By subscribing, you agree to receive marketing communications from International Bank (Liberia) Limited. You can unsubscribe at any time.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;