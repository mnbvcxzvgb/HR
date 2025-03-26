import React from 'react';

/**
 * SkipNavigation component allows keyboard users to bypass navigation
 * and go directly to the main content.
 */
const SkipNavigation: React.FC = () => {
  return (
    <a 
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:font-medium focus:rounded-md focus:shadow-lg focus:outline-none"
    >
      דלג לתוכן העיקרי
    </a>
  );
};

export default SkipNavigation; 