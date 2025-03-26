import React from 'react';
import { X, Shield, Award, Clock, MapPin, Check, Users } from 'lucide-react';

interface JobDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobId: string;
}

const AlonUnitDetails = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-2 flex items-center">
          <Shield className="h-5 w-5 ml-2 text-blue-600" />
          מדוע כדאי לעבוד אצלנו?
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>עבודה בעלת חשיבות לאומית ותרומה משמעותית להגנה בפני איומים על נכסי משהב"ט.</li>
          <li>סיווג ביטחוני- עבודה בסביבה מסווגת ברמה גבוהה.</li>
          <li>עבודה בסביבה צעירה ודינאמית עם אופק התקדמות.</li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-2 flex items-center">
          <Award className="h-5 w-5 ml-2 text-amber-600" />
          תנאי עבודה:
        </h3>
        <ul className="space-y-2">
          {[
            'שכר שעתי כ-55₪',
            'החזרי נסיעות חופשי חודשי',
            'במשמרת בוקר זכאות לארוחות אחריים',
            'במשמרות ערב, חגים וסופ"ש יקבל העובד תוספת כלכלה של ארבעה שקלים לשעת עבודה',
            'הפרויקט מספק לכל עובד ביגוד וציוד בשווי מוערך של 9,000 ₪',
            'אפשרות לקידום דריסת רגל במשרד הביטחון',
            'תנאים סוציאליים מעולים! • קרן פנסיה • קרן השתלמות • דמי הבראה החל מהחודש הראשון לעבודה תשלום חודשי',
            'לטובת רווחת העובדים מתקיימים מספר אירועים ייחודיים בכל שנה, ערבי צוות וגיבושים'
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 ml-2 text-amber-500 shrink-0 mt-0.5" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-2 flex items-center">
          <Clock className="h-5 w-5 ml-2 text-red-600" />
          דרישות התפקיד:
        </h3>
        <ul className="space-y-2">
          {[
            'שירות קרבי מלא + תעודת לוחם',
            'השכלה תיכונית מלאה (12 שנות לימוד)',
            'בעל/ת בריאות תקינה, וכושר המתאים לאופי העיסוק הנדרש'
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 ml-2 text-red-500 shrink-0 mt-0.5" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-2 flex items-center">
          <MapPin className="h-5 w-5 ml-2 text-purple-600" />
          מיקום
        </h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <Check className="h-5 w-5 ml-2 text-purple-500 shrink-0 mt-0.5" />
            <span className="text-gray-700">רחבי הארץ</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const MountOlivesDetails = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-2 flex items-center">
          <Shield className="h-5 w-5 ml-2 text-blue-600" />
          על התפקיד
        </h3>
        <ul className="space-y-2">
          {[
            'דרושים לוחמים לרכס הר הזיתים בירושלים',
            'עבודה ביטחונית משמעותית'
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 ml-2 text-blue-500 shrink-0 mt-0.5" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-2 flex items-center">
          <Award className="h-5 w-5 ml-2 text-amber-600" />
          תנאים והטבות:
        </h3>
        <ul className="space-y-2">
          {[
            'שכר 63 ש"ח לשעה',
            'עבודה במשמרות 24/7',
            'מגורים לבאים מחוץ לעיר',
            'עבודה על אזרחי',
            'ליווי בג\'יפים'
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 ml-2 text-amber-500 shrink-0 mt-0.5" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-2 flex items-center">
          <Clock className="h-5 w-5 ml-2 text-red-600" />
          דרישות התפקיד:
        </h3>
        <ul className="space-y-2">
          {[
            'רובאי 03 + תעודת לוחם',
            'השכלה תיכונית מלאה',
            'בריאות תקינה וכושר גופני'
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 ml-2 text-red-500 shrink-0 mt-0.5" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-2 flex items-center">
          <MapPin className="h-5 w-5 ml-2 text-purple-600" />
          מיקום
        </h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <Check className="h-5 w-5 ml-2 text-purple-500 shrink-0 mt-0.5" />
            <span className="text-gray-700">מזרח ירושלים - הר הזיתים</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const OldCityDetails = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-2 flex items-center">
          <Shield className="h-5 w-5 ml-2 text-blue-600" />
          על התפקיד
        </h3>
        <p className="text-gray-700 mb-4">
          פרויקט האבטחה בעיר העתיקה מגייס עכשיו מאבטחים!
          <br />
          בואו להיות חלק בפרויקט מורכב ומאתגר
        </p>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-2 flex items-center">
          <Award className="h-5 w-5 ml-2 text-amber-600" />
          תנאים והטבות:
        </h3>
        <ul className="space-y-2">
          {[
            'שכר שעתי גבוה - 63 ש"ח',
            'מתאים לסטודנטים',
            'סבסוד מגורים לבאים מחוץ לעיר',
            'סביבת עבודה צעירה ודינאמית',
            'תנאים סוציאלים מלאים מהיום הראשון',
            'אפשרויות פיתוח וקידום'
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 ml-2 text-amber-500 shrink-0 mt-0.5" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-2 flex items-center">
          <Clock className="h-5 w-5 ml-2 text-red-600" />
          דרישות התפקיד:
        </h3>
        <ul className="space-y-2">
          {[
            'יוצאי יחידות קרביות',
            'כושר גופני',
            'רצינות ואחריות גבוהה',
            'יכולת תפקוד תחת לחץ'
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 ml-2 text-red-500 shrink-0 mt-0.5" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
        <p className="text-amber-800 font-medium text-center">*למגיעים עם קורס מתקדם א' תוקף מענק 15,000</p>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-2 flex items-center">
          <MapPin className="h-5 w-5 ml-2 text-purple-600" />
          מיקום
        </h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <Check className="h-5 w-5 ml-2 text-purple-500 shrink-0 mt-0.5" />
            <span className="text-gray-700">ירושלים - העיר העתיקה</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const JobDetailsModal: React.FC<JobDetailsModalProps> = ({ isOpen, onClose, jobId }) => {
  if (!isOpen) return null;
  
  // Map job IDs to titles for the modal header
  const jobTitles: Record<string, string> = {
    'alon-unit': 'לוחמים/ות לתפקידי אבטחה משמעותיים - יחידת אלון',
    'mount-olives': 'דרושים לוחמים לרכס הר הזיתים',
    'old-city': 'פרויקט האבטחה בעיר העתיקה מגייס',
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" dir="rtl">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6 sticky top-0 bg-white z-10 py-2 border-b">
          <h2 className="text-2xl font-bold text-gray-800">{jobTitles[jobId] || 'פרטי המשרה'}</h2>
          <button 
            onClick={onClose} 
            className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {jobId === 'alon-unit' ? (
          <AlonUnitDetails />
        ) : jobId === 'mount-olives' ? (
          <MountOlivesDetails />
        ) : jobId === 'old-city' ? (
          <OldCityDetails />
        ) : (
          <div className="text-center py-8 text-gray-500">
            <p>אין פרטים נוספים זמינים למשרה זו</p>
          </div>
        )}
        
        <div className="mt-8 flex gap-4 justify-center border-t pt-6">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded transition-colors"
          >
            סגירה
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-4 w-4 fill-current">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6z"/>
            </svg>
            הגש מועמדות
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsModal; 