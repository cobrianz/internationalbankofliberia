import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import ResourceCard from './ResourceCard';

const FeaturedResources = ({ resources, onDownload, onPreview }) => {
  if (!resources || resources?.length === 0) return null;

  return (
    <div className="bg-gradient-to-br from-secondary to-accent rounded-lg p-8 mb-8 shadow-neumorphic">
      <div className="flex items-center space-x-3 mb-6">
        <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg shadow-neumorphic">
          <Icon name="Star" size={24} color="white" />
        </div>
        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground">
            Featured Resources
          </h2>
          <p className="text-muted-foreground">
            Important updates and highlighted publications
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {resources?.slice(0, 4)?.map((resource) => (
          <ResourceCard
            key={resource?.id}
            resource={resource}
            onDownload={onDownload}
            onPreview={onPreview}
          />
        ))}
      </div>
      {resources?.length > 4 && (
        <div className="mt-6 text-center">
          <Button
            variant="default"
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={16}
          >
            View All Featured Resources
          </Button>
        </div>
      )}
    </div>
  );
};

export default FeaturedResources;