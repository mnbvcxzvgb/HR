
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageSrc?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  imagePosition?: 'left' | 'right' | 'background' | 'none';
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  imageSrc,
  primaryButtonText,
  primaryButtonLink = '/',
  secondaryButtonText,
  secondaryButtonLink = '/',
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

  const renderContent = () => (
    <div className={cn(
      "z-10 space-y-6 max-w-xl text-right", // Setting text-right for RTL
      imagePosition === 'right' ? "text-right" : imagePosition === 'left' ? "text-right lg:text-left" : "text-center mx-auto"
    )}>
      <h1 
        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-on-load opacity-0 translate-y-4 transition-all duration-700"
        dir="rtl" // Setting RTL direction for Hebrew
      >
        {title}
      </h1>
      <p 
        className="text-lg md:text-xl text-gray-600 animate-on-load opacity-0 translate-y-4 transition-all duration-700"
        dir="rtl" // Setting RTL direction for Hebrew
      >
        {subtitle}
      </p>
      <div 
        className={cn(
          "flex items-center gap-4 pt-4 animate-on-load opacity-0 translate-y-4 transition-all duration-700 flex-row-reverse", // Reversed flex for RTL
          imagePosition === 'background' || imagePosition === 'none' ? "justify-center" : ""
        )}
      >
        {primaryButtonText && (
          <Button 
            asChild
            size="lg" 
            className="bg-company-lightblue hover:bg-company-blue text-white button-hover-effect"
          >
            <Link to={primaryButtonLink} dir="rtl">
              <ArrowRight size={16} className="mr-2 rotate-180" /> {primaryButtonText}
            </Link>
          </Button>
        )}
        {secondaryButtonText && (
          <Button 
            asChild
            variant="outline" 
            size="lg" 
            className="button-hover-effect"
          >
            <Link to={secondaryButtonLink} dir="rtl">
              {secondaryButtonText}
            </Link>
          </Button>
        )}
      </div>
    </div>
  );

  const renderImage = () => (
    imageSrc && (
      <div 
        className={cn(
          "relative animate-fade-in",
          imagePosition === 'background' ? "absolute inset-0 z-0" : "z-10 flex-1"
        )}
      >
        <img 
          src={imageSrc} 
          alt="Hero" 
          className={cn(
            "object-contain rounded-2xl animate-image-glow subtle-glow",
            imagePosition === 'background' 
              ? "w-full h-full opacity-20" 
              : "w-full h-full lg:max-h-[600px] md:max-w-full"
          )}  
        />
      </div>
    )
  );

  return (
    <section 
      className={cn(
        "relative overflow-hidden pt-32 pb-16 md:py-32 rtl", // Added RTL class
        className
      )}
      dir="rtl" // Setting RTL direction for the whole section
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {imagePosition === 'background' && renderImage()}
        
        <div 
          className={cn(
            "relative flex flex-col gap-12",
            imagePosition === 'right' ? "lg:flex-row-reverse items-center" : // Reversed for RTL
            imagePosition === 'left' ? "lg:flex-row items-center" : // Reversed for RTL
            "items-center"
          )}
        >
          {imagePosition === 'left' && renderImage()}
          {renderContent()}
          {imagePosition === 'right' && renderImage()}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
