import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUserProfile,providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                saveUser(user.name, user.email, 'user');
                navigate(from, { replace: true });
                 console.log(user);
                 
            })
            .catch(error => console.error(error))
    }


    const handleRegister = data => {
        // console.log(data)
        createUser(data.email, data.password)
            .then(result => {

                const user = result.user;
                // alert("Create Successfull");
                saveUser(data.name, data.email, data.option);

                const profile = {
                    displayName: data.name,

                }
                updateUserProfile(profile)
                    .then(() => {
                        navigate('/login')
                    })
                    .catch(error => console.error(error));

            })
            .catch((error) => {
                console.error(error)

            });
    }

    const saveUser = (name, email, option) => {
        const users = { name, email, option };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    // setTreatment(null)


                    alert('create successfull')


                }
                else {
                    alert(`${data.message}`)
                }

            })
    }

    return (

        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className='h-[800px]  flex justify-center items-center' >
                    <div className='w-96 h-[650px] rounded-lg shadow-lg p-10'>
                        <h1 className='text-center text-3xl font-bold'>Register</h1>
                        <form onSubmit={handleSubmit(handleRegister)}>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>

                                </label>

                                <input type="text" {...register("name",

                                    { required: "Name is required" })} className="input input-bordered w-full max-w-xs" />
                                {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                            </div>
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


                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Option</span>

                                </label>
                                <select {...register("option")} className="select select-bordered w-full max-w-xs my-3">

                                    <option value="seller">Seller</option>
                                    <option value="user">User</option>

                                </select>


                            </div>



                            {/* <p>{data}</p> */}
                            <input className='btn w-full' type="submit" value='Register' />
                        </form>
                        <label className="label">
                            <span className="label-text-alt">Already have an account?</span>
                            <Link to='/login' className='text-primary'>Login</Link>
                        </label>
                        <div className="divider">OR</div>

                        <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>




























    );
};

export default Register;