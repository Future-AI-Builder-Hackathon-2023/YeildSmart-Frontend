import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/footer';
import Loader from '../Loader/Loader';


const Layout = () => {
    return (
        <>
            <Navbar />
            <Suspense fallback={<Loader/>}>
                <Outlet></Outlet>
            </Suspense>
            <Footer />
        </>
    )
}

export default Layout
