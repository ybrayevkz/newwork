import React, {useState} from 'react'
import {Sidebar} from "../../../components/Sidebars/Sidebar";
import {Navbar} from "../../../components/Navbars/Navbar";
import {Footer} from "../../../components/Footer";
import {HTML_home} from "../../../components/Courses/HTML_Course/HTML_home";

export const HTML_home_page = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HTML_home />
            <Footer/>
        </>

    )
}