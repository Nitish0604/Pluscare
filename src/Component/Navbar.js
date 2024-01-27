import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../assets/logo.png"
import { toast } from "react-hot-toast"
import "./Navbar.css";

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return (
        <div className='w-[100%] h-fit bg-darkGreen sticky top-0 z-[100] '>
            <div className='w-[100%] max-w-[1600px]   min-h-[70px] bg-darkGreen flex flex-wrap items-center justify-around text-gray-200 mx-auto'>

                {/* logo */}
                <Link to="/" className='h-[70px] overflow-hidden'>
                    <img src={logo} alt="logo" className='h-[345%] top-[-120%] relative mix-blend-multiply' />
                </Link>
                <div className=' flex gap-[2rem] font-semibold text-[1.2rem]'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                </div>
                {/* login subscription dashboard LogOut */}
                <div className='flex items-center gap-x-4'>
                    {!isLoggedIn &&
                        <Link to="/joinDoctor">
                            <button className="button-55">
                                Join As Doctor
                            </button>
                        </Link>
                    }
                    {!isLoggedIn &&
                        <Link to="/login">
                            <button className="button-55">
                                Log In
                            </button>
                        </Link>
                    }
                    {!isLoggedIn &&
                        <Link to="/subscription">
                            <button className='px-5 py-[.5rem] border-2 rounded-lg'>
                                Subscription
                            </button>
                        </Link>
                    }
                    {isLoggedIn &&
                        <Link to="/">
                            <button onClick={() => {
                                setIsLoggedIn(false);
                                toast.success("Logged Out");
                            }}
                                className='px-5 py-[.5rem] border-2 rounded-lg'>
                                Log Out
                            </button>
                        </Link>
                    }
                    {isLoggedIn &&
                        <Link to="/dashboard">
                            <button
                                className="button-55">
                                Dashboard
                            </button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar