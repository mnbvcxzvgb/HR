import React from 'react';
import { Shield, Award, Clock, DollarSign, Briefcase, Users } from 'lucide-react';

const benefits = [
  {
    icon: <DollarSign className="h-8 w-8 text-blue-500" />,
    title: "שכר תחרותי",
    description: "אנו מציעים שכר גבוה מהממוצע בתעשייה, החל מ-63₪ לשעה עם בונוסים נוספים"
  },
  {
    icon: <Clock className="h-8 w-8 text-green-500" />,
    title: "שעות עבודה גמישות",
    description: "אפשרויות למשרות מלאות או חלקיות, עם יכולת להתאים את המשמרות לצרכיך"
  },
  {
    icon: <Briefcase className="h-8 w-8 text-purple-500" />,
    title: "הכשרה מקצועית",
    description: "תכניות הכשרה מקיפות שיעניקו לך את הכלים והמיומנויות הדרושים להצלחה"
  },
  {
    icon: <Award className="h-8 w-8 text-yellow-500" />,
    title: "אפשרויות קידום",
    description: "מסלולי קריירה ברורים עם הזדמנויות לקידום והתפתחות מקצועית"
  },
  {
    icon: <Shield className="h-8 w-8 text-red-500" />,
    title: "ביטחון תעסוקתי",
    description: "תעשייה יציבה עם ביקוש קבוע, המציעה ביטחון תעסוקתי ויציבות"
  },
  {
    icon: <Users className="h-8 w-8 text-indigo-500" />,
    title: "צוות תומך",
    description: "סביבת עבודה חיובית עם צוות מנהלים שתמיד זמין לתמיכה והדרכה"
  }
];

const CompanyBenefits: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">למה לעבוד איתנו?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            אנו מציעים לא רק משרה, אלא הזדמנות לפתח קריירה משמעותית עם יתרונות רבים
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="rounded-full w-16 h-16 flex items-center justify-center bg-gray-50 mb-5">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyBenefits; 