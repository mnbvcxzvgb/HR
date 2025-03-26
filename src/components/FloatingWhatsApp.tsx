import React from 'react';

/**
 * FloatingWhatsApp component provides a fixed WhatsApp button
 * for quick customer service access on all pages
 */
const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50" role="complementary" aria-label="צור קשר ישיר">
      <a 
        href="https://wa.me/9720534873215" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block bg-[#25D366] hover:bg-[#20BD5C] text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
        aria-label="פתיחת צ'אט בווטסאפ"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 448 512" 
          className="w-6 h-6 fill-current"
          aria-hidden="true"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6z"/>
        </svg>
      </a>
    </div>
  );
};

export default FloatingWhatsApp; 