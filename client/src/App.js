import React, {useEffect} from "react";
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import 'materialize-css'
import {useRoutes} from "./routes";
import {ScrollToTop} from "./components/ScrollToTop";
import {useDispatch, useSelector} from "react-redux";
import {useHttp} from "./hooks/http.hook";
import {dispatchLogin, fetchUser, dispatchGetUser} from './redux/actions/authAction'



function App() {


    const routes = useRoutes()

    const dispatch = useDispatch()
    const token = useSelector(state => state.token)
    const auth = useSelector(state => state.auth)
    const {loading, request, error, clearError} = useHttp();

    useEffect(() => {
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin){
            const getToken = async () => {
                const res = await request('/user/refresh_token', 'POST', null)
                console.log(res)
                dispatch({type: 'GET_TOKEN', payload: res.access_token})
            }
            getToken()
        }
    }, [auth.isLogged, dispatch])

    useEffect(() => {
        if(token){
            const getUser = () => {
                dispatch(dispatchLogin())

                return fetchUser(token).then(res => {
                    dispatch(dispatchGetUser(res))
                })
            }
            getUser()
        }
    }, [token, dispatch])
    
    return (
        <Router>
            <ScrollToTop>
                {routes}
            </ScrollToTop>
        </Router>
    );
}

export default App;
