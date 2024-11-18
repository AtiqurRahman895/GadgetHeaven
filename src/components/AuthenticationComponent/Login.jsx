// import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';
// import PropTypes from 'prop-types';

const Login = () => {
    const {loginUser,setUser}=useContext(AuthContext)
    const navigate=useNavigate()

    const LogoutOnSubmit=(e)=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value

        // console.log(email,password)
        loginUser(email,password)
            .then((userCredential) => {
                setUser(userCredential.user)
                toast.success("Login successfull!")
                e.target.reset()
                navigate("/")

            }).catch((error) => {
                toast.error(error.message?error.message:error.code)

            });
    }
    return (
        <section>
            <div className="container hero min-h-svh flex items-center justify-center">
                    <div className="card w-full max-w-sm shrink-0 shadow-2xl p-4 md:p-8 space-y-4">
                    {/* <h1 className="text-5xl font-bold">Login now!</h1> */}
                    <form onSubmit={LogoutOnSubmit} className="card-body p-0">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn bg-custom-purple hover:bg-custom-half-purple text-white hover:text-black btn-block">Login</button>
                        </div>
                        <span className="text-center mt-4">
                            Do not have an account? <Link to={"/register"} className="link link-hover text-custom-purple hover:font-bold ">Register now</Link>
                        </span>
                    </form>
                    </div>
            </div>
        </section>
    );
};

// Login.propTypes = {
    
// };

export default Login;