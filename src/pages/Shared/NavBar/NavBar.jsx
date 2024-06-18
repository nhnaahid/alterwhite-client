import { Link, NavLink } from "react-router-dom";
import { toast } from 'react-toastify';
import useAuth from "../../../hooks/useAuth";
import './NavBar.css'
import ButtonOne from "../../../components/ButtonOne";


const NavBar = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    const handleLogout = () => {
        logOut()
            .then(result => {
                console.log(result);
                toast.success('User Successfully Logged Out.');
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    const navLinks = <>
        <li className="ml-2"><NavLink to='/'>Home</NavLink></li>
        <li className="ml-2"><NavLink to='/all-queries'>All Queries</NavLink></li>
        {
            user && <li className="ml-2"><NavLink to="/recommendations-for-me">Recommendations For Me</NavLink></li>
        }
        {
            user && <li className="ml-2"><NavLink to="/my-queries">My Queries</NavLink></li>
        }
        {
            user && <li className="ml-2"><NavLink to="/my-recommendations">My recommendations</NavLink></li>
        }
    </>

    return (
        <nav>
            <div className="navbar bg-gray-600 shadow-md fixed z-20 px-2 sm:px-8 max-w-screen-2xl mx-auto text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/' className="text-lg md:text-xl lg:text-2xl font-bold font-oswald"><span className="border border-black p-1 rounded-l-lg bg-white text-black">Alter</span><span className="bg-black text-white p-1 border border-black rounded-r-lg">White</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 md:text-base">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end md:gap-2">
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src={user?.photoURL || 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-black">
                                    <li className="text-center"><Link to="/profile">Profile</Link></li>
                                    <li className="text-center"><Link onClick={handleLogout}>Logout</Link></li>
                                </ul>
                            </div>
                            :
                            <Link to="/login"><ButtonOne text="Login"></ButtonOne></Link>
                    }

                </div>
            </div>
        </nav>
    );
};

export default NavBar;