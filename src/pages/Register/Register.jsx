import { FaFacebookF, FaGithub, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import ButtonOne from "../../components/ButtonOne";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";


const Register = () => {
    const [showPassword, setShowPassword] = useState(true);
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { googleSignIn, createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (data) => {

        const userInfo = {
            name: data.name,
            email: data.email,
            photoURL: data.image
        }

        createUser(data.email, data.password)
            .then((result) => {
                // console.log('user from sign up: ', loggedUser);
                updateUserProfile(data.name, data.email, data.image)
                    .then(() => {
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                // console.log("is inserted: ", res.data);
                                if (res.data.insertedId) {
                                    // console.log(res.data);
                                    reset();
                                    toast.success('User Registration Successful.');
                                    navigate('/');
                                }
                            })
                    })
                    .catch(error => toast.error(error.message));
            })
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                // console.log(result.user);
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                    photoURL: result.user?.photoURL,
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.insertedId) {
                            toast.success('User Registration Successful.');
                            navigate('/');
                        }
                        else {
                            toast.success('User Login Successful.');
                            navigate('/');
                        }
                    })
            })
    }

    return (
        <div className="my-16">
            <div className="w-4/5 md:w-3/5 mx-auto mt-5">
                <p className="font-semibold mb-5 text-gray-500">If you already have an account, please log in at the <Link to="/login"><span className="text-black font-bold">log in page.</span></Link></p>
                <h1 className="border-b border-gray-300 font-oswald tracking-wide text-2xl py-2">Your Personal Details</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 mt-5">

                    <label>Your Full Name</label>
                    <input type="text" {...register("name", { required: true })} name="name" id="" placeholder="Name" className="border border-gray-300 p-2 md:p-3" />
                    {errors.name && <span className="text-red-600">Name is required</span>}

                    <label>Your email address</label>
                    <input type="email" {...register("email", { required: true })} name="email" id="" placeholder="Email" className="border border-gray-300 p-2 md:p-3" />
                    {errors.email && <span className="text-red-600">Email is required</span>}

                    <label>User Image</label>
                    <input type="text" {...register("image", { required: true })} id="image" placeholder="Image URL" className="border border-gray-300 p-2 md:p-3" />
                    {errors.image && <span className="text-red-600">User Image is required</span>}

                    <div>
                        <label>Password</label>
                        <div>
                            <div className="relative">
                                <input type={showPassword ? 'password' : 'text'} {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 15,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name='password' placeholder="Password" className="border border-gray-300 p-2 md:p-3 w-full" />
                                <div onClick={() => setShowPassword(!showPassword)} className='absolute bottom-3 md:bottom-4 right-3 text-lg'>
                                    {
                                        showPassword ? <FaRegEye></FaRegEye> : <FaRegEyeSlash></FaRegEyeSlash>
                                    }
                                </div>
                            </div>
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must have at least 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must have less than or equal 15 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have a Uppercase, lower case, number and special character.</p>}
                        </div>
                    </div>

                    <ButtonOne text="Sign Up"></ButtonOne>

                    <div className='space-y-3'>
                        <p className='text-center font-bold'>Register With</p>
                        <div className='flex items-center justify-center gap-2'>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline text-xl px-3"><FcGoogle></FcGoogle></button>
                            <button className="btn btn-outline text-xl px-3"><FaFacebookF></FaFacebookF></button>
                            <button className="btn btn-outline text-xl px-3"><FaGithub></FaGithub></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;