import React, {useEffect} from "react";
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
import logo from '../../../images/Logos/my_final_logo.png';
import {NavLogoIcon} from "./NavbarElements";
import {animateScroll as scroll} from "react-scroll";


export const Navbar = ({ toggle }) => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/'>
                            <NavLogoIcon src={logo} alt='logo' />ybrayevweb.
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='/aboutweb' smooth={true} duration={500} spy={true}
                                          exact ='true' offset={-80}>Введение</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/certification' smooth={true} duration={500} spy={true}
                                          exact ='true' offset={-80}>Сертификация</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/aboutcourses' smooth={true} duration={500} spy={true}
                                          exact ='true' offset={-80}>О курсах</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/auth' smooth={true} duration={500} spy={true}
                                          exact ='true' offset={-80}>Зарегистрироваться</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to='/auth' onClick={toggleHome()}>Войти</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )

}