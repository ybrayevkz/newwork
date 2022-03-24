import React, {useState} from 'react'
import {Sidebar} from "../components/Sidebars/Sidebar";
import {Navbar} from "../components/Navbars/Navbar";
import {Footer} from "../components/Footer";
import {ResetPasswordSection} from "../components/ResetPasswordSection";
import {reset_password} from "../components/ResetPasswordSection/Data";

export const ResetPasswordPage = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }


    return(
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ResetPasswordSection {...reset_password}/>
            <Footer />
        </>
    )
}