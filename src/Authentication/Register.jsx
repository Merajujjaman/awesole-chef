import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import toast, { Toaster } from 'react-hot-toast';



const Register = () => {
    const [error, setError] = useState('')
    const { createUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.pathname || '/';


    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.value;
        const password = form.password.value;

        //create user:
        createUser(email, password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser);
                toast('Welcome to our Awesome-Chef')
                form.reset()
                setError('')
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }



    return (
        <div className='md:w-4/5 mx-auto'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Create your account</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" name='image' placeholder="photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <small>Already have an account?<Link className='text-green-400 ps-2' to='/login'>Login</Link></small>
                                </label>
                                <label className="label">
                                    <small className='text-pink-400'>
                                        {error}
                                    </small>
                                </label>


                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value="Register" />
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Register;