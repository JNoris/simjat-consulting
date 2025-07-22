import React, { createContext, useContext, useState, useCallback } from 'react';
import Toast from '../components/Toast';

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((type, message, duration = 5000) => {
    const id = Date.now() + Math.random();
    const newToast = { id, type, message, duration };
    
    setToasts(prev => [...prev, newToast]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const showSuccess = useCallback((message) => addToast('success', message), [addToast]);
  const showError = useCallback((message) => addToast('error', message), [addToast]);
  const showWarning = useCallback((message) => addToast('warning', message), [addToast]);
  const showInfo = useCallback((message) => addToast('info', message), [addToast]);

  return (
    <ToastContext.Provider value={{
      addToast,
      showSuccess,
      showError,
      showWarning,
      showInfo
    }}>
      {children}
      <div className="fixed top-0 right-0 z-50 p-4 space-y-2">
        {toasts.map((toast, index) => (
          <div
            key={toast.id}
            style={{ 
              transform: `translateY(${index * 70}px)`,
              zIndex: 1000 - index
            }}
          >
            <Toast
              type={toast.type}
              message={toast.message}
              duration={toast.duration}
              onClose={() => removeToast(toast.id)}
            />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};