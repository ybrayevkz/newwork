import {toast} from "react-toastify";
import 'materialize-css'
import 'react-toastify/dist/ReactToastify.css';
import {useCallback} from "react";


export const useMessage = () => {
    return useCallback(text => {
        if(text == "Ваши данные приняты, пожалуйста, подтвердите через почту."){
            toast.success("Ваши данные приняты, пожалуйста, подтвердите через почту.")
        }
        else if(text == "Вход успешно выполнен!"){
            toast.success("Вход успешно выполнен!")
        }
        else{
            toast.error(text)
        }
    }, [])
}