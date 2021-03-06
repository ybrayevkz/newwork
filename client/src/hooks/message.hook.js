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
        else if(text == "Мы отправили письмо к вам на почту, пожалуйста проверьте свою почту."){
            toast.success("Мы отправили письмо к вам на почту, пожалуйста проверьте свою почту.")
        }
        else if(text == "Пароль успешно заменен. Для того что бы продолжить, переавторизуйтесь!"){
            toast.success("Пароль успешно заменен. Для того что бы продолжить, переавторизуйтесь!")
        }
        else if(text == "Ваши данные успешно обновлены!"){
            toast.success("Ваши данные успешно обновлены!")
        }
        else{
            toast.error(text)
        }
    }, [])
}