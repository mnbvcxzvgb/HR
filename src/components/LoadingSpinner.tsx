import React from 'react';

/**
 * LoadingSpinner component displays a loading indicator
 * Used as a fallback during lazy loading of route components
 */
const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-64">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-t-primary border-r-primary border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        <p className="text-lg font-medium text-gray-700">טוען...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner; 