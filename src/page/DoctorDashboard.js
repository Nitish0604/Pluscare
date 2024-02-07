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
import { useNavigate } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaRegAddressCard } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import { useEffect } from 'react';
import axios from 'axios';


import { FaPersonBreastfeeding } from "react-icons/fa6";


const DoctorDashboard = (props) => {

  let setIsLoggedIn = props.setIsLoggedIn;
  const user = JSON.parse(localStorage.getItem("userInfo")) || {};
  const navigate = useNavigate();
  // console.log(user.doctor._id);

  const doctorId = user.doctor._id;
  // console.log(doctorId);
  const [Doctor, setDoctor] = useState(null);
  const fetchDoctor = async () => {

    try {
      const response = await axios.get(`http://localhost:4000/api/PlusCare/Home/doctorById/${doctorId}`);

      // Axios automatically checks for response.ok
      const data1 = response.data;
      setDoctor(data1.data.assignedPatients);
      console.log('Fetched Subscriber:', data1);
    } catch (error) {
      console.error('Error fetching subscriber:', error.message);
    }
  };


  useEffect(() => {
    fetchDoctor();
    // console.log(Doctor);
  }, []);

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

        {/* Home */}
        <Link to='/' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-blue hover:text-white gap-2 ' >
          <FaHome />
          <p>Home</p>
        </Link>

        {/* blogs */}
        <Link to='/blogs' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-blue hover:text-white gap-2' >
          <FaBlog />
          <p>Blogs</p>
        </Link>

        {/* Appointment */}
        <button className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-blue hover:text-white gap-2'>
          <GiBilledCap />
          <p>Appointment</p>
        </button>

    {/* contact */}
        <Link to='/contact' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-blue hover:text-white gap-2'>
          <FaPhoneAlt />
          <p>Contact Us</p>
        </Link>
        {/* checks */}
        <Link to='/symptoms' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-blue hover:text-white gap-2'>
          <IoShieldCheckmarkSharp />
          <p>Check Symptoms</p>
        </Link>

        {/* logout */}
        <button onClick={() => {
          setIsLoggedIn(false);
          toast.success("Logged Out");
          localStorage.removeItem("userInfo");
          navigate("/");
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
            <h1 className='text-[2.8rem] text-blue'>{user.doctor.name}</h1>
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
        <div>
          <div className='w-full '>
            <p className='text-[1.6rem] pt-4 pb-1 font-bold tracking-tight uppercase text-blue text-center'>List Of Patients</p>
            <div className='w-[10rem] h-1 bg-blue relative left-[50%] translate-x-[-50%]'></div>
          </div>
          <div className='p-4 mt-4 border-2 rounded-md'>
            <table className="border-collapse rounded-md  w-full">
              <thead className=''>
                <tr className='text-gray-600 font-bold text-[1.2rem] '>
                  <th className="p-[1rem]">Serial No:</th>
                  <th className="p-[1rem]">Patients name</th>
                  <th className="p-[1rem]">Patients Gmail</th>
                  <th className="p-[1rem]">Contact</th>

                </tr>
              </thead>

              {
                Doctor === null ?
                  (<tbody className='bg-lightBlue'></tbody>)
                  :
                  ((
                    <tbody className='bg-lightBlue'>
                      {
                        Doctor.map((item, index) =>
                        (
                          <tr key={index}>
                            <td className="text-center  p-[1rem]">{index + 1}</td>
                            <td className="text-center capitalize  p-[1rem]">{item.childName}</td>
                            <td className=" p-[1rem] capitalize flex justify-center">{item.email}</td>
                            <td className="text-center capitalize p-[1rem]">{item.contact}</td>
                          </tr>
                        ))
                      }
                    </tbody>
                  ))
              }
            </table>
          </div>

        </div>





      </div >

    </div>
  )
}

export default DoctorDashboard