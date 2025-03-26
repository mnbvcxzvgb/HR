import React, { useState } from 'react';
import { Search, MapPin, Filter } from 'lucide-react';

interface JobSearchProps {
  onSearch: (query: string, location: string) => void;
  onAdvancedFilter: () => void;
}

const JobSearch: React.FC<JobSearchProps> = ({ onSearch, onAdvancedFilter }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery, location);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-grow">
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Search className="h-5 w-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="חיפוש לפי תפקיד או מילות מפתח"
            className="w-full py-3 pl-4 pr-10 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            dir="rtl"
          />
        </div>
        
        <div className="relative flex-grow md:max-w-xs">
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <MapPin className="h-5 w-5" />
          </div>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full py-3 pl-4 pr-10 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            dir="rtl"
          >
            <option value="">כל המיקומים</option>
            <option value="jerusalem">ירושלים</option>
            <option value="tel-aviv">תל אביב</option>
            <option value="haifa">חיפה</option>
            <option value="other">אחר</option>
          </select>
        </div>
        
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onAdvancedFilter}
            className="px-4 py-3 border border-gray-200 bg-white rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <Filter className="h-5 w-5" />
          </button>
          
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-lg font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
          >
            חיפוש
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobSearch; 