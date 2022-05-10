import React from "react";
import {SideAvaIcon, SidebarContainer, SidebarUserInfo, SideUserName} from "./SidebarElements";
import {Icon} from "./SidebarElements";
import {CloseIcon} from "./SidebarElements";
import {SidebarWrapper} from "./SidebarElements";
import {SidebarLink} from "./SidebarElements";
import {SidebarMenu} from "./SidebarElements";
import {SideBtnWrap} from "./SidebarElements";
import {SidebarRoute} from "./SidebarElements";
import {NavAvaIcon, NavBtn, NavBtnLink} from "../../Navbars/NavbarHome/NavbarElements";
import {useSelector} from "react-redux";
import axios from "axios";

export const SidebarHome = ({ toggle, isOpen }) => {

    const auth = useSelector(state => state.auth)

    const {user, isLogged} = auth

    const handleLogout = async () => {
        try{
            await axios.get('/user/logout');
            localStorage.removeItem('firstLogin');
            window.location.href = "/";
        } catch (e) {
            window.location.href = "/";
        }
    }

    const userPage = () => {
        return(
            <SidebarLink to='my_page' onClick={toggle}>
                Мой профиль
            </SidebarLink>
        )
    }

    const logoutButton = () => {
        return(
            <NavBtnLink to='signup' onClick={handleLogout}>
                Выход
            </NavBtnLink>
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



    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                {isLogged ? userAva() : <></>}
                <SidebarMenu>
                    {isLogged ? userName() : <></>}
                    <SidebarLink to='about' onClick={toggle}>
                        Введение
                    </SidebarLink>
                    <SidebarLink to='discover' onClick={toggle}>
                        Сертификация
                    </SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>
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