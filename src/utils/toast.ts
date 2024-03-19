import {
  ToastContent,
  ToastOptions,
  toast as reactToast,
} from "react-toastify";
import { ErrorToastIcon, InfoToastIcon, SuccessToastIcon } from "@/icons/index";

export const toastSuccess = (
  content: ToastContent,
  options?: ToastOptions<unknown>
) => {
  return reactToast.success(content, {
    ...options,
    icon: SuccessToastIcon,
  });
};

const toastConfig: ToastOptions = {
  hideProgressBar: true,
  theme: "colored",
  autoClose: 5000,
  closeButton: false,
  closeOnClick: true,
  position: "top-center",
};

export const toast = (
  text: ToastContent,
  type: "success" | "error" | "info"
) => {
  switch (type) {
    case "success":
      return reactToast.success(text ?? "Success!", {
        ...toastConfig,
        icon: SuccessToastIcon,
      });
    case "error":
      return reactToast.error(text ?? "Error!", {
        ...toastConfig,
        icon: ErrorToastIcon,
      });
    case "info":
      return reactToast.info(text ?? "Info!", {
        ...toastConfig,
        icon: InfoToastIcon,
      });
    default:
      return null;
  }
};
