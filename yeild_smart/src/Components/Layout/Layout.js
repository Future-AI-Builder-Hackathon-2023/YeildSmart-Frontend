import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/footer';


const Layout = () => {
    return (
        <>
            <Navbar />
            <Suspense fallback={<div>Loader</div>}>
                <Outlet></Outlet>
            </Suspense>
            <Footer />

        </>
    )
}

export default Layout
