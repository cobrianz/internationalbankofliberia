import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import ResourceCard from './ResourceCard';

const CategorySection = ({ category, resources, onDownload, onPreview }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-neumorphic overflow-hidden">
      <button
        onClick={toggleExpanded}
        className="w-full px-6 py-4 flex items-center justify-between bg-accent hover:bg-muted transition-colors duration-200"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
            <Icon name={category?.icon} size={20} color="white" />
          </div>
          <div className="text-left">
            <h2 className="text-xl font-heading font-semibold text-foreground">
              {category?.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              {resources?.length} document{resources?.length !== 1 ? 's' : ''} available
            </p>
          </div>
        </div>
        <Icon 
          name={isExpanded ? "ChevronUp" : "ChevronDown"} 
          size={24} 
          className="text-muted-foreground transition-transform duration-200"
        />
      </button>
      {isExpanded && (
        <div className="p-6 border-t border-border">
          <p className="text-muted-foreground mb-6">
            {category?.description}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {resources?.map((resource) => (
              <ResourceCard
                key={resource?.id}
                resource={resource}
                onDownload={onDownload}
                onPreview={onPreview}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategorySection;