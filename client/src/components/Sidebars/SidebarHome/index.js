import React from "react";
import {SidebarContainer} from "./SidebarElements";
import {Icon} from "./SidebarElements";
import {CloseIcon} from "./SidebarElements";
import {SidebarWrapper} from "./SidebarElements";
import {SidebarLink} from "./SidebarElements";
import {SidebarMenu} from "./SidebarElements";
import {SideBtnWrap} from "./SidebarElements";
import {SidebarRoute} from "./SidebarElements";

export const SidebarHome = ({ toggle, isOpen }) => {
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>
                        Введение
                    </SidebarLink>
                    <SidebarLink to='discover' onClick={toggle}>
                        Сертификация
                    </SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>
                        О курсах
                    </SidebarLink>
                    <SidebarLink to='signup' onClick={toggle}>
                        Зарегистрироваться
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>
                        Войти
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}