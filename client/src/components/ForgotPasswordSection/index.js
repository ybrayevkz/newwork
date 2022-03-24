import React, {useEffect, useState} from 'react'
import {useHttp} from "../../hooks/http.hook";
import {useMessage} from "../../hooks/message.hook";
import {Link} from "react-router-dom";
import {FaAt} from "react-icons/fa";
import {Button3} from "../Buttons/ButtonElement";
import {ToastContainer} from "react-toastify"
import {
    Column1, Column2,
    Heading, Img, ImgWrap,
    InfoContainer,
    InfoRow,
    InfoWrapper, Subtitle,
    TextWrapper,
    TopLine
} from "../AboutWebSection/AboutWebElements";
import {dispatchLogin} from "../../redux/actions/authAction";

;

export const ForgotPasswordSection = ({lightBg, imgStart, id, topLine, lightText, headline, darkText, description, buttonLabel, img,
                                          alt}) => {

    const initialState = useState({
        email: ''
    })

    const [data, setData] = useState(initialState)

    const {email} = data

    const {loading, request, error, clearError} = useHttp();

    const message = useMessage()

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const forgotHandler = async () => {
        try{
            const res = await request('/user/forgot', 'POST', {...data})
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
                                    <i><FaAt /></i>
                                    <input type="email" id="email" name="email" placeholder="Введите почту" onChange={changeHandler}/>
                                </div>
                                <br/>

                                <Button3 disabled={loading} onClick={forgotHandler}>Подтвердить почту</Button3><br/>

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