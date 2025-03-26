import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer role="contentinfo" className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-900 font-bold text-sm">HR</span>
              </div>
              <h2 className="text-xl font-bold">אמישב HR</h2>
            </div>
            <p className="text-gray-400 max-w-xs">
              אנו מסייעים לאנשים למצוא את המשרה המושלמת עבורם ולחברות למצוא את העובדים הטובים ביותר.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="פייסבוק"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="טוויטר"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="לינקדאין"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">קישורים מהירים</h3>
            <nav aria-label="קישורים בפוטר">
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">דף הבית</Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-white transition-colors">משרות פתוחות</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">אודות</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">צור קשר</Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-white transition-colors">מדיניות פרטיות</Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">צור קשר</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-gray-400 mt-0.5 ml-3 rtl:mr-3 rtl:ml-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>ירושלים, ישראל</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-gray-400 mt-0.5 ml-3 rtl:mr-3 rtl:ml-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@amishavcorp.com" className="hover:text-white transition-colors">info@amishavcorp.com</a>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-gray-400 mt-0.5 ml-3 rtl:mr-3 rtl:ml-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+9720534873215" className="hover:text-white transition-colors">053-487-3215</a>
              </li>
              <li className="mt-6">
                <a
                  href="https://wa.me/9720534873215"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors"
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
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} אמישב HR. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
