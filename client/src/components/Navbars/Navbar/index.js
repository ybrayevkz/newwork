import React, {useEffect} from "react";
import {Nav, NavLinks as NavLinkHome} from "./NavbarElements";
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
import {useSelector} from "react-redux";
import axios from "axios";
import {Button5} from "../../Buttons/ButtonElement";
import {NavAvaIcon} from "./NavbarElements";


export const Navbar = ({ toggle }) => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

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

    const userLink = () => {
        return (
            <NavItem>
                <NavLinkHome to='about' smooth={true} duration={500} spy={true}
                             exact ='true' offset={-80}>
                    <NavAvaIcon src={user.avatar} alt='logo' />
                </NavLinkHome>
            </NavItem>
        )
    }

    const userPage = () => {
        return(
            <NavItem>
                <NavLinks to='/profile' smooth={true} duration={500} spy={true}
                          exact ='true' offset={-80}>Мой профиль</NavLinks>
            </NavItem>
        )
    }

    const logoutButton = () => {
        return(
            <NavBtn>
                <NavBtnLink to="/" onClick={handleLogout}>Выход</NavBtnLink>
            </NavBtn>
        )
    }

    const userRegister = () => {
        return (
            <>

            </>
        )
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
                            { isLogged ? userPage() : userRegister()}


                            {
                                isLogged ? userRegister() : <NavItem>
                                    <NavLinks to='/auth' smooth={true} duration={500} spy={true}
                                              exact ='true' offset={-80}>Зарегистрироваться</NavLinks>
                                </NavItem>
                            }


                            {
                                isLogged ? userLink() : <NavBtn>
                                    <NavBtnLink to='/auth' onClick={toggleHome()}>Войти</NavBtnLink>
                                </NavBtn>
                            }

                            {
                                isLogged ? logoutButton() : userRegister()
                            }

                        </NavMenu>


                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )

}