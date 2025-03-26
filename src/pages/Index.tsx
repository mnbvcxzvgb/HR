import React, { useState } from 'react';
import { Phone, Shield, Users, Award, Clock, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import WhatsAppChatModal from '@/components/WhatsAppChatModal';
import JobDetailsModal from '@/components/JobDetailsModal';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isJobDetailsOpen, setIsJobDetailsOpen] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState('');

  const handleShowJobDetails = (jobId: string) => {
    setSelectedJobId(jobId);
    setIsJobDetailsOpen(true);
  };

  return (
    <>
      <main className="overflow-hidden" dir="rtl">
        {/* Hero Section */}
        <HeroSection
          title="הצטרפו לצוות האבטחה המוביל"
          subtitle="משרות אבטחה איכותיות בירושלים עם שכר של 63 ש״ח לשעה"
          imagePosition="right"
        />

        {/* WhatsApp CTA Section */}
        <section className="py-20 bg-[#075E54] relative overflow-hidden" dir="rtl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#075E54]/80 to-[#075E54] opacity-90"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-bold text-white mb-8">
                צרו קשר עכשיו
              </h2>
              <p className="text-xl text-white/90 mb-12">
                המומחים שלנו מחכים לענות לכל שאלה!
              </p>
              <Button 
                asChild
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="bg-[#25D366] hover:bg-[#128C7E] transition-colors text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center justify-center gap-3 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-7 h-7 fill-current">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                  <span className="text-xl">שלח הודעה</span>
                </span>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-jerusalem" dir="rtl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <div className="inline-block bg-tactical px-6 py-2 rounded-full text-jerusalem-light text-sm font-semibold mb-4">יתרונות העבודה</div>
              <h2 className="text-4xl font-bold text-tactical mb-6">למה לעבוד איתנו?</h2>
              <p className="text-xl text-tactical-foreground max-w-3xl mx-auto">
                אנחנו מציעים הזדמנויות קריירה מעולות עם תנאים מצויינים ואפשרויות קידום
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="jerusalem-card">
                <div className="bg-tactical/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-tactical" />
                </div>
                <h3 className="text-xl font-bold text-tactical mb-3">שכר גבוה ומתגמל</h3>
                <p className="text-tactical-foreground">63 ש״ח לשעה + בונוסים ותנאים סוציאליים מלאים</p>
              </div>

              <div className="jerusalem-card">
                <div className="bg-tactical/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-tactical" />
                </div>
                <h3 className="text-xl font-bold text-tactical mb-3">הכשרה מקצועית</h3>
                <p className="text-tactical-foreground">הכשרה מקיפה על חשבון החברה ופיתוח מקצועי מתמשך</p>
              </div>

              <div className="jerusalem-card">
                <div className="bg-tactical/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-tactical" />
                </div>
                <h3 className="text-xl font-bold text-tactical mb-3">גמישות בשעות</h3>
                <p className="text-tactical-foreground">משמרות גמישות המתאימות לסטודנטים ולאורח חיים דינמי</p>
              </div>

              <div className="jerusalem-card">
                <div className="bg-tactical/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-tactical" />
                </div>
                <h3 className="text-xl font-bold text-tactical mb-3">צוות תומך</h3>
                <p className="text-tactical-foreground">סביבת עבודה מקצועית עם צוות תומך ומגובש</p>
              </div>
            </div>
          </div>
        </section>

        {/* JOB LISTINGS SECTION */}
        <section className="py-24 bg-gradient-to-tr from-gray-900 to-black relative overflow-hidden" dir="rtl">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-black/90 opacity-90"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <div className="inline-block bg-white/10 px-6 py-2 rounded-full text-white font-semibold mb-4">משרות פתוחות</div>
              <h2 className="text-5xl font-extrabold text-white mb-6">משרות מובחרות בירושלים</h2>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                משרות אבטחה מובילות בירושלים עם תנאים מעולים והזדמנויות קידום
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {/* Job Card 1 */}
              <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                  <div className="w-full h-full bg-gradient-to-br from-blue-800 to-blue-600 group-hover:scale-105 transition-transform duration-500"></div>
                  <div className="absolute bottom-4 right-4 z-20">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">משרה מלאה</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">מאבטח מוסדות חינוך</h3>
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>ירושלים - כל השכונות</span>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">שכר שעתי:</span>
                      <span className="text-white font-semibold">63₪ לשעה</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">משמרות:</span>
                      <span className="text-white font-semibold">גמישות</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">נסיון נדרש:</span>
                      <span className="text-white font-semibold">ללא</span>
                    </div>
                  </div>
                  <Button onClick={() => setIsModalOpen(true)} className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white hover:scale-105 transition-all duration-300 cursor-pointer">
                    <span className="w-full flex items-center justify-center gap-2">הגש הודעה</span>
                  </Button>
                </div>
              </div>

              {/* Job Card for Combat Security Position - Based on Image */}
              <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                  <div className="w-full h-full bg-gradient-to-br from-navy-800 to-navy-600 bg-gradient-to-br from-indigo-800 to-indigo-600 group-hover:scale-105 transition-transform duration-500"></div>
                  <div className="absolute bottom-4 right-4 z-20">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">יחידת אלון</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">לוחמים/ות לתפקידי אבטחה</h3>
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>רחבי הארץ</span>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">שכר שעתי:</span>
                      <span className="text-white font-semibold">55₪ לשעה</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">תנאים:</span>
                      <span className="text-white font-semibold">הטבות מיוחדות</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">דרישות:</span>
                      <span className="text-white font-semibold">יוצאי קרבי</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button onClick={() => handleShowJobDetails('alon-unit')} variant="outline" className="w-full bg-white/10 border-white/20 hover:bg-white/20 text-white transition-all duration-300">
                      <span className="w-full flex items-center justify-center gap-2">
                        <Info className="w-4 h-4" />
                        <span>פרטים נוספים</span>
                      </span>
                    </Button>
                    <Button onClick={() => setIsModalOpen(true)} className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white hover:scale-105 transition-all duration-300 cursor-pointer">
                      <span className="w-full flex items-center justify-center gap-2">הגש הודעה</span>
                    </Button>
                  </div>
                </div>
              </div>

              {/* NEW Job Card for Ministry of Housing */}
              <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                  <div className="w-full h-full bg-gradient-to-br from-amber-700 to-amber-500 group-hover:scale-105 transition-transform duration-500"></div>
                  <div className="absolute bottom-4 right-4 z-20">
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">משרד השיכון</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">לוחמים/ות ליחידה יוקרתית</h3>
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>מזרח ירושלים</span>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">שכר שעתי:</span>
                      <span className="text-white font-semibold">63₪ לשעה</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">עבודה:</span>
                      <span className="text-white font-semibold">עמדות / סיורי ג'יפ</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">דרישות:</span>
                      <span className="text-white font-semibold">רובאי 03 ומעלה</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button onClick={() => handleShowJobDetails('housing-unit')} variant="outline" className="w-full bg-white/10 border-white/20 hover:bg-white/20 text-white transition-all duration-300">
                      <span className="w-full flex items-center justify-center gap-2">
                        <Info className="w-4 h-4" />
                        <span>פרטים נוספים</span>
                      </span>
                    </Button>
                    <Button onClick={() => setIsModalOpen(true)} className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white hover:scale-105 transition-all duration-300 cursor-pointer">
                      <span className="w-full flex items-center justify-center gap-2">הגש הודעה</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button asChild variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/5 hover:border-white/30 px-8 py-6 hover:scale-105 transition-all duration-300">
                <a href="/careers" className="text-lg flex items-center gap-2">
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
        <section className="py-24 bg-tactical-foreground/5 relative overflow-hidden" dir="rtl">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-95"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <div className="inline-block bg-tactical px-6 py-2 rounded-full text-jerusalem-light text-sm font-semibold mb-4">ציוד מקצועי</div>
              <h2 className="text-4xl font-bold text-tactical mb-6">הציוד המקצועי שלנו</h2>
              <p className="text-xl text-tactical-foreground max-w-3xl mx-auto">
                אנו משתמשים בציוד מקצועי מהשורה הראשונה לאבטחה מיטבית
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="bg-jerusalem/80 p-6 rounded-lg shadow-lg">
                  <div className="aspect-square relative overflow-hidden rounded-lg border-2 border-tactical/30 mb-6">
                    <div className="w-full h-full bg-gradient-to-br from-tactical/20 to-tactical/5 flex items-center justify-center">
                      <Shield className="w-20 h-20 text-tactical/40" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-tactical mb-3">ציוד טקטי מתקדם</h3>
                  <p className="text-tactical-foreground mb-6">
                    ציוד מקצועי ומתקדם המאפשר לצוות שלנו לבצע את עבודתם באופן מיטבי, תוך שמירה על סטנדרטים גבוהים של בטיחות ואבטחה.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-tactical/10 text-tactical px-3 py-1 rounded-full text-sm">אמינות</span>
                    <span className="bg-tactical/10 text-tactical px-3 py-1 rounded-full text-sm">עמידות</span>
                    <span className="bg-tactical/10 text-tactical px-3 py-1 rounded-full text-sm">איכות גבוהה</span>
                    <span className="bg-tactical/10 text-tactical px-3 py-1 rounded-full text-sm">מקצועיות</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-tactical/10 w-12 h-12 rounded-lg shrink-0 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-tactical" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-tactical mb-2">ציוד מותאם אישית</h4>
                      <p className="text-tactical-foreground">כל מאבטח מקבל ציוד המותאם באופן אישי לצרכים הספציפיים של תפקידו</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="bg-tactical/10 w-12 h-12 rounded-lg shrink-0 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-tactical" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-tactical mb-2">הדרכה מקיפה</h4>
                      <p className="text-tactical-foreground">הדרכה מקיפה לשימוש נכון ויעיל בכל פריט ציוד</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="bg-tactical/10 w-12 h-12 rounded-lg shrink-0 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-tactical" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-tactical mb-2">תחזוקה שוטפת</h4>
                      <p className="text-tactical-foreground">תחזוקה שוטפת של כל הציוד להבטחת תפקוד מיטבי בכל עת</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 bg-tactical overflow-hidden" dir="rtl">
          <div className="absolute inset-0 bg-gradient-to-br from-tactical to-tactical/90 opacity-95"></div>
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-jerusalem to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-block bg-jerusalem px-6 py-2 rounded-full text-tactical text-sm font-semibold mb-4">צור קשר</div>
              <h2 className="text-4xl font-bold text-jerusalem-light mb-8">
                מוכנים להתחיל? צרו קשר עכשיו!
              </h2>
              <p className="text-xl text-jerusalem-light/90 mb-12">
                הצטרפו לצוות המוביל שלנו והתחילו קריירה משמעותית בתחום האבטחה
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => setIsModalOpen(true)} size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white transition-colors text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl cursor-pointer">
                  <span className="flex items-center justify-center gap-3">צור קשר</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppChatModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <JobDetailsModal 
        isOpen={isJobDetailsOpen} 
        onClose={() => setIsJobDetailsOpen(false)} 
        jobId={selectedJobId} 
      />
    </>
  );
};

export default Index;
