import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, ChevronDown, Filter, MapPin, Shield, X } from 'lucide-react';
import { cn } from '@/lib/utils';

// Types for filter options
interface FilterOption {
  id: string;
  label: string;
}

// Props for the FilterBar component
interface FilterBarProps {
  onFilterChange: (filters: {
    locations: string[];
    jobTypes: string[];
    experienceLevel: string[];
  }) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [selectedExperienceLevels, setSelectedExperienceLevels] = useState<string[]>([]);

  // Available filter options
  const locations: FilterOption[] = [
    { id: 'jerusalem', label: 'ירושלים' },
    { id: 'tel-aviv', label: 'תל אביב' },
    { id: 'haifa', label: 'חיפה' },
    { id: 'beer-sheva', label: 'באר שבע' }
  ];

  const jobTypes: FilterOption[] = [
    { id: 'full-time', label: 'משרה מלאה' },
    { id: 'part-time', label: 'משרה חלקית' },
    { id: 'shifts', label: 'משמרות' }
  ];

  const experienceLevels: FilterOption[] = [
    { id: 'no-experience', label: 'ללא ניסיון' },
    { id: 'entry-level', label: 'ניסיון ראשוני' },
    { id: 'experienced', label: 'בעלי ניסיון' },
    { id: 'combat', label: 'יוצאי קרבי' }
  ];

  // Toggle filter selection
  const toggleLocation = (locationId: string) => {
    setSelectedLocations(prev => 
      prev.includes(locationId) 
        ? prev.filter(id => id !== locationId) 
        : [...prev, locationId]
    );
  };

  const toggleJobType = (jobTypeId: string) => {
    setSelectedJobTypes(prev => 
      prev.includes(jobTypeId) 
        ? prev.filter(id => id !== jobTypeId) 
        : [...prev, jobTypeId]
    );
  };

  const toggleExperienceLevel = (levelId: string) => {
    setSelectedExperienceLevels(prev => 
      prev.includes(levelId) 
        ? prev.filter(id => id !== levelId) 
        : [...prev, levelId]
    );
  };

  // Apply filters
  const applyFilters = () => {
    onFilterChange({
      locations: selectedLocations,
      jobTypes: selectedJobTypes,
      experienceLevel: selectedExperienceLevels
    });
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedLocations([]);
    setSelectedJobTypes([]);
    setSelectedExperienceLevels([]);
    onFilterChange({
      locations: [],
      jobTypes: [],
      experienceLevel: []
    });
  };

  // Count selected filters
  const totalSelectedFilters = 
    selectedLocations.length + 
    selectedJobTypes.length + 
    selectedExperienceLevels.length;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      {/* Header */}
      <div 
        className="p-4 flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-blue-600" />
          <h3 className="font-semibold text-lg">סינון משרות</h3>
          {totalSelectedFilters > 0 && (
            <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded-full ml-2">
              {totalSelectedFilters}
            </span>
          )}
        </div>
        <ChevronDown 
          className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} 
        />
      </div>

      {/* Filter content */}
      {isOpen && (
        <div className="px-4 pb-4 space-y-4 border-t border-gray-200 pt-4">
          {/* Locations */}
          <div>
            <h4 className="font-medium text-gray-900 mb-2">מיקום</h4>
            <div className="flex flex-wrap gap-2">
              {locations.map(location => (
                <button
                  key={location.id}
                  onClick={() => toggleLocation(location.id)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors border ${
                    selectedLocations.includes(location.id)
                      ? 'bg-blue-100 text-blue-700 border-blue-200'
                      : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                  }`}
                >
                  {location.label}
                </button>
              ))}
            </div>
          </div>

          {/* Job Types */}
          <div>
            <h4 className="font-medium text-gray-900 mb-2">סוג משרה</h4>
            <div className="flex flex-wrap gap-2">
              {jobTypes.map(jobType => (
                <button
                  key={jobType.id}
                  onClick={() => toggleJobType(jobType.id)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors border ${
                    selectedJobTypes.includes(jobType.id)
                      ? 'bg-purple-100 text-purple-700 border-purple-200'
                      : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                  }`}
                >
                  {jobType.label}
                </button>
              ))}
            </div>
          </div>

          {/* Experience Levels */}
          <div>
            <h4 className="font-medium text-gray-900 mb-2">ניסיון נדרש</h4>
            <div className="flex flex-wrap gap-2">
              {experienceLevels.map(level => (
                <button
                  key={level.id}
                  onClick={() => toggleExperienceLevel(level.id)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors border ${
                    selectedExperienceLevels.includes(level.id)
                      ? 'bg-amber-100 text-amber-700 border-amber-200'
                      : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                  }`}
                >
                  {level.label}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <Button
              onClick={applyFilters}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              הפעל סינון
            </Button>
            {totalSelectedFilters > 0 && (
              <Button
                variant="outline"
                onClick={clearFilters}
                className="text-gray-700"
              >
                <X className="h-4 w-4 mr-2" />
                נקה הכל
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar; 