import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import './App.css';

export default function App () {
    return (
        <React.Fragment>
            <Router>
                <Routes>
                    <Route path='/' element={ <Home /> } />
                </Routes>
            </Router>
        </React.Fragment>
    )
}