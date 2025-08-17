import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import SearchAndFilter from './components/SearchAndFilter';
import CategorySection from './components/CategorySection';
import FeaturedResources from './components/FeaturedResources';
import NewsletterSignup from './components/NewsletterSignup';

const PublicationsResources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('date-desc');

  // Mock data for publications and resources
  const mockResources = [
    {
      id: 1,
      title: "Annual Report 2023",
      description: "Comprehensive overview of our financial performance and strategic achievements for 2023",
      category: "annual-reports",
      type: "pdf",
      fileSize: 2457600,
      publishDate: "2024-03-15",
      downloadUrl: "/assets/pdfs/IBLL2024_Audited-Financial-Statement.pdf", // Updated to actual PDF path
      featured: true
    },
    {
      id: 2,
      title: "Financial Literacy Guide: Personal Banking",
      description: "Essential guide to managing personal finances and banking services in Liberia",
      category: "financial-literacy",
      type: "pdf",
      fileSize: 1843200,
      publishDate: "2024-02-20",
      downloadUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Regulatory Compliance Report Q4 2023",
      description: "Quarterly compliance report detailing adherence to Central Bank of Liberia regulations",
      category: "regulatory",
      type: "pdf",
      fileSize: 1024000,
      publishDate: "2024-01-30",
      downloadUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Small Business Banking Application Form",
      description: "Complete application form for opening small business banking accounts",
      category: "forms",
      type: "pdf",
      fileSize: 512000,
      publishDate: "2024-01-15",
      downloadUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Liberian Economy Market Insights 2024",
      description: "Analysis of current market trends and economic outlook for Liberia",
      category: "market-insights",
      type: "pdf",
      fileSize: 3145728,
      publishDate: "2024-02-10",
      downloadUrl: "#",
      featured: true
    },
    {
      id: 6,
      title: "Digital Banking Security Guidelines",
      description: "Best practices for secure online and mobile banking usage",
      category: "financial-literacy",
      type: "pdf",
      fileSize: 921600,
      publishDate: "2024-01-25",
      downloadUrl: "#",
      featured: false
    },
    {
      id: 7,
      title: "Corporate Banking Services Overview",
      description: "Comprehensive guide to our corporate and institutional banking solutions",
      category: "annual-reports",
      type: "pdf",
      fileSize: 2048000,
      publishDate: "2024-02-05",
      downloadUrl: "#",
      featured: false
    },
    {
      id: 8,
      title: "Personal Loan Application Form",
      description: "Application form for personal loans with required documentation checklist",
      category: "forms",
      type: "pdf",
      fileSize: 409600,
      publishDate: "2024-01-20",
      downloadUrl: "#",
      featured: false
    },
    {
      id: 9,
      title: "Anti-Money Laundering Policy",
      description: "Our comprehensive AML policy and procedures for customer compliance",
      category: "regulatory",
      type: "pdf",
      fileSize: 1536000,
      publishDate: "2024-01-10",
      downloadUrl: "#",
      featured: false
    },
    {
      id: 10,
      title: "Investment Banking Quarterly Review",
      description: "Quarterly analysis of investment opportunities and market performance",
      category: "market-insights",
      type: "pdf",
      fileSize: 2764800,
      publishDate: "2024-02-28",
      downloadUrl: "#",
      featured: true
    }
  ];

  const categories = [
    {
      id: 'annual-reports',
      title: 'Annual Reports & Financial Statements',
      description: 'Comprehensive annual reports, audited financial statements, and performance summaries showcasing our commitment to transparency and accountability.',
      icon: 'FileBarChart'
    },
    {
      id: 'regulatory',
      title: 'Regulatory Disclosures & Compliance',
      description: 'Important regulatory documents, compliance reports, and disclosures required by the Central Bank of Liberia and other regulatory bodies.',
      icon: 'Shield'
    },
    {
      id: 'financial-literacy',
      title: 'Financial Literacy & Educational Materials',
      description: 'Educational resources, guides, and materials designed to enhance financial literacy and empower our customers with knowledge.',
      icon: 'GraduationCap'
    },
    {
      id: 'market-insights',
      title: 'Market Insights & Economic Reports',
      description: 'Economic analysis, market trends, and insights into the Liberian financial landscape to inform your business and investment decisions.',
      icon: 'TrendingUp'
    },
    {
      id: 'forms',
      title: 'Customer Forms & Applications',
      description: 'Downloadable forms, applications, and documentation required for various banking services and account openings.',
      icon: 'FileText'
    }
  ];

  // Filter and sort resources
  const filteredAndSortedResources = useMemo(() => {
    let filtered = mockResources?.filter(resource => {
      const matchesSearch = resource?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                          resource?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || resource?.category === selectedCategory;
      const matchesType = selectedType === 'all' || resource?.type === selectedType;
      
      return matchesSearch && matchesCategory && matchesType;
    });

    // Sort resources
    filtered?.sort((a, b) => {
      switch (sortBy) {
        case 'date-desc':
          return new Date(b.publishDate) - new Date(a.publishDate);
        case 'date-asc':
          return new Date(a.publishDate) - new Date(b.publishDate);
        case 'title-asc':
          return a?.title?.localeCompare(b?.title);
        case 'title-desc':
          return b?.title?.localeCompare(a?.title);
        case 'size-desc':
          return b?.fileSize - a?.fileSize;
        case 'size-asc':
          return a?.fileSize - b?.fileSize;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedType, sortBy]);

  const featuredResources = mockResources?.filter(resource => resource?.featured);

  const handleDownload = (resource) => {
    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = resource.downloadUrl;
    link.download = resource.title + '.pdf'; // Set default download name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = (resource) => {
    // For preview, open the PDF in a new tab
    window.open(resource.downloadUrl, '_blank');
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedType('all');
    setSortBy('date-desc');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Publications & Resources - International Bank Liberia</title>
        <meta name="description" content="Access comprehensive financial resources, annual reports, regulatory documents, and educational materials from International Bank Liberia. Download forms, guides, and market insights." />
        <meta name="keywords" content="bank publications, financial reports, regulatory documents, forms, financial literacy, Liberia banking" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-lg mx-auto mb-8 shadow-neumorphic">
                <Icon name="BookOpen" size={40} color="white" />
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 animate-entrance">
                Publications & Resources
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground opacity-90 mb-8 animate-entrance" style={{ animationDelay: '0.2s' }}>
                Empowering our customers through knowledge, transparency, and accessible financial information
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-entrance" style={{ animationDelay: '0.4s' }}>
                <Button
                  variant="secondary"
                  size="lg"
                  iconName="Download"
                  iconPosition="left"
                  iconSize={20}
                  className="shadow-neumorphic"
                  onClick={() => document.getElementById('featured-resources')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Browse Featured Resources
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Search"
                  iconPosition="left"
                  iconSize={20}
                  className="border-white border-opacity-30 text-white hover:bg-white hover:text-primary"
                  onClick={() => document.getElementById('search-filter')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Search Documents
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="bg-accent py-4">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <nav className="flex items-center space-x-2 text-sm">
              <a href="/home-page" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
              <span className="text-foreground font-medium">Publications & Resources</span>
            </nav>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 lg:px-6 py-12">
          {/* Featured Resources */}
          <div id="featured-resources">
            <FeaturedResources
              resources={featuredResources}
              onDownload={handleDownload}
              onPreview={handlePreview}
            />
          </div>

          {/* Search and Filter */}
          <div id="search-filter">
            <SearchAndFilter
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedType={selectedType}
              onTypeChange={setSelectedType}
              sortBy={sortBy}
              onSortChange={setSortBy}
              onClearFilters={handleClearFilters}
            />
          </div>

          {/* Results Summary */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground">
                Showing {filteredAndSortedResources?.length} of {mockResources?.length} resources
                {searchTerm && (
                  <span className="ml-2">
                    for "<span className="font-medium text-foreground">{searchTerm}</span>"
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* Category Sections */}
          <div className="space-y-8">
            {categories?.map(category => {
              const categoryResources = filteredAndSortedResources?.filter(
                resource => resource?.category === category?.id
              );
              
              if (categoryResources?.length === 0 && (selectedCategory === 'all' || selectedCategory === category?.id)) {
                return null;
              }

              return (
                <CategorySection
                  key={category?.id}
                  category={category}
                  resources={categoryResources}
                  onDownload={handleDownload}
                  onPreview={handlePreview}
                />
              );
            })}
          </div>

          {/* No Results */}
          {filteredAndSortedResources?.length === 0 && (
            <div className="text-center py-16">
              <div className="flex items-center justify-center w-20 h-20 bg-muted rounded-lg mx-auto mb-6">
                <Icon name="Search" size={40} className="text-muted-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                No resources found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button
                variant="outline"
                onClick={handleClearFilters}
                iconName="RotateCcw"
                iconPosition="left"
                iconSize={16}
              >
                Clear All Filters
              </Button>
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="mt-16">
            <NewsletterSignup />
          </div>
        </main>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-neumorphic hover:shadow-elevation transition-all duration-300 animate-scale-hover z-50"
          aria-label="Back to top"
        >
          <Icon name="ArrowUp" size={24} className="mx-auto" />
        </button>

        {/* Footer */}
        <footer className="bg-foreground text-background py-16 mt-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                    <Icon name="Landmark" size={24} color="white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold">International Bank</h3>
                    <p className="text-sm opacity-80">Liberia</p>
                  </div>
                </div>
                <p className="text-sm opacity-80 mb-4">
                  Banking solutions designed to simplify your life, build businesses, strengthen our economy & empower communities.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                    <Icon name="Facebook" size={16} color="white" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                    <Icon name="Linkedin" size={16} color="white" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                    <Icon name="Instagram" size={16} color="white" />
                  </a>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-heading font-semibold mb-6">Our Services</h4>
                <ul className="space-y-3 text-sm opacity-80">
                  <li><a href="/personal-banking" className="hover:opacity-100 transition-opacity">Personal Banking</a></li>
                  <li><a href="/small-business-banking" className="hover:opacity-100 transition-opacity">Small Business</a></li>
                  <li><a href="/corporate-institutional-banking" className="hover:opacity-100 transition-opacity">Corporate Banking</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Online Banking</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Mobile Banking</a></li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-heading font-semibold mb-6">Quick Links</h4>
                <ul className="space-y-3 text-sm opacity-80">
                  <li><a href="/about-us" className="hover:opacity-100 transition-opacity">About Us</a></li>
                  <li><a href="/publications-resources" className="hover:opacity-100 transition-opacity">Publications</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Contact Us</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Careers</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-heading font-semibold mb-6">Contact Info</h4>
                <div className="space-y-4 text-sm opacity-80">
                  <div className="flex items-start space-x-3">
                    <Icon name="MapPin" size={16} className="mt-1 flex-shrink-0" />
                    <span>Broad Street, Monrovia, Liberia</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={16} className="flex-shrink-0" />
                    <span>+231 77 123 4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={16} className="flex-shrink-0" />
                    <span>info@ibliberia.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={16} className="flex-shrink-0" />
                    <span>Mon-Fri: 9AM-2PM<br />Sat: 9AM-12PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-12 pt-8 text-center">
              <p className="text-sm opacity-80">
                © {new Date()?.getFullYear()} International Bank (Liberia) Limited. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PublicationsResources;