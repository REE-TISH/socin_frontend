import { toast } from "react-toastify";

const ToastErrorMessage = (msg)=>{
    toast.error(msg,{theme:'dark'});
}

const ToastSuccessMessage = (msg)=>{
    toast.success(msg,{theme:'dark'});
}

export {ToastErrorMessage,ToastSuccessMessage};