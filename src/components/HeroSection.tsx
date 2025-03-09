
import React, { useEffect } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
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
      "z-10 space-y-6 max-w-xl text-right", 
      imagePosition === 'right' ? "text-right" : imagePosition === 'left' ? "text-right lg:text-left" : "text-center mx-auto"
    )}>
      <h1 
        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-on-load opacity-0 translate-y-4 transition-all duration-700 text-white drop-shadow-md"
        dir="rtl"
      >
        {title}
      </h1>
      <p 
        className="text-xl md:text-2xl text-white animate-on-load opacity-0 translate-y-4 transition-all duration-700 font-medium drop-shadow-md"
        dir="rtl"
      >
        {subtitle}
      </p>
      <div 
        className={cn(
          "flex items-center gap-4 pt-4 animate-on-load opacity-0 translate-y-4 transition-all duration-700 flex-row-reverse",
          imagePosition === 'background' || imagePosition === 'none' ? "justify-center" : ""
        )}
      >
        {primaryButtonText && (
          <Button 
            asChild
            size="lg" 
            className="bg-company-lightblue hover:bg-company-blue text-white button-hover-effect text-lg"
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
            className="bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-company-blue button-hover-effect text-lg"
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
            "object-contain w-full h-full rounded-lg",
            imagePosition === 'background' 
              ? "w-full h-full" 
              : "w-full h-auto max-h-[80vh]"
          )}  
        />
        <div className={cn(
          imagePosition !== 'background' && "absolute inset-0 bg-gradient-to-r from-company-blue/70 to-transparent z-[-1]",
          imagePosition === 'background' && "absolute inset-0 bg-company-blue/50 z-[-1]"
        )}></div>
      </div>
    )
  );

  return (
    <section 
      className={cn(
        "relative overflow-hidden pt-28 pb-16 md:py-32 rtl bg-company-blue/5",
        className
      )}
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {imagePosition === 'background' && renderImage()}
        
        <div 
          className={cn(
            "relative flex flex-col gap-12",
            imagePosition === 'right' ? "lg:flex-row-reverse items-center" :
            imagePosition === 'left' ? "lg:flex-row items-center" :
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
