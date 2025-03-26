import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imagePosition?: 'left' | 'right' | 'background' | 'none';
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle, 
  imagePosition = 'right',
  className
}) => {
  useEffect(() => {
    const textElements = document.querySelectorAll('.animate-on-load');
    textElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('opacity-100', 'translate-y-0');
      }, 300 + index * 200);
    });
  }, []);

  // Replaced image rendering with gradient background
  const renderDecorativeElement = () => (
    <div 
      className={cn(
        "relative w-full h-full",
        imagePosition === 'background' ? "absolute inset-0" : "flex-1"
      )}
    >
      <div className="relative h-full overflow-hidden rounded-lg border-2 border-tactical/30">
        <div className="absolute inset-0 bg-gradient-to-r from-tactical/40 to-transparent z-10"></div>
        <div 
          className={cn(
            "w-full h-full bg-gradient-to-br from-blue-900 to-blue-700",
            imagePosition === 'background' ? "opacity-70" : ""
          )}
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)]" style={{ backgroundSize: '20px 20px' }}></div>
          <div className="h-full w-full flex items-center justify-center">
            <div className="text-6xl text-white/20 font-bold">יחידת אלון</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section 
      className={cn(
        "relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black overflow-hidden",
        className
      )}
      dir="rtl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-tactical via-tactical-foreground to-blue-900 opacity-90"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 lg:py-32">
        <div 
          className={cn(
            "relative flex flex-col lg:flex-row items-center gap-12 lg:gap-24",
            imagePosition === 'right' ? "lg:flex-row-reverse" : ""
          )}
        >
          <div className="flex-1 text-center lg:text-right z-10">
            <div className="max-w-2xl lg:max-w-none mx-auto lg:mx-0 bg-black/50 p-8 rounded-lg backdrop-blur-md shadow-2xl">
              <h1 
                className="text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-8 animate-on-load opacity-0 translate-y-4 transition-all duration-700 text-white"
                dir="rtl"
              >
                {title}
              </h1>
              <p 
                className="text-xl lg:text-2xl text-white/80 animate-on-load opacity-0 translate-y-4 transition-all duration-700"
                dir="rtl"
              >
                {subtitle}
              </p>
              <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 sm:justify-center lg:justify-start animate-on-load opacity-0 translate-y-4 transition-all duration-700">
                <Button asChild size="lg" className="bg-jerusalem hover:bg-jerusalem-light transition-colors rounded-lg group font-medium px-6 py-3">
                  <a href="tel:+9720534873215" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span>התקשר עכשיו</span>
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-jerusalem text-jerusalem hover:bg-jerusalem/10 hover:text-jerusalem-light px-6 py-3">
                  <a href="#positions" className="flex items-center gap-2">
                    <span>הצטרף לצוות</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {imagePosition !== 'none' && renderDecorativeElement()}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
