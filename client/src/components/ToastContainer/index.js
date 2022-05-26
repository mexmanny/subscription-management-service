import React from "react";
import { Toast, ToastWrapper } from "./style";

function ToastContainer({ toasts }) {
  return (
    <ToastWrapper>
      {toasts.map((toast, index) => (
        <Toast
          key={`toast-${index + 1}`}
          className={toast.type === "success" ? "success" : "error"}
        >
          {toast.message}
        </Toast>
      ))}
    </ToastWrapper>
  );
}

export default ToastContainer;
