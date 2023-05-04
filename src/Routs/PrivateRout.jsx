import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRout = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return (
            <div className="flex justify-center items-center h-96 w-full">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
            </div>
        )
    }

    if (user) {
        return children
    }
    
    return <Navigate state={{ from: location }} to='/login' replace></Navigate>

};

export default PrivateRout;