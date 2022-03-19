import React, {useState} from "react";
import {Sidebar} from "../components/Sidebars/Sidebar";
import {Navbar} from "../components/Navbars/Navbar";
import {AuthorSection} from "../components/AuthorSection";
import {Footer} from "../components/Footer";
import {ContactsSection} from "../components/ContactsSection";

export const ContactsPage = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return(
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ContactsSection />
            <Footer />
        </>
    )
}