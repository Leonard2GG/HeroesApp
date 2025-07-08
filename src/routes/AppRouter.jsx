import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import { Navbar } from '../components/ui/Navbar';
import MarvelScreen from '../components/marvel/MarvelScreen';
import DCScreen from '../components/dc/DCScreen';
import SearchScreen from '../components/search/SearchScreen';
import LoginScreen from '../components/login/LoginScreen';

export default function AppRouter() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<MarvelScreen />} />
                    <Route path="/marvel" element={<MarvelScreen />} />
                    <Route path="/dc" element={<DCScreen />} />
                    <Route path="/search" element={<SearchScreen />} />
                    <Route path="/login" element={<LoginScreen />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
