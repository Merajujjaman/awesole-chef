import React from 'react';
import Navebar from '../Pages/shared/Navebar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
          <Navebar></Navebar>  
          <Outlet></Outlet>
        </>
    );
};

export default MainLayout;