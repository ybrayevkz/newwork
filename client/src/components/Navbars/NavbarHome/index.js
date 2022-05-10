import React, {useEffect, useState} from "react";
import {Nav, NavAvaIcon} from "./NavbarElements";
import {NavLogo} from "./NavbarElements";
import {NavbarContainer} from "./NavbarElements";
import {MobileIcon} from "./NavbarElements";
import {NavMenu} from "./NavbarElements";
import {NavItem} from "./NavbarElements";
import {NavLinks} from "./NavbarElements";
import {NavLinks as NavLinkHome} from "../Navbar/NavbarElements"
import {FaBars} from "react-icons/fa"
import {NavBtn} from "./NavbarElements";
import {NavBtnLink} from "./NavbarElements";
import {IconContext} from "react-icons/lib";
import {animateScroll as scroll} from "react-scroll";
import logo from "../../../images/Logos/my_final_logo.png"
import {NavLogoIcon} from "./NavbarElements";
import {useSelector} from "react-redux";
import axios from "axios";


export const NavbarHome = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

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

    const userRegister = () => {
        return (
            <>
            </>
        )
    }

    const logoutButton = () => {
        return(
            <NavBtn>
                <NavBtnLink to="/" onClick={handleLogout}>Выход</NavBtnLink>
            </NavBtn>
        )
    }

    const userPage = () => {
        return(
            <NavItem>
                <NavLinks to='my_page' smooth={true} duration={500} spy={true}
                          exact ='true' offset={-80}>Мой профиль</NavLinks>
            </NavItem>
        )
    }



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
                            {isLogged ? userPage() : userRegister()}

                            {
                                isLogged ? userRegister() : <NavItem>
                                    <NavLinks to='signup' smooth={true} duration={500} spy={true}
                                              exact ='true' offset={-80}>Зарегистрироваться</NavLinks>
                                </NavItem>
                            }


                            {
                                isLogged ? userLink() : <NavBtn>
                                    <NavBtnLink to='/auth'>Войти</NavBtnLink>
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