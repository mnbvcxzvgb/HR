import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { ArrowRight, Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 - דף לא נמצא | יחידת אלון</title>
        <meta name="description" content="הדף שביקשת לא נמצא. אנא חזור לדף הבית או נסה לחפש במקום אחר." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4 text-center" dir="rtl">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="mb-6">
              <div className="w-24 h-24 bg-red-100 rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="text-6xl font-bold text-red-500">404</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">הדף לא נמצא</h1>
              <p className="text-gray-600 mb-6">
                הדף שניסית לגשת אליו לא קיים או שהועבר למיקום אחר.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/" className="flex items-center justify-center gap-2">
                    <Home className="h-4 w-4" />
                    חזרה לדף הבית
                  </Link>
                </Button>
                
                <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Link to="/careers" className="flex items-center justify-center gap-2">
                    צפה במשרות זמינות
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-500">
              אם אתה חושב שזו שגיאה, אנא{' '}
              <a
                href="https://wa.me/9720534873215"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                צור איתנו קשר
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
