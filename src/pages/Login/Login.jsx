import { Link, useNavigate, useLocation } from 'react-router-dom';
import login from '../../assets/login.jpg'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import useAuth from '../../hooks/useAuth';
import ButtonOne from '../../components/ButtonOne';
import useAxiosPublic from '../../hooks/useAxiosPublic';


const Login = () => {
    const { signIn, googleSignIn } = useAuth();
    const [showPassword, setShowPassword] = useState(true);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('User Login Successful.');
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

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
                            navigate(from, { replace: true });
                        }
                        else {
                            toast.success('User Login Successful.');
                            navigate(from, { replace: true });
                        }
                    })
            })
    }

    return (
        <div className="hero min-h-screen">
            <div className=" hero-content flex-col md:flex-row items-stretch mt-5">
                <div className="w-full md:w-1/2 text-center lg:text-left rounded-2xl shadow-2xl">
                    <img className='w-full h-full rounded-2xl' src={login} alt="" />
                </div>
                <div className="md:w-1/2 card shrink-0 w-full shadow-2xl bg-base-100">
                    <h1 className='text-2xl font-bold text-center mt-5'>Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className='relative'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? 'password' : 'text'} name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div onClick={() => setShowPassword(!showPassword)} className='absolute bottom-12 right-2 text-lg'>
                                {
                                    showPassword ? <FaRegEye></FaRegEye> : <FaRegEyeSlash></FaRegEyeSlash>
                                }
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <ButtonOne text="Login"></ButtonOne>
                        </div>
                        <div>
                            <p className='mt-1'>New user? <Link to="/register" className='text-blue-600'>Register</Link> </p>
                        </div>
                        <div className='space-y-3'>
                            <p className='text-center font-bold'>Login With</p>
                            <div className='flex items-center justify-center gap-2'>
                                <button onClick={handleGoogleSignIn} className="btn btn-outline text-xl px-3"><FcGoogle></FcGoogle></button>
                                <button className="btn btn-outline text-xl px-3"><FaFacebookF></FaFacebookF></button>
                                <button className="btn btn-outline text-xl px-3"><FaGithub></FaGithub></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;