import { TypeToastr } from '@/src/types/enums';
import { toast } from 'react-toastify';

export const toastr = (text: string, type: TypeToastr= TypeToastr.success) => {
  return toast[type](`${text}`, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};
