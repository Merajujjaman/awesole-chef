import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const [error, setError] = useState('')
    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const logedUser = result.user;
                console.log(logedUser)
                toast('Login seccessfull !!')
                navigate(from, { replace: true })
                form.reset()
            })
            .catch(error => {
                setError(error.message)
                console.log(error)
            })
    }
    // handle google login:
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const googleUser = result.user;
                toast('Login seccessfull !!')
                navigate(from, { replace: true })

                console.log(googleUser)
            })
            .catch(error => console.log(error))
    }

    // handle github login:
    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const githubUser = result.user;
                console.log(githubUser)

                toast('Login seccessfull !!')
                navigate(from, { replace: true })

            })
    }


    return (
        <div className='md:w-4/5 mx-auto'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login please</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="enter your email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                                <label className="label">
                                    <small>Don't have an account?<Link className='text-green-400 ps-2' to='/register' state={location?.state?.from} >Register</Link></small>
                                </label>

                                <label className="label">
                                    <small className='text-pink-400'>
                                        {error}
                                    </small>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value="Login" />
                            </div>

                        </form>

                        <div className="form-control mt-6 mx-2">
                            <button className='btn btn-outline btn-primary' onClick={handleGoogleSignIn}>
                                <FcGoogle className='mx-2'></FcGoogle> login with google
                            </button>
                        </div>
                        <div className="form-control my-2 mx-2">
                            <button className='btn btn-outline btn-secondary' onClick={handleGithubSignIn}>
                                <FaGithub className='mx-2'></FaGithub>   login with github
                            </button>
                        </div>
                        <Toaster></Toaster>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;