import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import ScrollToTop from '../hooks/ScrollToTop';
import Navbar from '../pages/Shared/Navabar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <ScrollToTop />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;
