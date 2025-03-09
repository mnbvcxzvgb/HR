
import React from 'react';
import { ArrowRight, Award, BarChart3, Users, Briefcase, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';

const Index = () => {
  return (
    <main className="overflow-hidden" dir="rtl">
      {/* Main Hero Section with Recruitment Image */}
      <HeroSection
        title="מחפשים עבודה שמעריכה את הפוטנציאל שלכם?"
        subtitle="הגיע הזמן להתמקד בעתיד הפיננסי שלכם על ידי הצטרפות לצוות האבטחה הממשלתי שלנו בעיר המודרנית."
        imageSrc="/lovable-uploads/209496a9-2428-4907-a4a3-e4798c5fa59b.png"
        primaryButtonText="הגש מועמדות עכשיו"
        primaryButtonLink="/careers"
        secondaryButtonText="למידע נוסף"
        secondaryButtonLink="/about"
        imagePosition="right"
      />

      {/* Key Benefits Section */}
      <section className="section-container py-24" dir="rtl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">למה להצטרף לצוות שלנו?</h2>
            <ul className="space-y-4">
              <li className="flex items-start flex-row-reverse">
                <div className="bg-company-lightblue/10 p-2 rounded-full ml-3 mt-1">
                  <div className="text-company-lightblue">
                    <Award size={20} />
                  </div>
                </div>
                <div className="text-right">
                  <h3 className="font-semibold text-lg mb-1">שכר שנתי גבוה - 63 ש"ח לשעה (ברוטו)</h3>
                  <p className="text-gray-600">תגמול תחרותי שמעריך את הכישורים והניסיון שלך</p>
                </div>
              </li>
              <li className="flex items-start flex-row-reverse">
                <div className="bg-company-lightblue/10 p-2 rounded-full ml-3 mt-1">
                  <div className="text-company-lightblue">
                    <Users size={20} />
                  </div>
                </div>
                <div className="text-right">
                  <h3 className="font-semibold text-lg mb-1">מתאים לסטודנטים</h3>
                  <p className="text-gray-600">לוחות זמנים גמישים שעובדים עם המחויבויות האקדמיות שלך</p>
                </div>
              </li>
              <li className="flex items-start flex-row-reverse">
                <div className="bg-company-lightblue/10 p-2 rounded-full ml-3 mt-1">
                  <div className="text-company-lightblue">
                    <Briefcase size={20} />
                  </div>
                </div>
                <div className="text-right">
                  <h3 className="font-semibold text-lg mb-1">סביבת עבודה צעירה ודינמית</h3>
                  <p className="text-gray-600">הצטרף לצוות של אנשי מקצוע מוטיבציים באווירה חיובית</p>
                </div>
              </li>
              <li className="flex items-start flex-row-reverse">
                <div className="bg-company-lightblue/10 p-2 rounded-full ml-3 mt-1">
                  <div className="text-company-lightblue">
                    <BarChart3 size={20} />
                  </div>
                </div>
                <div className="text-right">
                  <h3 className="font-semibold text-lg mb-1">תנאים מצוינים מהיום הראשון</h3>
                  <p className="text-gray-600">אנו מעריכים את חברי הצוות שלנו מההתחלה עם הטבות מעולות</p>
                </div>
              </li>
            </ul>
            <div className="pt-4">
              <Button 
                asChild
                className="bg-company-lightblue hover:bg-company-blue text-white button-hover-effect"
              >
                <Link to="/careers" dir="rtl">
                  <ArrowRight size={16} className="ml-2 rotate-180" /> הצטרף לצוות שלנו
                </Link>
              </Button>
            </div>
          </div>
          <div className="order-2">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
              alt="פגישת צוות" 
              className="rounded-2xl shadow-xl animate-image-glow subtle-glow"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-company-blue text-white py-20" dir="rtl">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">מוכנים להתחיל את הקריירה שלכם איתנו?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            הצטרפו לצוות שלנו היום והיו חלק מחברה שמעריכה את הכישרון שלכם ותומכת בצמיחה שלכם.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button 
              asChild
              size="lg" 
              className="bg-white text-company-blue hover:bg-company-lightblue hover:text-white button-hover-effect"
            >
              <Link to="/careers" dir="rtl">
                <ArrowRight size={16} className="ml-2 rotate-180" /> צפה במשרות פתוחות
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-company-blue button-hover-effect"
            >
              <Link to="/contact" className="flex items-center flex-row-reverse" dir="rtl">
                צור קשר <Phone size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
