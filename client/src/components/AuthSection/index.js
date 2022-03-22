import React, {useEffect, useState} from "react";
import {FaUser, FaLock, FaAt, FaVk, FaGoogle} from "react-icons/fa";
import signin_img from "../../images/AuthPage/auth_login_image.svg"
import signup_img from "../../images/AuthPage/auth_registation_image.svg"
import "./AuthElements.css"
import {Button3} from "../Buttons/ButtonElement";
import {useHttp} from "../../hooks/http.hook";
import {useMessage} from "../../hooks/message.hook";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {dispatchLogin} from '../../redux/actions/authAction'
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom"



export const AuthSection = (primary, dark, dark2) => {
    const [isContainerActive, setIsContainerActive] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const signUpButton = () => {
        setIsContainerActive(true);
    };

    const signInButton = () => {
        setIsContainerActive(false);
    };

    const {loading, request, error, clearError} = useHttp();

    const [form, setForm] = useState({
        email: '', password: ''
    })

    const [rform, setRform] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        cf_password: ''
    })

    const message = useMessage()
    useEffect(() => {
        message(error)
        clearError()
    }, [error,message, clearError])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try{
            const data = await request('/user/register', 'POST', {...form})
            message(data.message)
        } catch (e) {
            
        }
    }

    const loginHandler = async () => {
        try{
            const data = await request('/user/login', 'POST', {...form})
            message(data.message)
            localStorage.setItem('firstLogin', true)
            dispatch(dispatchLogin())
            navigate("/");

        } catch (e) {

        }


    }
    return(
        <>
            <div className={`container ${isContainerActive ? "sign-up-mode" : ""}`}>
                <ToastContainer />
                <div className="forms-container">
                    <div className="signin-signup">
                        <form className="sign-in-form">
                            <h2 className="title">Авторизация</h2>
                            <div className="input-field">
                                <i><FaAt /></i>
                                <input type="email" id="email" name="email" placeholder="Введите почту" onChange={changeHandler}/>
                            </div>
                            <div className="input-field">
                                <i><FaLock /></i>
                                <input type="password" id="password" name="password" placeholder="Введите пароль" onChange={changeHandler}/>
                            </div>
                            <Button3 onClick={loginHandler} disabled={loading} className="btn">Войти</Button3><br/>

                            <Link to="forgot_password" className="forgot_password">Забыли пароль?</Link><br/>

                            <p className="social-text">Или вы можете войти через другие платформы, как:</p>

                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i><FaGoogle /></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i><FaVk /></i>
                                </a>
                            </div>
                        </form>
                        <form action="#" className="sign-up-form">
                            <h2 className="title">Регистрация</h2>
                            <div className="input-field">
                                <i><FaUser /></i>
                                <input type="text" id="firstname" name="firstname" placeholder="Имя" onChange={changeHandler}/>
                            </div>
                            <div className="input-field">
                                <i><FaUser /></i>
                                <input type="text" id="lastname" name="lastname" placeholder="Фамилия" onChange={changeHandler}/>
                            </div>
                            <div className="input-field">
                                <i><FaAt /></i>
                                <input type="email" id="email" name="email" placeholder="Введите почта" onChange={changeHandler}/>
                            </div>
                            <div className="input-field">
                                <i><FaLock /></i>
                                <input type="password" id="password" name="password" placeholder="Введите пароль" onChange={changeHandler}/>
                            </div>
                            <div className="input-field">
                                <i><FaLock /></i>
                                <input type="password" id="cf_password" name="cf_password" placeholder="Подтвердите пароль" onChange={changeHandler}/>
                            </div>
                            <Button3 className="btn" disabled={loading} onClick={registerHandler} >Зарегистрироваться</Button3>

                        </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>Вы тут впервые?</h3>
                            <p>
                                Если да, то добро пожаловать на наш образовательный веб-сайт ybrayevweb. Для того что бы
                                зарегистрироваться нажмите кнопку "регистрация".
                            </p>
                            <Button3 id="sign-up-btn" className="panelbutton" disabled={loading} onClick={signUpButton}
                                     primary={primary ? 1 : 0}
                                     dark={dark ? 1 : 0}
                                     dark2={dark2 ? 1 : 0}>
                                Регистрация
                            </Button3>
                        </div>
                        <img src={signup_img} className="image" alt="Sign up image"/>
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>У вас уже есть аккаунт?</h3>
                            <p>
                                Если да, то вы можете войти в свой аккаунт для продолжения обучения. Что бы перейти на авторизацию
                                нажмите кнопку "войти".
                            </p>

                            <Button3 id="sign-in-btn" className="panelbutton" onClick={signInButton} primary={primary ? 1 : 0} dark={dark ? 1 : 0}
                                     dark2={dark2 ? 1 : 0}>
                                Войти
                            </Button3>

                        </div>
                        <img src={signin_img} className="image" alt="Sign in image"/>
                    </div>
                </div>
            </div>

        </>
    )
}
