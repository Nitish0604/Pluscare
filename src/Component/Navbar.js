import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../assets/logo.png"
import { toast } from "react-hot-toast"
import { LuMenu } from "react-icons/lu";
import "./Navbar.css";

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSizeOpen, setIsSizeOpen] = useState(false);
    
    const handleResize = () => {
        // Update the state based on the screen size
        setIsSizeOpen(window.innerWidth >= 768);
    };

    // Add a listener for screen size changes
    useEffect(() => {
        // Call handleResize on initial render to set the initial state
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='w-[100%] h-fit bg-darkGreen sticky top-0 z-[100] '>
            <div className='w-[100%] max-w-[1600px] min-h-[70px] bg-darkGreen flex flex-wrap items-center md:gap-[1rem] justify-around text-gray-200 mx-auto'>
                {/* logo */}
                <Link to="/" className='h-[72px] md:w-[20%] overflow-hidden'>
                    <img src={logo} alt="logo" className='h-[345%] top-[-120%] relative mix-blend-multiply' />
                </Link>
                {/* LuMenu */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className='text-[2rem] md:hidden block'>
                    <LuMenu />
                </button>

                {/* Links */}
                {
                    (isSizeOpen || isMenuOpen) &&
                    <div className='absolute border-2 md:border-none top-10 right-2 md:relative md:top-0 md:right-0 bg-white md:bg-transparent text-black md:text-gray-200  md:flex md:w-[75%] gap-[2rem] items-center justify-around flex-wrap md:py-4'>
                        <div className='flex md:flex-row  flex-col md:justify-start justify-center lg:gap-[2rem] md:font-semibold text-[1.2rem]'>
                            <NavLink to="/"
                                onClick={() => setIsMenuOpen((prev) => !prev)}
                                className='md:border-none border-t-2 py-[.5rem] md:p-0 w-full text-center'>Home</NavLink>
                            <NavLink to="/blogs"
                                onClick={() => setIsMenuOpen((prev) => !prev)}
                                className='md:border-none border-t-2 py-[.5rem] md:p-0 w-full text-center '>Blogs</NavLink>
                            <NavLink to="/contact"
                                onClick={() => setIsMenuOpen((prev) => !prev)}
                                className='md:border-none border-t-2 py-[.5rem] md:p-0 lg:text-nowrap text-center '>Contact Us</NavLink>
                            <NavLink to="/symptoms"
                                onClick={() => setIsMenuOpen((prev) => !prev)}
                                className='md:border-none border-t-2 py-[.5rem] md:p-0 w-full text-center px-[.5rem] lg:text-nowrap '>Check Symptoms</NavLink>
                        </div>
                        {/* login subscription dashboard LogOut */}
                        <div className='flex md:flex-row flex-col md:justify-start justify-center items-center md:gap-x-4'>
                            {!isLoggedIn &&
                                <Link to="/joinDoctor"
                                    onClick={() => setIsMenuOpen((prev) => !prev)}
                                    className=' md:border-none border-t-2 w-full text-center'>
                                    {
                                        isSizeOpen ? (<button className="hidden md:block py-[.5rem] md:p-0 button55 text-nowrap">
                                        Join As Doctor
                                    </button>) : (<button className="md:hidden py-[.5rem] md:p-0">
                                        Join As Doctor
                                    </button>)
                                    }
                                    
                                    
                                </Link>
                            }
                            {!isLoggedIn &&
                                <Link to="/login"
                                    onClick={() => setIsMenuOpen((prev) => !prev)}
                                    className='md:border-none border-t-2 w-full text-center'>
                                    {
                                        isSizeOpen ? (<button className="hidden md:block py-[.5rem] md:p-0 button55">
                                            Log In
                                        </button>) : (<button className="md:hidden py-[.5rem] md:p-0">
                                            Log In
                                        </button>)
                                    }


                                </Link>
                            }
                            {!isLoggedIn &&
                                <Link to="/subscription"
                                    onClick={() => setIsMenuOpen((prev) => !prev)}
                                    className=' md:border-none border-t-2 w-full text-center'>
                                    <button className='md:px-5 py-[.5rem] md:border-2 md:rounded-lg'>
                                        Subscription
                                    </button>
                                </Link>
                            }
                            {isLoggedIn &&
                                <Link to="/"
                                    className=' md:border-none border-t-2 w-full text-center'>
                                    <button onClick={() => {
                                        setIsLoggedIn(false);
                                        toast.success("Logged Out");
                                        setIsMenuOpen((prev) => !prev);
                                    }}
                                        className='md:px-5 py-[.5rem] md:border-2 md:rounded-lg'>
                                        Log Out
                                    </button>
                                </Link>
                            }
                            {isLoggedIn &&
                                <Link to="/dashboard"
                                    onClick={() => setIsMenuOpen((prev) => !prev)}
                                    className=' md:border-none border-t-2 w-full text-center'>
                                    {
                                        isSizeOpen ? (<button
                                            className='md:px-5 py-[.5rem] md:border-2 md:rounded-lg button55'>
                                            Dashboard
                                        </button>) : (<button
                                        className='md:px-5 py-[.5rem] md:border-2 md:rounded-lg'>
                                        Dashboard
                                    </button>)
                                    }
                                    
                                    
                                </Link>
                            }
                        </div>
                    </div>
                }



            </div>
        </div>
    )
}

export default Navbar