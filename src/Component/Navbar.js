import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../assets/logo192.png"
import {toast} from "react-hot-toast"


const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return (
        <div className='w-[100%] h-[60px] bg-darkGreen flex items-center justify-around'>
            {/* logo */}
            <Link to="/" className='h-[60px] aspect-square'>
                <img src={logo} alt="logo" className='h-[90%] aspect-square' />
            </Link>
            <div className=' flex gap-[2rem] font-semibold text-[1.1rem]'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/blogs">Blogs</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </div>
            {/* login subscription dashboard LogOut */}
            <div className='flex items-center gap-x-4'>
                {!isLoggedIn &&
                    <Link to="/login">
                        <button  className="button-55">
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
    )
}

export default Navbar