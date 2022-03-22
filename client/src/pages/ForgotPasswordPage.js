import React, {useState} from 'react'
import {Navbar} from "../components/Navbars/Navbar";
import {Footer} from "../components/Footer";
import {ForgotPasswordSection} from "../components/ForgotPasswordSection";
import {Sidebar} from "../components/Sidebars/Sidebar";
import {forgot_password} from "../components/ForgotPasswordSection/Data";


export const ForgotPasswordPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return(
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ForgotPasswordSection {...forgot_password  }/>
            <Footer />
        </>
    )
}