import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//assets
import logo from "../assets/logo.png"
import github from '../assets/logo-github 1.png';
import insta from '../assets/logo-instagram 1.png';
import twitter from '../assets/logo-twitter 2.png';
import fb from '../assets/Vector.png';


const Footer = () => {

    const [email, setEmail] = useState("");
    function changeHandler(e) {
        setEmail(e.target.value);
    }

    return (
        <div className='w-full h-fit '>
            {/* first section */}
            <div className='w-full h-[200px] lg:h-[350px]  flex flex-col justify-center items-center'>
                <div className='w-full p-5 lg:p-0 lg:w-[531px] h-[200px] mx-auto flex flex-col justify-center items-center gap-2 lg:gap-4'>
                    <div className='lg:w-[496px]   font-semibold text-xl lg:text-3xl text-center'>Subscribe to our newsletter</div>
                    <div className='text-xs w-full lg:w-[428px] lg:h-[25px] font-normal  text-center'>Join our newsletter to receive updates on new features and releases.</div>
                    <div>
                        <form className='flex gap-3'>
                            <input type='email' name='email' value={email} onChange={changeHandler} className='w-[55vw] lg:w-[290px] h-[50px] border-b-2 border-darkGreen pl-4 text-sm' placeholder='Email'></input>
                            <button className='w-[35vw] lg:w-[130px] bg-blue  rounded-md px-[19px] py-[13px] flex justify-center items-center text-white font-semibold'>
                                Subscribe
                            </button>
                        </form>
                    </div>
                    <div className='text-xs font-normal'>By subscribing, you agree to our Privacy Policy and Terms of service</div>
                </div>
            </div>

            {/* second section */}
            <div className='w-full h-fit bg-darkGreen'>
                <div className='h-[85%] w-[85vw] flex flex-col gap-7 mx-auto'>
                    {/* first part */}
                    <div className='w-full lg:flex  text-gray-200 flex-col hidden lg:flex-row lg:justify-between pt-9 gap-8'>
                        <div className='flex flex-col gap-2'>
                            <img src={logo} width={200} className=' mix-blend-multiply' alt='logo'></img>
                            <div className='lg:w-64 text-white opacity-80'>Discover and connect with our vibrant food community</div>
                        </div>
                        <div className=' lg:flex flex-col gap-2 '>
                            <div >
                                <div className='font-bold text-[1.1rem]'>Links</div>
                                <div className='w-7 h-[3px] mt-1 bg-white'></div>
                            </div>
                            <div>
                                <Link to="/"><div>Home</div></Link>
                                <Link to="/joinDoctor"><div>Join As Doctor</div></Link>
                                <Link to="/blogs"><div>Blogs</div></Link>
                                <Link to="/contact"><div>Contact Us</div></Link>
                            </div>
                        </div>
                        <div className=' flex flex-col gap-2'>
                            <div>
                                <div className='font-bold text-[1.1rem]'>Login As</div>
                                <div className='w-9 h-[3px] mt-1 bg-white'></div>
                            </div>
                            <div className='flex flex-row gap-6 lg:gap-1 lg:flex-col'>
                                <Link to="/login"><div>Doctor Login</div></Link>
                                <Link to="/login"><div>User Login</div></Link>
                                <Link to="/login"><div>Admin Login</div></Link>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className=' font-bold text-[1.1rem]'>Follow us on :</div>
                            <div className='flex gap-2'>
                                <div className='w-[28px] h-[28px] border border-white rounded-full flex items-center justify-center'>
                                    <img src={twitter} alt='twitter' ></img>
                                </div>
                                <div className='w-[28px] h-[28px] border border-white rounded-full flex items-center justify-center'>
                                    <img src={fb} alt='facbook' ></img>
                                </div>
                                <div className='w-[28px] h-[28px] border border-white rounded-full flex items-center justify-center'>
                                    <img src={insta} alt='instagram'></img>
                                </div>
                                <div className='w-[28px] h-[28px] border border-white rounded-full flex items-center justify-center'>
                                    <img src={github} alt='github'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full  h-fit mx-auto flex flex-col lg:hidden pt-9 gap-8'>
                        <div className='flex flex-col w-full mx-auto items-center gap-2'>
                            <img src={logo} width={200} className=' mix-blend-multiply' alt='logo'></img>
                            <div className='text-center text-white opacity-80'>Discover and connect with our vibrant food community</div>
                        </div>
                        <div className='text-white flex flex-col items-center gap-2'>
                            <div>
                                <div className='font-bold'>Login as</div>
                                <div className='w-9 h-[3px] bg-white'></div>
                            </div>
                            <div className='flex flex-row gap-6 lg:gap-1 lg:flex-col'>
                                <Link to="/login"><div>Partner Login</div></Link>
                                <Link to="/login"><div>User Login</div></Link>
                                <Link to="/login"><div>Admin Login</div></Link>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 items-center'>
                            <div className='text-white font-bold'>Follow us on :</div>
                            <div className='flex gap-2'>
                                <div className='w-[28px] h-[28px] border border-white rounded-full flex items-center justify-center'>
                                    <img src={twitter} alt='twitter'></img>
                                </div>
                                <div className='w-[28px] h-[28px] border border-white rounded-full flex items-center justify-center'>
                                    <img src={fb} alt='facebook'></img>
                                </div>
                                <div className='w-[28px] h-[28px] border border-white rounded-full flex items-center justify-center'>
                                    <img src={insta} alt='instagram' ></img>
                                </div>
                                <div className='w-[28px] h-[28px] border border-white rounded-full flex items-center justify-center'>
                                    <img src={github} alt='github' ></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* second part */}
                    <div className='w-full mx-auto h-[0.5px] bg-white opacity-20'></div>
                    {/* third part */}
                    <div className='text-white text-sm text-center pb-2'>
                        © Copyright 2024, All Rights Reserved by Plus Care
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer