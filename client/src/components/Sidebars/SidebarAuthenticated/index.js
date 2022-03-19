import React, {useContext} from "react";
import {SidebarContainer} from "./SidebarElements";
import {Icon} from "./SidebarElements";
import {CloseIcon} from "./SidebarElements";
import {SidebarWrapper} from "./SidebarElements";
import {SidebarLink} from "./SidebarElements";
import {SidebarMenu} from "./SidebarElements";
import {SideBtnWrap} from "./SidebarElements";
import {SidebarRoute} from "./SidebarElements";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../../context/AuthContext";

export const SidebarAuthenticated = ({ toggle, isOpen }) => {
    const navigate = useNavigate()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        navigate('/')
    }
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/about' onClick={toggle}>
                        Введение
                    </SidebarLink>
                    <SidebarLink to='/discover' onClick={toggle}>
                        Сертификация
                    </SidebarLink>
                    <SidebarLink to='/services' onClick={toggle}>
                        О курсах
                    </SidebarLink>
                    <SidebarLink to='/profile/:id' onClick={toggle}>
                        Мой профиль
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin' onClick={logoutHandler}>
                        Выход
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}