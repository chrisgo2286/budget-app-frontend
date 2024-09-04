import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import Budget from './components/budget/budget';
import Ledger from './components/ledger/ledger';
import Reports from './components/reports/reports';
import Registration from './components/registration/registration';
import Login from './components/login/login';
import { UserContext, CategoriesContext, ErrorsContext } from './misc/context';
import axios from 'axios';
import './App.css';
import { UserTypes } from './misc/miscTypes';
import { useGetCategories } from './misc/hooks';

export default function App (): JSX.Element {
    
    axios.defaults.withCredentials = true
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = 'x-csrftoken'
    
    let token = localStorage.getItem('token');
    let username = localStorage.getItem('username');

    const [ user, setUser ] = useState<UserTypes>({
        username: (username) ? username: '',
        isLoggedIn: (token) ? true: false,
        token: (token) ? token: '',
    })
    const [ errors, setErrors ] = useState<string[]>([])
    const { categories, setCategoryUpdate } = useGetCategories(user.isLoggedIn);
   
    

    return (
        <React.Fragment>
            <UserContext.Provider value={{ user, setUser }}>
            <ErrorsContext.Provider value={{ errors, setErrors }}>
            <CategoriesContext.Provider value={{ categories, setCategoryUpdate }}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={ <Home /> } />
                    <Route path='/budget' element={ <Budget /> } />
                    <Route path='/ledger' element={ <Ledger /> } />
                    <Route path='/reports' element={ <Reports /> } />
                    <Route path='/registration' element={ <Registration /> } />
                    <Route path='/login' element={ <Login /> } />
                </Routes>
            </Router>
            </CategoriesContext.Provider>
            </ErrorsContext.Provider>
            </UserContext.Provider>
        </React.Fragment>
    )
}