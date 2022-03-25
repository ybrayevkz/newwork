import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from 'react-router-dom'



export const ProfileSection = () => {

    const initialState = {
        firstname: '',
        lastname: '',
        password: '',
        cf_password: ''
    }

    const auth = useSelector(state => state.auth)
    const token = useSelector(state => state.token)

    const {user, isAdmin} = auth
    const [data, setData] = useState(initialState)
    const {firstname, lastname, password, cf_password} = data
    const [avatar, setAvatar] = useState(false)
    const [loading, setLoading] = useState(false)

    const [callback, setCallback] = useState(false)


    return(
        <>
            <div className="profile_page">
                <div className="col-left">
                    <h2>{isAdmin ? "Профиль админа" : "Профиль пользователя"}</h2>
                    <div className="avatar">
                        <img src={avatar ? avatar : user.avatar} alt="User_Avatar_Image"/>
                        <span>
                            <i className="fa-solid fa-camera"></i>
                            <p>Change</p>
                            <input type="file" name="file" id="file_up"/>
                        </span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="firstname">Firstname</label>
                        <input type="text" name="firstname" id="firstname" defaultValue={user.firstname}
                               placeholder="Your firstname" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Lastname</label>
                        <input type="text" name="lastname" id="lastname" defaultValue={user.lastname}
                               placeholder="Your lastname" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" defaultValue={user.email}
                               placeholder="Your email" disabled/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" value={password} placeholder="Your password" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="cf_password">Confirm Password</label>
                        <input type="password" name="cf_password" id="cf_password" value={cf_password} placeholder="Confirm password" />
                    </div>

                    <button disabled={loading}>Обновить</button>
                </div>

                <div className="col-right">
                    <h2>{isAdmin ? "Users" : "MyOrders"}</h2>
                </div>
            </div>
        </>
    )
}