import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, Loader2 } from 'lucide-react';

interface WhatsAppChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WhatsAppChatModal: React.FC<WhatsAppChatModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('משרת אבטחה - פנייה דרך האתר');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const phoneNumber = '0534873215'; // Recruiter's phone number

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      // Format the message for WhatsApp
      const encodedMessage = encodeURIComponent(
        `שם: ${name}\nטלפון: ${phone}\nהודעה: ${message}`
      );
      
      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${phoneNumber.replace(/^0/, '972')}?text=${encodedMessage}`;
      
      // Open WhatsApp in a new window/tab
      window.open(whatsappUrl, '_blank');
      
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after a delay
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        // Reset form fields
        setName('');
        setPhone('');
        setMessage('משרת אבטחה - פנייה דרך האתר');
      }, 2000);
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">צור קשר באמצעות וואטסאפ</DialogTitle>
          <DialogDescription className="text-center">
            מלא את הפרטים שלך ונחזור אליך בהקדם
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="py-6 flex flex-col items-center text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">ההודעה נשלחה בהצלחה!</h3>
            <p className="text-gray-600">
              וואטסאפ נפתח עם ההודעה שלך. אנו נחזור אליך בהקדם האפשרי.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-right block mb-1">שם מלא</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="הכנס את שמך המלא"
                required
                className="text-right"
              />
            </div>
            
            <div>
              <Label htmlFor="phone" className="text-right block mb-1">מספר טלפון</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="הכנס את מספר הטלפון שלך"
                required
                pattern="[0-9]{10}"
                className="text-right"
              />
              <p className="text-xs text-gray-500 mt-1">יש להזין 10 ספרות בלבד</p>
            </div>
            
            <div>
              <Label htmlFor="message" className="text-right block mb-1">הודעה</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="text-right"
              />
            </div>
            
            <DialogFooter className="sm:justify-center gap-2 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isSubmitting}
              >
                ביטול
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    שולח...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 fill-current">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6z"/>
                    </svg>
                    שלח הודעה
                  </span>
                )}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppChatModal; 