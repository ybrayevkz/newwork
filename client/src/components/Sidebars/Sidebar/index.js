import React from "react";
import {SidebarContainer} from "./SidebarElements";
import {Icon} from "./SidebarElements";
import {CloseIcon} from "./SidebarElements";
import {SidebarWrapper} from "./SidebarElements";
import {SidebarLink} from "./SidebarElements";
import {SidebarMenu} from "./SidebarElements";
import {SideBtnWrap} from "./SidebarElements";
import {SidebarRoute} from "./SidebarElements";
import {useSelector} from "react-redux";
import {SideAvaIcon, SidebarUserInfo, SideUserName} from "../SidebarHome/SidebarElements";
import axios from "axios";
import {NavBtnLink} from "../../Navbars/NavbarHome/NavbarElements";

export const Sidebar = ({ toggle, isOpen }) => {

    const auth = useSelector(state => state.auth)

    const {user, isLogged} = auth

    const userPage = () => {
        return(
            <SidebarLink to='/profile' onClick={toggle}>
                Мой профиль
            </SidebarLink>
        )
    }

    const userAva = () => {
        return(
            <SidebarUserInfo>
                <SideAvaIcon src={user.avatar} alt='logo' />
            </SidebarUserInfo>
        )
    }
    const userName = () => {
        return(
            <SideUserName>{user.firstname} {user.lastname}</SideUserName>
        )
    }

    const handleLogout = async () => {
        try{
            await axios.get('/user/logout');
            localStorage.removeItem('firstLogin');
            window.location.href = "/";
        } catch (e) {
            window.location.href = "/";
        }
    }

    const logoutButton = () => {
        return(
            <NavBtnLink to='signup' onClick={handleLogout}>
                Выход
            </NavBtnLink>
        )
    }

    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                {isLogged ? userAva() : <></>}
                <SidebarMenu>
                    {isLogged ? userName() : <></>}
                    <SidebarLink to='/aboutweb' onClick={toggle}>
                        Введение
                    </SidebarLink>
                    <SidebarLink to='/certification' onClick={toggle}>
                        Сертификация
                    </SidebarLink>
                    <SidebarLink to='/aboutcourses' onClick={toggle}>
                        О курсах
                    </SidebarLink>
                    {isLogged ? userPage() : <SidebarLink to='signup' onClick={toggle}>
                        Зарегистрироваться
                    </SidebarLink>}
                </SidebarMenu>
                <SideBtnWrap>
                    {isLogged ? logoutButton() : <NavBtnLink to='/auth'>
                        Войти
                    </NavBtnLink>}
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}