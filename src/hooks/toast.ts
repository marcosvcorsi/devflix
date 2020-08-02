import { toast } from 'react-toastify';

interface IResponse {
  success(message: string): void;
  error(message: string): void;
}

export function useToast(): IResponse {
  const success = (message: string): void => {
    toast.success(message, { autoClose: 3000, className: 'toast-success' });
  };

  const error = (message: string): void => {
    toast.error(message, { autoClose: 3000, className: 'toast-error' });
  };

  return {
    success,
    error,
  };
}
