// import React from 'react';
// import PropTypes from 'prop-types';

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const {setUser,creatUser,updateUserProfile}=useContext(AuthContext)
    const navigate=useNavigate()
    const CreatUserOnSubmit=(e)=>{
        e.preventDefault()
        const name=e.target.name.value
        const photoUrl=e.target.photoUrl.value
        const email=e.target.email.value
        const password=e.target.password.value

        console.log(name,photoUrl,email,password)
        creatUser(email,password)
            .then((userCredential) => {
                setUser(userCredential.user);
                toast.success("Your Registration successfull!")
                e.target.reset()
                updateUserProfile(name,photoUrl).then(()=>{
                    navigate("/")
                }).catch((error) => {
                    toast.error(error.message?error.message:error.code)
    
                });

            }).catch((error) => {
                toast.error(error.message?error.message:error.code)

            });
            

    }
    return (
        <section>
            <div className="container hero min-h-svh flex items-center justify-center">

                    <div className="card w-full max-w-md shrink-0 shadow-2xl p-4 md:p-8 space-y-4">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <form onSubmit={CreatUserOnSubmit} className="card-body p-0">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type='text' name="name" placeholder="Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <input type='text' name="photoUrl" placeholder="Photo url" className="input input-bordered" />
                        </div>

                        {/* <label className="form-control">
                            <div className="label">
                                <span className="label-text">profile picture</span>
                            </div>
                            <input type="file" name="pic" className="file-input file-input-bordered" />
                        </label> */}

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        {/* <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label> */}
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-custom-purple hover:bg-custom-half-purple text-white hover:text-black btn-block">Submit</button>
                        </div>

                        <span className="text-center mt-4">
                            Already have an account? <Link to={"/login"} className="link link-hover text-custom-purple hover:font-bold ">Login now</Link>
                        </span>

                    </form>
                    </div>
            </div>
        </section>
    );
};

// Login.propTypes = {
    
// };

export default Register;