import React from 'react';

interface WhatsAppChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WhatsAppChatModal: React.FC<WhatsAppChatModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">צ'אט ב-WhatsApp</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900 text-3xl">&times;</button>
        </div>
        <p className="text-gray-700 mb-4">
          אנא אשרו שאתם רוצים לשלוח הודעה ל-0534873215 באמצעות WhatsApp.
        </p>
        <div className="flex justify-end">
          <button onClick={onClose} className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2">ביטול</button>
          <a href="https://wa.me/9720534873215" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 rounded">
            שלח הודעה
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppChatModal; 