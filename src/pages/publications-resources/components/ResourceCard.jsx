import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ResourceCard = ({ resource, onDownload, onPreview }) => {
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i))?.toFixed(2)) + ' ' + sizes?.[i];
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getFileIcon = (type) => {
    switch (type?.toLowerCase()) {
      case 'pdf':
        return 'FileText';
      case 'doc': case'docx':
        return 'FileText';
      case 'xls': case'xlsx':
        return 'Sheet';
      case 'ppt': case'pptx':
        return 'Presentation';
      default:
        return 'File';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-neumorphic hover:shadow-elevation transition-all duration-300 animate-scale-hover">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-lg">
            <Icon 
              name={getFileIcon(resource?.type)} 
              size={24} 
              color="var(--color-primary)" 
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
              {resource?.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {resource?.description}
            </p>
          </div>
        </div>
        {resource?.featured && (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
            Featured
          </span>
        )}
      </div>
      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1">
            <Icon name="Calendar" size={16} />
            <span>{formatDate(resource?.publishDate)}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Icon name="HardDrive" size={16} />
            <span>{formatFileSize(resource?.fileSize)}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Icon name="FileType" size={16} />
            <span>{resource?.type?.toUpperCase()}</span>
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <Button
          variant="default"
          size="sm"
          onClick={() => onDownload(resource)}
          iconName="Download"
          iconPosition="left"
          iconSize={16}
          className="flex-1"
        >
          Download
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPreview(resource)}
          iconName="Eye"
          iconPosition="left"
          iconSize={16}
        >
          Preview
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigator.share ? navigator.share({
            title: resource?.title,
            text: resource?.description,
            url: resource?.downloadUrl
          }) : alert('Sharing functionality not supported')}
          iconName="Share2"
          iconSize={16}
        />
      </div>
    </div>
  );
};

export default ResourceCard;