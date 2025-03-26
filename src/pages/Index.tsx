import React, { useState } from 'react';
import { Phone, Shield, Users, Award, Clock, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import WhatsAppChatModal from '@/components/WhatsAppChatModal';
import JobDetailsModal from '@/components/JobDetailsModal';
import CompanyBenefits from '@/components/CompanyBenefits';
import JobCard from '@/components/JobCard';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isJobDetailsOpen, setIsJobDetailsOpen] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState('');

  const handleShowJobDetails = (jobId: string) => {
    setSelectedJobId(jobId);
    setIsJobDetailsOpen(true);
  };

  const handleApply = () => {
    setIsModalOpen(true);
  };

  const featuredJobs = [
    {
      id: 'alon-unit',
      title: 'לוחמים/ות לתפקידי אבטחה משמעותיים',
      location: 'jerusalem',
      jobType: 'full-time',
      salary: '55 ₪ לשעה',
      badge: {
        text: 'יחידת אלון',
        color: 'blue-500'
      }
    },
    {
      id: 'mount-olives',
      title: 'דרושים לוחמים לרכס הר הזיתים',
      location: 'jerusalem',
      jobType: 'full-time',
      salary: '63 ₪ לשעה',
      badge: {
        text: 'רובאי 03',
        color: 'amber-500'
      }
    },
    {
      id: 'old-city',
      title: 'פרויקט האבטחה בעיר העתיקה',
      location: 'jerusalem',
      jobType: 'full-time',
      salary: '63 ₪ לשעה',
      badge: {
        text: 'מגייס',
        color: 'green-500'
      }
    }
  ];

  return (
    <>
      <main className="overflow-hidden" dir="rtl">
        {/* Hero Section */}
        <HeroSection
          title="דרושים לוחמים לרכס הר הזיתים בירושלים"
          subtitle="מאבטחים ליחידות מובחרות • תנאים מעולים • שכר של עד 63 ש״ח לשעה"
          imagePosition="right"
          onWhatsAppClick={() => setIsModalOpen(true)}
        />

        {/* WhatsApp CTA Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">יש לך שאלות? נשמח לעזור!</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              יצירת קשר מהירה במיוחד באמצעות וואטסאפ - נחזור אליך תוך 15 דקות בלבד
            </p>
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-current">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6z"/>
              </svg>
              <span>פתיחת צ׳אט WhatsApp</span>
            </Button>
          </div>
        </section>

        {/* Benefits Section */}
        <CompanyBenefits />

        {/* Job Listings Section */}
        <section id="positions" className="py-16 sm:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">משרות מובילות</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                בחר/י מבין משרות האבטחה הפתוחות שלנו והצטרף/י לצוות המקצועי שלנו
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredJobs.map(job => (
                <JobCard
                  key={job.id}
                  id={job.id}
                  title={job.title}
                  location={job.location}
                  jobType={job.jobType}
                  salary={job.salary}
                  badgeText={job.badge.text}
                  badgeColor={job.badge.color}
                  onDetailsClick={handleShowJobDetails}
                  onApplyClick={handleApply}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all">
                <a href="/careers" className="flex items-center gap-2">
                  <span>צפה בכל המשרות הפתוחות</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Product Showcase Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">למה דווקא אנחנו?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                אנו מספקים את התנאים הטובים ביותר לעובדים שלנו, ומאמינים בפיתוח ארוך טווח של כל עובד
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="object-cover"
                ></iframe>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="rounded-full p-2 bg-blue-100 text-blue-600">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">ביטחון תעסוקתי</h3>
                    <p className="text-gray-600">תעשיית האבטחה מציעה יציבות תעסוקתית ללא תלות במצב הכלכלי במשק</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="rounded-full p-2 bg-green-100 text-green-600">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">סביבת עבודה חברתית</h3>
                    <p className="text-gray-600">תעבדו בצוות מגובש ותיצרו קשרים חברתיים איכותיים</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="rounded-full p-2 bg-amber-100 text-amber-600">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">קידום מקצועי</h3>
                    <p className="text-gray-600">מסלולי קידום ברורים עם אפשרויות להתפתחות והתקדמות בתפקידים בכירים</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="rounded-full p-2 bg-purple-100 text-purple-600">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">גמישות בשעות</h3>
                    <p className="text-gray-600">אפשרות לבחירת משמרות המתאימות לאורח החיים שלך</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Final CTA Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">מוכנים להתחיל בקריירה חדשה?</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
              הגישו מועמדות עכשיו ותתחילו לעבוד תוך ימים ספורים!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <a href="/careers" className="flex items-center gap-2">
                  <span>צפה במשרות</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </Button>
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-current">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6z"/>
                </svg>
                <span>צור קשר בוואטסאפ</span>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Modals */}
      <WhatsAppChatModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <JobDetailsModal isOpen={isJobDetailsOpen} onClose={() => setIsJobDetailsOpen(false)} jobId={selectedJobId} />
    </>
  );
};

export default Index;
