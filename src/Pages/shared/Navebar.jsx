import React, { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthProvider';

const Navebar = () => {
    const { user, logOut } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error))
    }

    return (
        <div className='container mx-auto md:w-4/5 sticky top-0 z-50'>
            <div className="navbar bg-blue-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            <li><NavLink
                                to='/'
                                className={({ isActive }) => isActive ? 'text-green-500' : ''}
                            >Home</NavLink>
                            </li>
                            <li><NavLink
                                to='/blog'
                                className={({ isActive }) => isActive ? 'text-green-500' : ''}
                            >Blog</NavLink>
                            </li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case md:font-bold md:text-2xl">Awesome Chef</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        <li><NavLink
                            to='/'
                            className={({ isActive }) => isActive ? 'text-green-500' : ''}
                        >Home</NavLink>
                        </li>
                        <li><NavLink
                            to='/blog'
                            className={({ isActive }) => isActive ? 'text-green-500' : ''}
                        >Blog</NavLink>
                        </li>

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && <div className='me-2'>
                            <FaUserAlt title={user.email && user.email} className='text-3xl'></FaUserAlt>
                        </div>
                    }

                    {
                        user ?
                            <Link onClick={handleLogOut} className='btn' >LogOut</Link> :
                            <Link className='btn' to='/login'>Login</Link>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navebar;