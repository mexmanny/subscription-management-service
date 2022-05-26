import { useContext } from "react";
import ToastContext from "../Context/ToastContext";

export default function useToast() {
  return useContext(ToastContext);
}
