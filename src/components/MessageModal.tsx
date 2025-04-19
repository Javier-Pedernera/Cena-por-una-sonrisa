import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';


interface MessageModalProps {
  show: boolean;
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

const MessageModal: React.FC<MessageModalProps> = ({ show, type, message, onClose }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ y: -30, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -30, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={`bg-white text-center p-6 rounded-2xl shadow-2xl w-11/12 sm:w-96 relative border-l-4 `}
          >
            <div className="flex flex-col items-center justify-center text-center">
              {type === 'success' ? (
                <AiOutlineCheckCircle size={40} className="text-green-700 mb-2" />
              ) : (
                <AiOutlineCloseCircle size={40} className="text-red-700 mb-2" />
              )}
              <h2 className={`text-lg font-semibold mb-2 ${type === 'success' ? 'text-green-700' : 'text-red-700'}`}>
                {/* {type === 'success' ? 'Éxito' : 'Error'} */}
              </h2>
              <p className="text-gray-700">{message}</p>
              <button
                onClick={onClose}
                className="mt-5 px-5 py-2 text-white bg-[#CDA434] cursor-pointer hover:bg-[#dba436] rounded-lg transition duration-200"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MessageModal;
