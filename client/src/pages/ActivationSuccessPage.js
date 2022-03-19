import React, {useEffect, useState} from 'react'
import {Navbar} from "../components/Navbars/Navbar";
import {Sidebar} from "../components/Sidebars/Sidebar";
import {Footer} from "../components/Footer";
import {ActivationSuccess} from "../components/ActivationSection/ActivationSuccess";
import {activation_success} from "../components/ActivationSection/Data";
import {useParams} from "react-router-dom";
import {useHttp} from "../hooks/http.hook";

export const ActivationSuccessPage = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    const {loading, request, error, clearError} = useHttp();
    const {activation_token} = useParams()
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')

    useEffect(() => {
        if(activation_token){
            const activationEmail = async () => {
                try{
                    const res = await request('/user/activation', 'POST', {activation_token})
                    setSuccess(res.data.msg)
                } catch (e){
                    e.response.data.msg && setErr(e.response.data.msg)
                }
            }
            activationEmail()
        }
    })
    console.log(useParams())

    return(
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ActivationSuccess {...activation_success}/>
            <Footer />
        </>
    )
}