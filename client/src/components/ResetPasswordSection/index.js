import React, {useEffect} from 'react'
import {useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import {
    Column1,
    Column2,
    Heading,
    Img,
    ImgWrap, InfoContainer,
    InfoRow,
    InfoWrapper,
    Subtitle
} from "../AboutWebSection/AboutWebElements";
import {FaAt, FaLock} from "react-icons/fa";
import {Button3} from "../Buttons/ButtonElement";
import {useHttp} from "../../hooks/http.hook";
import {useMessage} from "../../hooks/message.hook";


export const ResetPasswordSection = ({lightBg, imgStart, id, topLine, lightText, headline, darkText, description, buttonLabel, img,
                                         alt}) => {

    const initialState = useState({
        password: '',
        cf_password: ''
    })

    const [data, setData] = useState(initialState)
    const {token} = useParams()
    const {password, cf_password} = data

    const {loading, request, error, clearError} = useHttp();

    const message = useMessage()

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const resetHandler = async () => {
        try{
            const res = await request('/user/reset', 'POST', {...data}, {Authorization: token})
            console.log(token)
            message(res.message)

        } catch (e) {

        }
    }
    return(
        <>
            <ToastContainer />
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <form>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <div className="input-field">
                                    <i><FaLock /></i>
                                    <input type="password" id="password" name="password" placeholder="Придумайте пароль" onChange={changeHandler}/>
                                </div>
                                <div className="input-field">
                                    <i><FaLock /></i>
                                    <input type="password" id="cd_password" name="cf_password" placeholder="Подтвердите новый пароль" onChange={changeHandler}/>
                                </div>
                                <br/>

                                <Button3 disabled={loading} onClick={resetHandler}>Поменять пароль</Button3><br/>

                            </form>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}