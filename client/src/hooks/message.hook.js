import {toast, ToastContainer} from "react-toastify";
import 'materialize-css'
import 'react-toastify/dist/ReactToastify.css';
import {useCallback} from "react";


export const useMessage = () => {
    return useCallback(text => {
        if(text == "Пользователь создан"){
            toast.success("Пользователь создан")
        }
        else if(text == "Вход успешно выполнен!"){
            toast.success("Вход успешно выполнен!")
        }
        else{
            toast.error(text)
        }
    }, [])
}