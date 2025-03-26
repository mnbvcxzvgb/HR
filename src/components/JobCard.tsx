import React from 'react';
import { MapPin, Clock, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface JobCardProps {
  id: string;
  title: string;
  location: string;
  salary: string;
  jobType: string;
  badgeText: string;
  badgeColor: string;
  onDetailsClick: (id: string) => void;
  onApplyClick: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  id,
  title,
  location,
  salary,
  jobType,
  badgeText,
  badgeColor,
  onDetailsClick,
  onApplyClick
}) => {
  const getDisplayLocation = (loc: string) => {
    const mapping: Record<string, string> = {
      'jerusalem': 'ירושלים',
      'tel-aviv': 'תל אביב',
      'haifa': 'חיפה'
    };
    return mapping[loc.toLowerCase()] || loc;
  };

  const getJobTypeDisplay = (type: string) => {
    const mapping: Record<string, string> = {
      'full-time': 'משרה מלאה',
      'part-time': 'משרה חלקית',
      'shifts': 'משמרות'
    };
    return mapping[type.toLowerCase()] || type;
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 border border-gray-100">
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-${badgeColor}/20 text-${badgeColor}`}>
            {badgeText}
          </span>
        </div>
        
        <div className="space-y-3 mb-5">
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 ml-2 rtl:mr-2" />
            <span>{getDisplayLocation(location)}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 ml-2 rtl:mr-2" />
            <span>{getJobTypeDisplay(jobType)}</span>
          </div>
          <div className="flex items-center font-medium text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="h-4 w-4 ml-2 rtl:mr-2" fill="currentColor">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1.5l-1.8-1.8A2 2 0 0012.2 2H7.8a2 2 0 00-1.4.6L4.6 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
            </svg>
            <span>{salary}</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={() => onDetailsClick(id)}
            variant="outline"
            className="flex-1 border-gray-200 hover:bg-gray-50 text-gray-700"
          >
            <span className="flex items-center gap-2">
              <Info className="h-4 w-4" />
              פרטים נוספים
            </span>
          </Button>
          <Button
            onClick={onApplyClick}
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white shadow-md hover:shadow-lg"
          >
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-4 w-4 fill-current">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6z"/>
              </svg>
              הגשת מועמדות
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobCard; 