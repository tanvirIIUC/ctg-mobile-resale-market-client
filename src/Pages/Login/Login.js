import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useToken from '../../Hooks/useToken';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { logIn } = useContext(AuthContext)
    const [loginUserEmail,setLoginUserEmail]= useState('');
   
    const [token]= useToken(loginUserEmail);

    if(token){
        navigate(from, { replace: true });
    }
 
    const handleSignup = data => {
        //    console.log(data)
        logIn(data.email, data.password)
            .then((result) => {

                const user = result.user;
                alert("log in Successfull")
                setLoginUserEmail(data.email)
                

            })
            .catch((error) => {
                alert("error")
            });
    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className='  flex justify-center items-center' >
                        <div className='w-96 h-[480px] rounded-lg shadow-lg p-10'>
                            <h1 className='text-center text-3xl font-bold'>Login</h1>
                            <form onSubmit={handleSubmit(handleSignup)}>


                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Email</span>

                                    </label>

                                    <input type="email" {...register("email",

                                        { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs" />
                                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Password</span>

                                    </label>
                                    <input type="password" {...register("password",
                                        {
                                            required: "password is required",
                                            minLength: { value: 6, message: "password must 6 character or long" }
                                        })} className="input input-bordered w-full max-w-xs" />
                                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                                    <label className="label">
                                        <span className="label-text-alt">forget password?</span>

                                    </label>


                                </div>

                                {/* <p>{data}</p> */}
                                <input className='btn w-full' type="submit" value='Login' />
                            </form>
                            <label className="label">
                                <span className="label-text-alt">Don't have account?</span>
                                <Link to='/register' className='text-primary'>Create Account</Link>
                            </label>
                           

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>






    );
};

export default Login;