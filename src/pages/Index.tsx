
import React from 'react';
import { ArrowRight, Award, BarChart3, Users, Briefcase, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';

const Index = () => {
  return (
    <main className="overflow-hidden" dir="rtl">
      {/* Main Hero Section with New Image */}
      <HeroSection
        title="*חייל משוחרר?"
        subtitle="זה הזמן לחשוב על הכסף שלך!"
        imageSrc="/lovable-uploads/b0b157e7-5f0b-4eea-bd22-5c84e1bf4407.png"
        primaryButtonText="הגש מועמדות עכשיו"
        primaryButtonLink="/careers"
        secondaryButtonText="למידע נוסף"
        secondaryButtonLink="/about"
        imagePosition="right"
      />

      {/* Key Benefits Section */}
      <section className="section-container py-16 bg-gradient-to-b from-white to-gray-50" dir="rtl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-company-blue">לפרויקט האבטחה הממלכתי בעיר העתיקה דרושים מאבטחים</h2>
            <p className="text-xl text-company-darkgray font-medium mb-6">בואו להיות חלק מפרויקט מאתגר בסביבת עבודה צעירה</p>
            
            <ul className="space-y-6">
              <li className="flex items-start flex-row-reverse bg-white/70 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="bg-company-lightblue/10 p-2 rounded-full ml-3 mt-1">
                  <div className="text-company-lightblue">
                    <Award size={24} />
                  </div>
                </div>
                <div className="text-right">
                  <h3 className="font-bold text-xl mb-2 text-company-blue">שכר שעתי גבוה - 63 ש"ח (ברוטו)</h3>
                  <p className="text-gray-700">תגמול תחרותי שמעריך את הכישורים והניסיון שלך</p>
                </div>
              </li>
              <li className="flex items-start flex-row-reverse bg-white/70 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="bg-company-lightblue/10 p-2 rounded-full ml-3 mt-1">
                  <div className="text-company-lightblue">
                    <Users size={24} />
                  </div>
                </div>
                <div className="text-right">
                  <h3 className="font-bold text-xl mb-2 text-company-blue">מתאים לסטודנטים</h3>
                  <p className="text-gray-700">לוחות זמנים גמישים שעובדים עם המחויבויות האקדמיות שלך</p>
                </div>
              </li>
              <li className="flex items-start flex-row-reverse bg-white/70 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="bg-company-lightblue/10 p-2 rounded-full ml-3 mt-1">
                  <div className="text-company-lightblue">
                    <Briefcase size={24} />
                  </div>
                </div>
                <div className="text-right">
                  <h3 className="font-bold text-xl mb-2 text-company-blue">סבסוד מגורים לבאים מחוץ לעיר</h3>
                  <p className="text-gray-700">אנחנו מספקים סיוע למי שמגיע מרחוק להצטרף לצוות שלנו</p>
                </div>
              </li>
              <li className="flex items-start flex-row-reverse bg-white/70 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="bg-company-lightblue/10 p-2 rounded-full ml-3 mt-1">
                  <div className="text-company-lightblue">
                    <BarChart3 size={24} />
                  </div>
                </div>
                <div className="text-right">
                  <h3 className="font-bold text-xl mb-2 text-company-blue">תנאים סוציאלים מלאים מהיום הראשון</h3>
                  <p className="text-gray-700">אנו מעריכים את חברי הצוות שלנו מההתחלה עם הטבות מעולות</p>
                </div>
              </li>
            </ul>
            <div className="pt-6 flex gap-4 flex-wrap justify-end">
              <Button 
                asChild
                className="bg-company-lightblue hover:bg-company-blue text-white button-hover-effect text-lg"
                size="lg"
              >
                <Link to="/careers" dir="rtl">
                  <ArrowRight size={16} className="ml-2 rotate-180" /> הצטרף לצוות שלנו
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-company-lightblue text-company-blue hover:bg-company-lightblue hover:text-white button-hover-effect text-lg"
                size="lg"
              >
                <a href="tel:0534873215" className="flex items-center flex-row-reverse" dir="rtl">
                  לשיחה: 0534873215 <Phone size={16} className="ml-2" />
                </a>
              </Button>
            </div>
          </div>
          <div className="order-2 bg-white/80 p-8 rounded-2xl shadow-lg">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-company-blue mb-4">אם השליחות חלק ממכם אך הכסף שלכם לא פחות חשוב לכם מקומכם איתנו!</h3>
              <div className="border-t border-b border-gray-200 py-6">
                <ul className="text-lg space-y-4 text-right">
                  <li className="flex items-center justify-end">
                    <span className="font-medium">סביבת עבודה צעירה ודינמית</span>
                    <div className="w-2 h-2 bg-company-lightblue rounded-full ml-3"></div>
                  </li>
                  <li className="flex items-center justify-end">
                    <span className="font-medium">תנאים סוציאלים מלאים מהיום הראשון</span>
                    <div className="w-2 h-2 bg-company-lightblue rounded-full ml-3"></div>
                  </li>
                  <li className="flex items-center justify-end">
                    <span className="font-medium">הכשרה מקצועית על חשבון החברה</span>
                    <div className="w-2 h-2 bg-company-lightblue rounded-full ml-3"></div>
                  </li>
                  <li className="flex items-center justify-end">
                    <span className="font-medium">אפשרויות קידום מקצועיות</span>
                    <div className="w-2 h-2 bg-company-lightblue rounded-full ml-3"></div>
                  </li>
                </ul>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-company-blue hover:bg-company-lightblue text-white button-hover-effect text-lg w-full"
              >
                <a href="tel:0534873215" className="flex items-center justify-center gap-2" dir="rtl">
                  <Phone size={20} /> התקשר עכשיו: 0534873215
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section without image */}
      <section className="bg-company-blue text-white py-16" dir="rtl">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">לפרטים נוספים והגשת מועמדות חייגו עכשיו!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            הצטרפו לצוות שלנו היום והיו חלק מחברה שמעריכה את הכישרון שלכם ותומכת בצמיחה שלכם.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button 
              asChild
              size="lg" 
              className="bg-white text-company-blue hover:bg-company-lightblue hover:text-white button-hover-effect min-w-48 text-lg"
            >
              <a href="tel:0534873215" className="flex items-center justify-center gap-2" dir="rtl">
                <Phone size={20} /> 0534873215
              </a>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-company-blue button-hover-effect min-w-48 text-lg"
            >
              <Link to="/careers" className="flex items-center flex-row-reverse" dir="rtl">
                הגש מועמדות <ArrowRight size={16} className="ml-2 rotate-180" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
