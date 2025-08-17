import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const NewsletterSignup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    interests: 'all'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert(`Thank you ${formData?.firstName}! You've been subscribed to our publications newsletter.`);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        interests: 'all'
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-primary text-primary-foreground rounded-lg p-8 shadow-neumorphic">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto mb-6">
          <Icon name="Mail" size={32} color="white" />
        </div>
        
        <h2 className="text-2xl font-heading font-bold mb-4">
          Stay Updated with Our Publications
        </h2>
        <p className="text-primary-foreground opacity-90 mb-8">
          Subscribe to receive notifications about new reports, financial insights, and important updates from International Bank Liberia.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="First Name"
              type="text"
              placeholder="Enter your first name"
              value={formData?.firstName}
              onChange={(e) => handleInputChange('firstName', e?.target?.value)}
              required
              className="bg-white bg-opacity-10 border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70"
            />
            <Input
              label="Last Name"
              type="text"
              placeholder="Enter your last name"
              value={formData?.lastName}
              onChange={(e) => handleInputChange('lastName', e?.target?.value)}
              required
              className="bg-white bg-opacity-10 border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70"
            />
          </div>

          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email address"
            value={formData?.email}
            onChange={(e) => handleInputChange('email', e?.target?.value)}
            required
            className="bg-white bg-opacity-10 border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70"
          />

          <div className="text-left">
            <label className="block text-sm font-medium text-primary-foreground mb-2">
              Publication Interests
            </label>
            <select
              value={formData?.interests}
              onChange={(e) => handleInputChange('interests', e?.target?.value)}
              className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              <option value="all" className="text-gray-900">All Publications</option>
              <option value="annual-reports" className="text-gray-900">Annual Reports</option>
              <option value="regulatory" className="text-gray-900">Regulatory Updates</option>
              <option value="financial-literacy" className="text-gray-900">Financial Education</option>
              <option value="market-insights" className="text-gray-900">Market Insights</option>
            </select>
          </div>

          <Button
            type="submit"
            variant="secondary"
            size="lg"
            loading={isSubmitting}
            iconName="Send"
            iconPosition="right"
            iconSize={20}
            className="w-full md:w-auto"
          >
            Subscribe to Updates
          </Button>
        </form>

        <p className="text-xs text-primary-foreground opacity-70 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;