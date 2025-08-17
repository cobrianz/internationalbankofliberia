import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ResourceCenter = () => {
  const resources = [
    {
      id: 1,
      title: "Small Business Startup Guide",
      description: "Complete guide to starting a business in Liberia, including legal requirements, registration processes, and initial funding strategies.",
      type: "PDF Guide",
      size: "2.4 MB",
      pages: "32 pages",
      icon: "BookOpen",
      category: "Getting Started"
    },
    {
      id: 2,
      title: "Business Financial Planning Template",
      description: "Excel template for creating comprehensive financial projections, cash flow analysis, and budget planning for your business.",
      type: "Excel Template",
      size: "1.8 MB",
      pages: "Multiple sheets",
      icon: "FileSpreadsheet",
      category: "Financial Planning"
    },
    {
      id: 3,
      title: "Liberian Tax Compliance Checklist",
      description: "Essential checklist covering all tax obligations for businesses in Liberia, including deadlines, forms, and compliance requirements.",
      type: "PDF Checklist",
      size: "1.2 MB",
      pages: "16 pages",
      icon: "CheckSquare",
      category: "Compliance"
    },
    {
      id: 4,
      title: "Export-Import Business Manual",
      description: "Comprehensive manual for businesses engaged in international trade, covering documentation, regulations, and financing options.",
      type: "PDF Manual",
      size: "3.6 MB",
      pages: "48 pages",
      icon: "Globe",
      category: "International Trade"
    },
    {
      id: 5,
      title: "Digital Marketing for Small Business",
      description: "Practical guide to leveraging digital marketing channels to grow your business in the Liberian market.",
      type: "PDF Guide",
      size: "2.1 MB",
      pages: "28 pages",
      icon: "Smartphone",
      category: "Marketing"
    },
    {
      id: 6,
      title: "Business Loan Application Kit",
      description: "Complete application package including forms, required documents checklist, and tips for successful loan applications.",
      type: "Document Kit",
      size: "4.2 MB",
      pages: "Multiple documents",
      icon: "FileText",
      category: "Financing"
    }
  ];

  const categories = [
    "All Resources",
    "Getting Started",
    "Financial Planning",
    "Compliance",
    "International Trade",
    "Marketing",
    "Financing"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All Resources");

  const filteredResources = selectedCategory === "All Resources" 
    ? resources 
    : resources?.filter(resource => resource?.category === selectedCategory);

  const handleDownload = (resource) => {
    alert(`Downloading: ${resource?.title}\n\nFile Type: ${resource?.type}\nSize: ${resource?.size}\n\nThis resource will help you with ${resource?.category?.toLowerCase()} for your business. The download will begin shortly.`);
  };

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Business Resource Center
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Access our comprehensive library of business guides, templates, and tools designed 
            specifically for the Liberian business environment. All resources are free to download.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories?.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-body font-medium text-sm transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-neumorphic'
                  : 'bg-card text-foreground hover:bg-accent hover:text-accent-foreground shadow-neumorphic hover:shadow-elevation'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources?.map((resource, index) => (
            <motion.div
              key={resource?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 shadow-neumorphic hover:shadow-elevation transition-all duration-300 animate-scale-hover border border-border"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-neumorphic">
                  <Icon name={resource?.icon} size={24} color="white" />
                </div>
                <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-lg font-body font-medium">
                  {resource?.category}
                </span>
              </div>

              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                {resource?.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {resource?.description}
              </p>

              <div className="flex items-center justify-between text-xs text-muted-foreground mb-6">
                <span className="flex items-center space-x-1">
                  <Icon name="File" size={14} />
                  <span>{resource?.type}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="Download" size={14} />
                  <span>{resource?.size}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="FileText" size={14} />
                  <span>{resource?.pages}</span>
                </span>
              </div>

              <Button
                variant="outline"
                fullWidth
                onClick={() => handleDownload(resource)}
                className="shadow-neumorphic animate-scale-hover"
                iconName="Download"
                iconPosition="left"
                iconSize={16}
              >
                Download Free
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-card rounded-2xl p-8 shadow-neumorphic border border-border">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  Need Additional Business Support?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our business banking specialists are available to provide personalized guidance 
                  and answer questions about starting or growing your business in Liberia.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <span className="text-foreground">+231-77-123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <span className="text-foreground">business@internationalbank.lr</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={20} className="text-primary" />
                    <span className="text-foreground">Mon-Fri: 9AM-2PM, Sat: 9AM-12PM</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => alert('Business consultation request submitted! Our relationship manager will contact you within 24 hours.')}
                  className="shadow-neumorphic animate-scale-hover"
                  iconName="Users"
                  iconPosition="left"
                  iconSize={20}
                >
                  Schedule Business Consultation
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourceCenter;