import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import Budget from './components/budget/budget';
import Ledger from './components/ledger/ledger';
import './App.css';

export default function App () {
    return (
        <React.Fragment>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={ <Home /> } />
                    <Route path='/budget' element={ <Budget /> } />
                    <Route path='/ledger' element={ <Ledger /> } />
                </Routes>
            </Router>
        </React.Fragment>
    )
}