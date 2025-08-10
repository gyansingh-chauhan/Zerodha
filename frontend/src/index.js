import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/HomepPage';
import AboutPage from './landing_page/about/AboutPage';
import SupportPage from './landing_page/support/SupportPage';
import SignUp from './landing_page/signup/SingnUp';
import ProductsPage from './landing_page/products/ProductsPage';
import PricingPage from './landing_page/pricing/PricingPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFindingPage from './landing_page/NotFindingPage';
import OtpPage from './landing_page/signup/OtpPage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Navbar/>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/support" element={<SupportPage/>}/>
        <Route path="/product" element={<ProductsPage/>}/>
        <Route path="/pricing" element={<PricingPage/>}/>
        <Route path='*' element={<NotFindingPage/>}/>
        <Route path='/otpPage' element={<OtpPage/>}/>
    </Routes>
    <Footer/>
 </BrowserRouter>
);
