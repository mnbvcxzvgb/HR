import React from 'react';
import { X } from 'lucide-react';

interface JobDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobId: string;
}

const AlonUnitDetails = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-2">מדוע כדאי לעבוד אצלנו?</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>עבודה בעלת חשיבות לאומית ותרומה משמעותית להגנה בפני איומים על נכסי השב"ט.</li>
          <li>סיווג ביטחוני- עבודה בסביבה מסווגת ברמה גבוהה.</li>
          <li>עבודה בסביבה צעירה ודינאמית עם אופק התקדמות.</li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-2">תנאי עבודה:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>שכר שעתי כ 55₪</li>
          <li>החזרי נסיעות חופשי חודשי</li>
          <li>במשמרת בוקר זכאות לארוחת צהריים.</li>
          <li>במשמרות ערב, חגים וסופ"ש יקבל העובד תוספת כלכלה של ארבעה שקלים לשעת עבודה.</li>
          <li>הפרויקט מספק לכל עובד ביגוד וציוד בשווי מוערך של 9,000 ₪.</li>
          <li>אפשרות לקיום דריסה רגל במשרד הביטחון.</li>
          <li>תנאים סוציאליים מעולים! • קרן פנסיה • קרן השתלמות • דמי הבראה החל מהחודש הראשון לעבודה תשלום חודשי.</li>
          <li>לטובת רווחת העובדים מתקיימים מספר אירועים ייחודיים בכל שנה, ערבי צוות וגיבושים.</li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-2">דרישות התפקיד:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>שירות קרבי מלא + תעודת לוחם</li>
          <li>השכלה תיכונית מלאה (12 שנות לימוד).</li>
          <li>בעל/ת בריאות תקינה, וכושר המתאים לאופי העיסוק הנדרש.</li>
          <li>המשרה מותנית במעבר קורס אחיד מקוצר</li>
        </ul>
      </div>
    </div>
  );
};

const HousingUnitDetails = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-2">על התפקיד</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>עבודה ביחידה היוקרתית של משרד השיכון במזרח ירושלים</li>
          <li>עבודה דינמית במשמרות ובאווירה צעירה</li>
          <li>עבודה בעמדות או בסיורים על ג'יפים</li>
          <li>התנאים הטובים ביותר באזור ירושלים</li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-2">תנאים והטבות:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>63 ש"ח יסוד לשעה!</li>
          <li>2148 שקל לשנה לטובת ביגוד!</li>
          <li>הסעות בשבת הלוך וחזור מהבית!</li>
          <li>למביני עניין, קרן השתלמות ופנסיה החל מהיום הר-א-ש-ו-ן</li>
          <li>העבודה במשמרות - מינימום 5 משמרות בשבוע, כולל סופ"שים</li>
          <li>אפשרות לשעות נוספות</li>
          <li>מגורי חברה לבאים מחוץ לעיר</li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-2">דרישות התפקיד:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>שירות צבאי מלא</li>
          <li>רובאי 03 ומעלה + תעודת לוחם</li>
          <li>כושר גופני תקין</li>
          <li>מעבר קורס 15 ימים (מתקדם א')</li>
          <li>העבודה במשמרות - מינימום 5 משמרות בשבוע, כולל סופ"שים</li>
        </ul>
      </div>
      
      <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
        <p className="text-gray-700 text-center font-medium">משרה זו פונה לנשים וגברים כאחד</p>
      </div>
    </div>
  );
};

const JobDetailsModal: React.FC<JobDetailsModalProps> = ({ isOpen, onClose, jobId }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" dir="rtl">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6 sticky top-0 bg-white z-10 py-2">
          <h2 className="text-2xl font-bold text-gray-800">פרטי המשרה</h2>
          <button 
            onClick={onClose} 
            className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {jobId === 'alon-unit' ? (
          <AlonUnitDetails />
        ) : jobId === 'housing-unit' ? (
          <HousingUnitDetails />
        ) : (
          <div className="text-center py-8 text-gray-500">
            <p>אין פרטים נוספים זמינים למשרה זו</p>
          </div>
        )}
        
        <div className="mt-8 flex justify-end gap-4">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded transition-colors"
          >
            סגירה
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsModal; 