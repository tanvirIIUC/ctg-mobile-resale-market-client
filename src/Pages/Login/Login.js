import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { logIn } = useContext(AuthContext)
    // const googleProvider = new GoogleAuthProvider();

  /*   const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                 console.log(user);
            })
            .catch(error => console.error(error))
    }
 */
    const handleSignup = data => {
        //    console.log(data)
        logIn(data.email, data.password)
            .then((result) => {

                const user = result.user;
                alert("log in Successfull")
                navigate(from, { replace: true });

            })
            .catch((error) => {
                alert("error")
            });
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
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
                                <input className='btn w-full' type="submit" />
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