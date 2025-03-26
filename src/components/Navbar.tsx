import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header role="banner" className="relative z-10">
      <nav 
        aria-label="תפריט ראשי"
        className="bg-gradient-to-r from-blue-900/90 to-blue-800/90 backdrop-blur-sm border-b border-white/10 shadow-lg"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link 
                to="/" 
                className="flex-shrink-0 flex items-center gap-2"
                aria-label="דף הבית"
              >
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-xl">מגן</span>
                </div>
                <span className="text-white font-bold text-xl hidden sm:block">Magen Staffing</span>
              </Link>
              
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 rtl:space-x-reverse">
                  <Link
                    to="/"
                    className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-700 hover:text-white transition-colors"
                    aria-current={window.location.pathname === '/' ? 'page' : undefined}
                  >
                    בית
                  </Link>
                  <Link
                    to="/careers"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-blue-700 hover:text-white transition-colors"
                    aria-current={window.location.pathname === '/careers' ? 'page' : undefined}
                  >
                    קריירה
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6 gap-3">
                <a
                  href="https://wa.me/9720534873215"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-1 rounded-md bg-green-600 px-4 py-2 text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all hover:scale-105"
                  aria-label="צור קשר בווטסאפ"
                >
                  <svg 
                    className="h-5 w-5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  </svg>
                  <span>צור קשר</span>
                </a>
                <a
                  href="tel:+9720534873215"
                  className="inline-flex items-center gap-1 rounded-md border border-blue-400 px-4 py-2 text-blue-100 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all hover:border-transparent"
                  aria-label="התקשר אלינו"
                >
                  <svg 
                    className="h-5 w-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>053-487-3215</span>
                </a>
              </div>
            </div>
            
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">{isOpen ? 'סגור תפריט' : 'פתח תפריט'}</span>
                <svg
                  className={cn("h-6 w-6", isOpen ? "hidden" : "block")}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={cn("h-6 w-6", isOpen ? "block" : "hidden")}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={cn(isOpen ? "block" : "hidden", "md:hidden")}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700 hover:text-white"
              aria-current={window.location.pathname === '/' ? 'page' : undefined}
              onClick={() => setIsOpen(false)}
            >
              בית
            </Link>
            <Link
              to="/careers"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-blue-700 hover:text-white"
              aria-current={window.location.pathname === '/careers' ? 'page' : undefined}
              onClick={() => setIsOpen(false)}
            >
              קריירה
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex flex-col px-5 gap-3">
              <a
                href="https://wa.me/9720534873215"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-green-600 text-white shadow-sm hover:bg-green-700"
                aria-label="צור קשר בווטסאפ"
                onClick={() => setIsOpen(false)}
              >
                <svg 
                  className="h-5 w-5" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                <span>צור קשר בווטסאפ</span>
              </a>
              <a
                href="tel:+9720534873215"
                className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-400 text-gray-300 hover:bg-blue-700 hover:text-white"
                aria-label="התקשר אלינו"
                onClick={() => setIsOpen(false)}
              >
                <svg 
                  className="h-5 w-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>053-487-3215</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
