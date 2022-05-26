import React, { createContext, useEffect, useState, useCallback } from "react";
import ToastContainer from "../ToastContainer";

const ToastContext = createContext();

export const ToastContextProvider = (props) => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setToasts((toasts) => toasts.slice(1));
    }, 5000);

    return () => clearTimeout(timer);
  }, [toasts]);

  const showToast = useCallback(
    (toast) => {
      const currentToasts = [...toasts];
      const updatedToasts = [...currentToasts, toast];

      setToasts(updatedToasts);
    },
    [setToasts, toasts]
  );

  return (
    <ToastContext.Provider value={showToast}>
      {props.children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  );
};

export default ToastContext;
