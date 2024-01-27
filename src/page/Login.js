import React from 'react'
import { useState } from 'react';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';


const Login = (props) => {

    let setIsLoggedIn = props.setIsLoggedIn;

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    function changeHandler(event) {

        const { name, value } = event.target;
        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }
    function resetForm() {
        setFormData({ email: "", password: "" });
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        resetForm();
        toast.success("login Successfully!");
        setIsLoggedIn(true);
        navigate("/dashboard");
    }
    return (
        <div className="relative w-[90%] h-fit">
            {/* Left Part */}

            <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7892.jpg?w=740&t=st=1706198290~exp=1706198890~hmac=7739a023ef1292e394f617ca3040fa0bb0f05e7506bb5966dfef9671edf8f3c2" alt="Vector" className="w-[40%] aspect-square top-[109px] relative" />
            {/* Right Part */}
            <form onSubmit={submitHandler} className="flex flex-col justify-around bg-white w-[40%] h-[90%]  top-[50%] translate-y-[-50%] absolute right-0">
                <img src={logo} alt="logo" className="mt-14 w-32  " />
                <div className=' text-3xl text-center leading-10 font-semibold text-[#020617] -tracking-[2%]'>
                    Account Login
                </div>
                <div className='font-normal  text-center text-[#020617]  w-[90%] -tracking-[2%]'>
                    If you are Id & Password you can login with your email address and password.
                </div>
                <div className='flex flex-col w-[100%] ml-3'>
                    <label
                        className=''
                        htmlFor='email'>
                        <p
                            className='text-xl font-medium  text-[#020617] mb-3'
                        >Email address
                        </p>
                    </label>
                    <input
                        type='email'
                        name='email'
                        onChange={changeHandler}
                        value={formData.email}
                        className='border-none outline-slate-200 ring-1 p-2 rounded-lg h-14 w-[85%]'
                        placeholder="Enter Your Email"
                        required
                    />
                </div>
                <div className='flex flex-col w-[100%] ml-3'>
                    <label
                        className=''
                        htmlFor='password'>
                        <p
                            className='text-xl font-medium text-[#020617] mb-3'
                        >Password
                        </p>
                    </label>
                    <input
                        type='password'
                        name='password'
                        onChange={changeHandler}
                        value={formData.password}
                        className='border-none  outline-slate-200 ring-1 p-2 rounded-lg h-14 w-[85%]'
                        placeholder="Enter The Password"
                        required
                    />
                </div>
                <button className=' h-14 w-[85%] ml-3 mt-6 bg-darkGreen border rounded-lg px-5 py-3 flex justify-center items-center text-[#ffffff]  text-base font-semibold tracking-tighter '>
                    Login
                </button>
                <div className="text-slate-950 ml-3">
                    Don't have an account ? <Link to="/subscription" className="font-bold">Register</Link>
                </div>
            </form>
        </div>
    )
}

export default Login