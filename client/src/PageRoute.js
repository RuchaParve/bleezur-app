import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import Navbar from './components/Navbar';

const PageRoute = () => (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Form/>} />
            </Routes>
        </BrowserRouter>
    </div>
);

export default PageRoute;