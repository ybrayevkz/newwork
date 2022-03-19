import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {Home} from "./pages";
import {AuthorsPage} from "./pages/AuthorsPage";
import {ContactsPage} from "./pages/ContactsPage";
import {PolicyPage} from "./pages/PolicyPage";
import {AuthPage} from "./pages/AuthPage";
import {ProfilePage} from "./pages/ProfilePage";
import {AboutWebPage} from "./pages/AboutWebPage";
import {CertificationPage} from "./pages/CertificationPage";
import {AboutCoursesPage} from "./pages/AboutCoursesPage";

export const useRoutes = isAuthenticated =>{
    if(isAuthenticated){
        return(
            <Routes>
                <Route path='/' element={<Home />} exact />
                <Route path='/authors' element={<AuthorsPage />} exact />
                <Route path='/contacts' element={<ContactsPage />} exact />
                <Route path='/policy' element={<PolicyPage />} exact />
                <Route path='/profile/:id' element={<ProfilePage />} />
                <Route path='/aboutweb' element={<AboutWebPage />} />
                <Route path='/certification' element={<CertificationPage />} />
                <Route path='/aboutcourses' element={<AboutCoursesPage />} />
                <Route path="*" element={<Navigate to="/profile/:id" />} />
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/authors' element={<AuthorsPage />} exact />
            <Route path='/contacts' element={<ContactsPage />} exact />
            <Route path='/policy' element={<PolicyPage />} exact />
            <Route path='/auth' element={<AuthPage />} exact />
            <Route path='/aboutweb' element={<AboutWebPage />} />
            <Route path='/certification' element={<CertificationPage />} />
            <Route path='/aboutcourses' element={<AboutCoursesPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}