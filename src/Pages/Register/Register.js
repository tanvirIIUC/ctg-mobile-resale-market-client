import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    // const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleRegister = data => {
        console.log(data)
        /*  createUser(data.email, data.password)
             .then(result => {
 
                 const user = result.user;
                 alert("Create Successfull")
                 saveuser(data.name,data.email)
 
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
 
             }); */
    }
    return (

<div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className='h-[800px]  flex justify-center items-center' >
            <div className='w-96 h-[570px] rounded-lg shadow-lg p-10'>
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
                        <label className="label">
                            <span className="label-text-alt">forget password?</span>

                        </label>


                    </div>

                    {/* <p>{data}</p> */}
                    <input className='btn w-full' type="submit" value='Register' />
                </form>
                <label className="label">
                    <span className="label-text-alt">Already have an account?</span>
                    <Link to='/login' className='text-primary'>Login</Link>
                </label>
                <div className="divider">OR</div>

                <button className="btn btn-outline w-full">Continue with Google</button>
            </div>
        </div>
  </div>
</div>


























        

    );
};

export default Register;