import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className }) => {
  return (
    <nav aria-label="breadcrumb" className={cn('flex', className)}>
      <ol className="flex flex-wrap items-center space-x-2 space-x-reverse" dir="rtl">
        <li className="flex items-center">
          <Link 
            to="/"
            className="text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
          >
            דף הבית
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronLeft className="mx-2 h-4 w-4 text-gray-400" />
            {item.href ? (
              <Link 
                to={item.href}
                className="text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-sm font-medium text-gray-900">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs; 