import React from 'react';
import Navebar from '../Pages/shared/Navebar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/shared/Footer';

const MainLayout = () => {
    return (
        <>
          <Navebar></Navebar>  
          <Outlet></Outlet>
          <Footer></Footer>
        </>
    );
};

export default MainLayout;