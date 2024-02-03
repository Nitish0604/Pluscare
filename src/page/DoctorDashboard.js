import React from 'react'
import { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { FaBlog } from "react-icons/fa";
import { GiBilledCap } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import { toast } from "react-hot-toast";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { GiLoveInjection } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaRegAddressCard } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";


import { FaPersonBreastfeeding } from "react-icons/fa6";


const DoctorDashboard = (props) => {

  let setIsLoggedIn = props.setIsLoggedIn;
  const [patient, setPatient] = useState('infant');
  const [Vaccine, setVaccine] = useState(true);
  // const user = JSON.parse(localStorage.getItem("userInfo")) || {};
  // console.log(user);
  return (
    <div className='w-full h-sereen overflow-x-hidden flex '>
      {/* <p>Hi! Doctor {user.doctor.name}</p> */}

      {/* left button*/}
      <div className='w-[20%] h-[100%] bg-white pt-[2rem]'>
        <div className='h-[70px] overflow-hidden mb-3'>
          <Link to="/" className=''>
            <img src={logo} alt="logo" className='h-[345%] top-[-120%] relative mix-blend-multiply' />
          </Link>
        </div>
        <Link to='/' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-blue hover:text-white gap-2 ' >
          <FaHome />
          <p>Home</p>
        </Link>


        <Link to='/blogs' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-blue hover:text-white gap-2' >
          <FaBlog />
          <p>Blogs</p>
        </Link>
        <button className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-blue hover:text-white gap-2'>
          <GiBilledCap />
          <p>Appointment</p>
        </button>

        {patient === 'infant' ?
          (<button
            onClick={() => setVaccine((prev) => !prev)}
            className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-blue hover:text-white gap-2'>
            <GiLoveInjection />
            {
              Vaccine ? (<p>Show Vaccine Name</p>) : (<p>Vaccine Data</p>)
            }
          </button>)
          : (<div></div>)
        }
        <Link to='/contact' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-blue hover:text-white gap-2'>
          <FaPhoneAlt />
          <p>Contact Us</p>
        </Link>
        <Link to='/symptoms' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-blue hover:text-white gap-2'>
          <IoShieldCheckmarkSharp />
          <p>Check Symptoms</p>
        </Link>
        <button onClick={() => {
          setIsLoggedIn(false);
          toast.success("Logged Out");
          localStorage.removeItem("userInfo");
          // navigate("/");
        }} className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-blue hover:text-white gap-2'>
          <IoIosLogOut />
          <p>Log Out</p>
        </button>
      </div>


      {/* right */}
      <div className='w-[80%] h-full p-[1rem] text-black relative overflow-scroll dashboardScroll bg-white rounded-lg mt-9 ml-4'  >



        <div className=' relative h-[250px] rounded-md p-9  bg-slate-100 flex justify-between '>
          <div>
            <h1 className='text-[2.8rem] font-semibold'>Welcome </h1>
            <div className='w-[30%] h-[2px] bg-red-600'></div>
            <h1 className='text-[2.8rem] text-blue'>Dr.Nitish Kumar</h1>
            <p className=' capitalize my-2'>how a nice day at work</p>
          </div>


        </div>
        <img className='w-[500px] h-[300px] absolute top-0 right-4  ' src='/2151107498.png'
          alt='doctorBg'></img>
        <h1 className='text-[2.05rem] mt-6'>Monthly Report</h1>
        <div className='h-[200px] bg-slate-100 w-full rounded-md flex gap-2 justify-evenly p-2'>
          <div className=" bg-white rounded-md h-full w-[23%] flex justify-center items-center flex-col gap-4">
            {/* <img className="size-4" src='' alt=''></img> */}
            <div className="text-[1.8rem]"><FaPersonBreastfeeding /></div>
            <p className='text-[1.2rem]'>Total Patients</p>
            <p className="w-[80px] h-[40px] flex items-center justify-center rounded-md bg-green-400 ">260</p>
       
          </div>
          <div className=" bg-white rounded-md h-full w-[23%] flex justify-center items-center flex-col gap-4">
            {/* <img className="size-4" src='' alt=''></img> */}
            <div className="text-[1.8rem]"><FaPhoneVolume /></div>
            <p className='text-[1.2rem]'>Phone Cells</p>
            <p className="w-[80px] h-[40px] flex items-center justify-center rounded-md bg-green-400 ">100</p>
       
          </div>
          <div className=" bg-white rounded-md h-full w-[23%] flex justify-center items-center flex-col gap-4">
            {/* <img className="size-4" src='' alt=''></img> */}
            <div className="text-[1.8rem]"><FaRegAddressCard /></div>
            <p className='text-[1.2rem]'>Appoinment</p>
            <p className="w-[80px] h-[40px] flex items-center justify-center rounded-md bg-green-400 ">90</p>
       
          </div>
          <div className=" bg-white rounded-md h-full w-[23%] flex justify-center items-center flex-col gap-4">
            {/* <img className="size-4" src='' alt=''></img> */}
            <div className="text-[1.8rem]"><IoMdMailUnread /></div>
            <p className='text-[1.2rem]'>Unread Mail</p>
            <p className="w-[80px] h-[40px] flex items-center justify-center rounded-md bg-green-400 ">260</p>
       
          </div>

        </div>


        


      </div >

    </div>
  )
}

export default DoctorDashboard
