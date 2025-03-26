import React from 'react';
import { Phone, Target, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-tactical relative" dir="rtl">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-tactical"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-10">
              <Target className="w-10 h-10 text-jerusalem-light mr-3" />
              <span className="text-3xl font-bold text-jerusalem-light">טים אבטחה</span>
            </div>
            
            <div className="text-center mb-12">
              <p className="text-jerusalem-light/80 text-lg mb-6">
                הצטרפו לצוות המוביל שלנו
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-jerusalem text-tactical hover:bg-jerusalem-light/90 transition-colors"
                >
                  <a 
                    href="tel:+9720534873215"
                    className="flex items-center gap-3 px-8"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="text-lg">053-487-3215</span>
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white transition-colors"
                >
                  <a 
                    href="https://wa.me/9720534873215"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-8"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-current">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                    </svg>
                    <span className="text-lg">WhatsApp</span>
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-jerusalem-light text-jerusalem-light hover:bg-jerusalem-light/10 hover:border-jerusalem-light/80 transition-colors"
                >
                  <a 
                    href="mailto:info@teamattractor.com"
                    className="flex items-center gap-3 px-8"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="text-lg">דוא״ל</span>
                  </a>
                </Button>
              </div>
            </div>

            <div className="w-full max-w-2xl mx-auto border-t border-jerusalem-light/20 pt-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-jerusalem-light/60">
                <p className="text-sm">
                  © {new Date().getFullYear()} Team Attractor. כל הזכויות שמורות.
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <span>מדיניות פרטיות</span>
                  <span>תנאי שימוש</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
