import React from "react";
import './App.css';
import {Home} from "./pages";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {AuthorsPage} from "./pages/AuthorsPage";
import {ContactsPage} from "./pages/ContactsPage";
import {PolicyPage} from "./pages/PolicyPage";
import {AuthPage} from "./pages/AuthPage";
import 'materialize-css'
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import {ScrollToTop} from "./components/ScrollToTop";



function App() {
    const {token, login, logout, userId} = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)
    return (
        <AuthContext.Provider value={{token, login, logout, userId, isAuthenticated}}>
            <Router>
                <ScrollToTop>
                    {routes}
                </ScrollToTop>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
