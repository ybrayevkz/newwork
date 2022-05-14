import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from 'react-router-dom'
import "./ProfileElements.css"
import axios from "axios";
import {ToastContainer} from "react-toastify";
import {useHttp} from "../../hooks/http.hook";
import {useMessage} from "../../hooks/message.hook";
import {
    Column1, Column2,
    Heading, Img, ImgWrap, InfoContainer,
    InfoRow,
    InfoWrapper,
    Subtitle,
    TextWrapper,
    TopLine
} from "./ProfileElements.js";
import {profileObjOne, profileObjThree, profileObjTwo} from "./Data";
import {AvatarImage, AvatarInput, AvatarSection, AvatarSpan, BtnWrap, Info} from "./ProfileElements";
import {Button3, Button4} from "../Buttons/ButtonElement";
import {FaLock, FaUser} from "react-icons/fa";



export const ProfileSection = ({lightBg, imgStart, id, topLine, lightText, headline, darkText, description, buttonLabel, img,
                                   alt, primary, dark, dark2}) => {

    const initialState = {
        firstname: '',
        lastname: '',
        password: '',
        cf_password: ''
    }

    const auth = useSelector(state => state.auth)
    const token = useSelector(state => state.token)

    const {user, isAdmin} = auth
    const [avatar, setAvatar] = useState("")

    const [callback, setCallback] = useState(false)

    const {loading, request, error, clearError} = useHttp();
    const message = useMessage()




    useEffect(() => {
        message(error)
        clearError()
    }, [error,message, clearError])

    const changeNameHandler = event => {
        setNamesForm({ ...namesForm, [event.target.name]: event.target.value })
    }

    const changePassHandler = event => {
        setPassForm({ ...passForm, [event.target.name]: event.target.value })
    }

    const changeAvatar = async(e) => {
        e.preventDefault()
        try{
            const file = e.target.files[0]


            let formData = new FormData()
            formData.append('file', file)

            const res = await axios.post('/api/upload_avatar', formData, {
                headers: {'content-type': 'multipart/form-data', Authorization: token}
            })

            setAvatar(res.data.url)
        } catch (e) {

        }
    }
    const [avaForm, setAvaForm] = useState(initialState)
    const [namesForm, setNamesForm] = useState({
        firstname: '', lastname: ''
    })

    const [passForm, setPassForm] = useState({
        password: '',
        cf_password: ''
    })


    const updateInfo = async () => {
        try {
            const data = await request('/user/update', 'PATCH', {...namesForm}, {Authorization: token})
            message(data.message)
        } catch (e) {

        }
    }
    
    const updatePassword = async () => {
        try {
            const data = await request('/user/reset', 'POST', {...passForm}, {Authorization: token})
            message(data.message)
        } catch (e) {
            
        }
    }

    const updateAvatar = async () => {
        try {
            const data = await request('/user/update_avatar', 'PATCH', {avatar}, {Authorization: token})
            message(data.message)
        } catch (e) {

        }
    }




    return(
        <>
            {/*<div className="profile_page">*/}
            {/*    <ToastContainer />*/}
            {/*    <div className="col-left">*/}
            {/*        <h2>{isAdmin ? "Профиль админа" : "Профиль пользователя"}</h2>*/}
            {/*        <div className="avatar">*/}
            {/*            <img src={avatar ? avatar : user.avatar} alt="User_Avatar_Image"/>*/}
            {/*            <span>*/}
            {/*                <i className="fa-solid fa-camera"></i>*/}
            {/*                <p>Change</p>*/}
            {/*                <input type="file" name="file" id="file_up" onChange={handleChange}/>*/}
            {/*            </span>*/}
            {/*        </div>*/}

            {/*        <div className="form-group">*/}
            {/*            <label htmlFor="firstname">Firstname</label>*/}
            {/*            <input type="text" name="firstname" id="firstname" defaultValue={user.firstname}*/}
            {/*                   placeholder="Your firstname" onChange={changeNameHandler}/>*/}
            {/*        </div>*/}
            {/*        <div className="form-group">*/}
            {/*            <label htmlFor="lastname">Lastname</label>*/}
            {/*            <input type="text" name="lastname" id="lastname" defaultValue={user.lastname}*/}
            {/*                   placeholder="Your lastname" onChange={changeNameHandler} />*/}
            {/*        </div>*/}
            {/*        <div className="form-group">*/}
            {/*            <label htmlFor="email">Email</label>*/}
            {/*            <input type="email" name="email" id="email" defaultValue={user.email}*/}
            {/*                   placeholder="Your email" disabled/>*/}
            {/*        </div>*/}
            {/*        <div className="form-group">*/}
            {/*            <label htmlFor="password">Password</label>*/}
            {/*            <input type="password" name="password" id="password"  placeholder="Your password" onChange={changePassHandler}/>*/}
            {/*        </div>*/}

            {/*        <div className="form-group">*/}
            {/*            <label htmlFor="cf_password">Confirm Password</label>*/}
            {/*            <input type="password" name="cf_password" id="cf_password" placeholder="Confirm password" onChange={changePassHandler}/>*/}
            {/*        </div>*/}

            {/*        <button disabled={loading} onClick={updateInfo}>Обновить данные</button>*/}
            {/*        <button disabled={loading} onClick={updatePassword}>Обновить пароль</button>*/}
            {/*        <button disabled={loading} onClick={changeAvatar}>Обновить фото</button>*/}
            {/*    </div>*/}

            {/*    <div className="col-right">*/}
            {/*        <h2>{isAdmin ? "Users" : "MyOrders"}</h2>*/}
            {/*        <div style={{overflowX: "auto"}}>*/}
            {/*            <table className="customers">*/}
            {/*                <thead><tr>*/}
            {/*                    <th>ID</th>*/}
            {/*                    <th>Name</th>*/}
            {/*                    <th>Email</th>*/}
            {/*                    <th>Admin</th>*/}
            {/*                    <th>Action</th>*/}
            {/*                </tr></thead>*/}
            {/*                <tbody>*/}
            {/*                <td>ID</td>*/}
            {/*                <td>Name</td>*/}
            {/*                <td>Email</td>*/}
            {/*                <td>Admin</td>*/}
            {/*                <td>Action</td>*/}
            {/*                </tbody>*/}
            {/*            </table>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <Info>
                <ToastContainer />
                <InfoContainer lightBg={profileObjOne.lightBg} id={profileObjOne.id}>
                    <InfoWrapper>
                        <InfoRow imgStart={profileObjOne.imgStart}>
                            <Column1>
                                <TextWrapper>
                                    <TopLine>{profileObjOne.topLine}</TopLine>
                                    <Heading lightText={profileObjOne.lightText}>{profileObjOne.headline}</Heading>
                                    <Subtitle darkText={profileObjOne.darkText}>{profileObjOne.description}</Subtitle>

                                    <AvatarInput type="file" name="file" id="file_up" onChange={changeAvatar}/>

                                </TextWrapper>

                                <BtnWrap>
                                    <Button3 onClick={updateAvatar}
                                             smooth={true}
                                             duration={500}
                                             spy={true}
                                             exact="true"
                                             offset={-80}
                                             primary={primary ? 0 : 1}
                                             dark={dark ? 0 : 1}
                                             dark2={dark2 ? 0 : 1}>{profileObjOne.buttonLabel}</Button3>
                                </BtnWrap>
                            </Column1>
                            <Column2>
                                <ImgWrap>
                                    <AvatarSection>
                                        <AvatarImage src={avatar ? avatar : user.avatar} alt="User_Avatar_Image"/>
                                    </AvatarSection>
                                </ImgWrap>
                            </Column2>
                        </InfoRow>
                    </InfoWrapper>
                </InfoContainer>
                <InfoContainer lightBg={profileObjTwo.lightBg} id={profileObjTwo.id}>
                    <InfoWrapper>
                        <InfoRow imgStart={profileObjTwo.imgStart}>
                            <Column1>
                                <TextWrapper>
                                    <TopLine>{profileObjTwo.topLine}</TopLine>
                                    <Heading lightText={profileObjTwo.lightText}>{profileObjTwo.headline}</Heading>
                                    <Subtitle darkText={profileObjTwo.darkText}>{profileObjTwo.description}</Subtitle>

                                    <div className="input-field">
                                        <i><FaUser /></i>
                                        <input type="text" id="firstname" name="firstname" placeholder="Имя" defaultValue={user.firstname} onChange={changeNameHandler}/>
                                    </div>

                                    <div className="input-field">
                                        <i><FaUser /></i>
                                        <input type="text" id="lastname" name="lastname" placeholder="Фамилия" defaultValue={user.lastname} onChange={changeNameHandler}/>
                                    </div>

                                </TextWrapper>
                                <BtnWrap>
                                    <Button3 onClick={updateInfo}>{profileObjTwo.buttonLabel}</Button3>
                                </BtnWrap>
                            </Column1>
                            <Column2>
                                <ImgWrap>
                                    <Img src={profileObjTwo.img} alt={profileObjTwo.alt}/>
                                </ImgWrap>
                            </Column2>
                        </InfoRow>
                    </InfoWrapper>
                </InfoContainer>
                <InfoContainer lightBg={profileObjThree.lightBg} id={profileObjThree.id}>
                    <InfoWrapper>
                        <InfoRow imgStart={profileObjThree.imgStart}>
                            <Column1>
                                <TextWrapper>
                                    <TopLine>{profileObjThree.topLine}</TopLine>
                                    <Heading lightText={profileObjThree.lightText}>{profileObjThree.headline}</Heading>
                                    <Subtitle darkText={profileObjThree.darkText}>{profileObjThree.description}</Subtitle>

                                    <div className="input-field">
                                        <i><FaLock /></i>
                                        <input type="password" id="password" name="password" placeholder="Введите пароль" onChange={changePassHandler}/>
                                    </div>
                                    <div className="input-field">
                                        <i><FaLock /></i>
                                        <input type="password" id="cf_password" name="cf_password" placeholder="Подтвердите пароль" onChange={changePassHandler}/>
                                    </div>



                                </TextWrapper>
                                <BtnWrap>
                                    <Button3 onClick={updatePassword}
                                             smooth={true}
                                             duration={500}
                                             spy={true}
                                             exact="true"
                                             offset={-80}
                                             primary={primary ? 0 : 1}
                                             dark={dark ? 0 : 1}
                                             dark2={dark2 ? 0 : 1}>{profileObjThree.buttonLabel}</Button3>
                                </BtnWrap>
                            </Column1>
                            <Column2>
                                <ImgWrap>
                                    <Img src={profileObjThree.img} alt={profileObjThree.alt}/>
                                </ImgWrap>
                            </Column2>
                        </InfoRow>
                    </InfoWrapper>
                </InfoContainer>
            </Info>

        </>
    )
}