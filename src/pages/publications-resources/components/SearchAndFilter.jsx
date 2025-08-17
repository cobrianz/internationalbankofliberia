import React from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const SearchAndFilter = ({ 
  searchTerm, 
  onSearchChange, 
  selectedCategory, 
  onCategoryChange, 
  selectedType, 
  onTypeChange,
  sortBy,
  onSortChange,
  onClearFilters 
}) => {
  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'annual-reports', label: 'Annual Reports' },
    { value: 'regulatory', label: 'Regulatory Documents' },
    { value: 'financial-literacy', label: 'Financial Literacy' },
    { value: 'market-insights', label: 'Market Insights' },
    { value: 'forms', label: 'Forms & Applications' }
  ];

  const typeOptions = [
    { value: 'all', label: 'All Types' },
    { value: 'pdf', label: 'PDF Documents' },
    { value: 'doc', label: 'Word Documents' },
    { value: 'xls', label: 'Excel Spreadsheets' },
    { value: 'ppt', label: 'Presentations' }
  ];

  const sortOptions = [
    { value: 'date-desc', label: 'Newest First' },
    { value: 'date-asc', label: 'Oldest First' },
    { value: 'title-asc', label: 'Title A-Z' },
    { value: 'title-desc', label: 'Title Z-A' },
    { value: 'size-desc', label: 'Largest First' },
    { value: 'size-asc', label: 'Smallest First' }
  ];

  const hasActiveFilters = selectedCategory !== 'all' || selectedType !== 'all' || searchTerm?.length > 0;

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-neumorphic mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-heading font-semibold text-foreground">
          Search & Filter Resources
        </h2>
        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={onClearFilters}
            iconName="X"
            iconPosition="left"
            iconSize={16}
          >
            Clear Filters
          </Button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Input
          type="search"
          placeholder="Search documents..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e?.target?.value)}
          className="w-full"
        />

        <Select
          options={categoryOptions}
          value={selectedCategory}
          onChange={onCategoryChange}
          placeholder="Select category"
        />

        <Select
          options={typeOptions}
          value={selectedType}
          onChange={onTypeChange}
          placeholder="Select file type"
        />

        <Select
          options={sortOptions}
          value={sortBy}
          onChange={onSortChange}
          placeholder="Sort by"
        />
      </div>
    </div>
  );
};

export default SearchAndFilter;