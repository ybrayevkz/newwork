import React, {useEffect, useState} from "react";
import {Nav} from "./NavbarElements";
import {NavLogo} from "./NavbarElements";
import {NavbarContainer} from "./NavbarElements";
import {MobileIcon} from "./NavbarElements";
import {NavMenu} from "./NavbarElements";
import {NavItem} from "./NavbarElements";
import {NavLinks} from "./NavbarElements";
import {FaBars} from "react-icons/fa"
import {NavBtn} from "./NavbarElements";
import {NavBtnLink} from "./NavbarElements";
import {IconContext} from "react-icons/lib";
import {animateScroll as scroll} from "react-scroll";
import logo from "../../../images/Logos/my_final_logo.png"
import {NavLogoIcon} from "./NavbarElements";


export const NavbarHome = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)}, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/'onClick={toggleHome} >
                            <NavLogoIcon src={logo} alt='logo' />ybrayevweb.
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='about' smooth={true} duration={500} spy={true}
                                          exact ='true' offset={-80}>Введение</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='discover' smooth={true} duration={500} spy={true}
                                          exact ='true' offset={-80}>Сертификация</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='services' smooth={true} duration={500} spy={true}
                                          exact ='true' offset={-80}>О курсах</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='signup' smooth={true} duration={500} spy={true}
                                          exact ='true' offset={-80}>Зарегистрироваться</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to='/auth'>Войти</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )

}