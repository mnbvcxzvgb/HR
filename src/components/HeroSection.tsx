import { cn } from '@/lib/utils';
import { ChevronRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from 'react';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  imagePosition?: 'left' | 'right' | 'none';
  className?: string;
  onWhatsAppClick?: () => void;
}

export default function HeroSection({ 
  title, 
  subtitle, 
  imagePosition = 'left',
  className,
  onWhatsAppClick
}: HeroSectionProps) {
  
  const handleWhatsAppClick = () => {
    if (onWhatsAppClick) {
      onWhatsAppClick();
    } else {
      // Default action - open WhatsApp modal would go here
      console.log('WhatsApp clicked');
    }
  };

  return (
    <section 
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-navy-900 to-navy-950"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay"
      }}
      dir="rtl"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
      <div className="relative container mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {title || "דרושים מאבטחים למגוון תפקידים בירושלים | מגן Staffing"}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
            {subtitle || "דרישות: רובאי 03 + תעודת לוחם • תנאים מעולים"}
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-8 mb-10 max-w-3xl mx-auto">
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-3 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1.5l-1.8-1.8A2 2 0 0012.2 2H7.8a2 2 0 00-1.4.6L4.6 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
              </svg>
              <span className="text-white font-medium">שכר אטרקטיבי</span>
            </div>
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-3 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-white font-medium">עבודה במשמרות 24/7</span>
            </div>
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-3 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span className="text-white font-medium">מגורים לבאים מחוץ לעיר</span>
            </div>
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-3 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span className="text-white font-medium">אפשרויות קידום מקצועי</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#positions"
              className="bg-amber-500 hover:bg-amber-600 text-navy-900 font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              צפה במשרות פתוחות
            </a>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5 w-5 fill-current">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6z"/>
              </svg>
              להגשת מועמדות
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
