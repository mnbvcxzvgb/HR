
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
}

export const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  icon, 
  className,
  delay = 0 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={cardRef} 
      className={cn(
        "glass-card p-6 rounded-xl transition-all duration-700 opacity-0 translate-y-8",
        className
      )}
    >
      {icon && <div className="text-company-lightblue mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2 text-company-blue">{title}</h3>
      <p className="text-company-darkgray">{description}</p>
    </div>
  );
};

interface CardSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

const CardSection: React.FC<CardSectionProps> = ({ 
  title, 
  subtitle, 
  children, 
  className,
  centered = false
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const headings = entry.target.querySelectorAll('.animate-on-scroll');
            headings.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('opacity-100', 'translate-y-0');
              }, 300 + index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section className={cn("section-container", className)} ref={sectionRef}>
      <div className={cn("mb-12", centered && "text-center")}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll opacity-0 translate-y-4 transition-all duration-700">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-gray-600 max-w-3xl animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 mx-auto">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </section>
  );
};

export default CardSection;
