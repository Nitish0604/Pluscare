import React, { useState } from 'react'
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

const DashBoard = (props) => {
  let setIsLoggedIn = props.setIsLoggedIn;
  const [patient, setPatient] = useState('infant');
  const [Vaccine, setVaccine] = useState(true);
  const data = [
    {
      "Vaccine": "BCG",
      "Age": "At birth or as early as possible till one year of age",
      "Dose": "0.1 ml (0.05ml until 1 month)",
      "Route": "Intra-dermal",
      "Site": "Left Upper Arm"
    },
    {
      "Vaccine": "Hepatitis B-birth dose",
      "Age": "At birth or as early as possible within 24 hours",
      "Dose": "0.5 ml",
      "Route": "Intra-muscular",
      "Site": "Antero-lateral side of mid-thigh"
    },
    {
      "Vaccine": "OPV-0",
      "Age": "At birth or as early as possible within the first 15 days",
      "Dose": "2 drops",
      "Route": "Oral",
      "Site": "Oral"
    },
    {
      "Vaccine": "OPV 1,2 and 3",
      "Age": "At 6 weeks,10 weeks and14 weeks (OPV can be given till five years of age)",
      "Dose": "2 drops",
      "Route": "Oral",
      "Site": "Oral"
    },
    {
      "Vaccine": "DPT 1,2 and3",
      "Age": "At 6 weeks,10 weeksand14weeks(DPTcan be given till one year of age)",
      "Dose": "2 drops",
      "Route": "Intra-Muscular",
      "Site": "Antero-lateral side of mid-thigh"
    },
    {
      "Vaccine": "Hepatitis B Pentavalent",
      "Age": "Hepatitis B can be completed months–12 months.(Measles can be given till5 years ofage)",
      "Dose": "0.5ml",
      "Route": "Intra-Muscular",
      "Site": "Antero-lateral side of mid-thigh"
    },

    {
      "Vaccine": "DPT Booster-2",
      "Age": "At 5-6 years of age",
      "Dose": "0.5 ml",
      "Route": "Intra-muscular",
      "Site": "Upper arm"
    },
    {
      "Vaccine": "TT",
      "Age": "At 10-16 years of age",
      "Dose": "0.5 ml",
      "Route": "Intra-muscular",
      "Site": "Upper arm"
    },

  ]

  return (
    <div>
      <div className='flex w-full h-screen'>
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


const DashBoard = () => {
  const data = [
    {
      "Vaccine": "1.BCG",
      "Age": "At birth or as early as possible till one year of age",
      "Dose": "0.1 ml (0.05ml until 1 month)",
      "Route": "Intra-dermal",
      "Site": "Left Upper Arm"
    },
    {
      "Vaccine": "Hepatitis B-birth dose",
      "Age": "At birth or as early as possible within 24 hours",
      "Dose": "0.5 ml",
      "Route": "Intra-muscular",
      "Site": "Antero-lateral side of mid-thigh"
    },
    {
      "Vaccine": "OPV-0",
      "Age": "At birth or as early as possible within the first 15 days",
      "Dose": "2 drops",
      "Route": "Oral",
      "Site": "Oral"
    },
    {
      "Vaccine": "OPV 1,2 and 3",
      "Age": "At 6 weeks,10 weeks and14 weeks (OPV can be given till five years of age)",
      "Dose": "2 drops",
      "Route": "Oral",
      "Site": "Oral"
    },
    {
      "Vaccine": "DPT 1,2 and3",
      "Age": "At 6 weeks,10 weeksand14weeks(DPTcan be given till one year of age)",
      "Dose": "Hepatitis B can be completed months–12 months.(Measles can be given till5 years ofage)",
      "Route": "Japanese Encephalitis** A9 completed months–12 months.",
      "Site": ""
    },
    {
      "Vaccine": "Hepatitis B Pentavalent",
      "Age": "Hepatitis B can be completed months–12 months.(Measles can be given till5 years ofage)",
      "Dose": "",
      "Route": "",
      "Site": ""
    },

    {
      "Vaccine": "TT Booster-1",
      "Age": "At 16-24 years of age",
      "Dose": "0.5 ml",
      "Route": "Intra-muscular",
      "Site": "Antero-lateral side of mid-thigh"
    },

  ]

  return (
    <div>
      <div className='flex w-full h-fit mt-5'>
        {/* right button*/}

        <div className='w-[20%]  bg-white  '>


          <img className=" h-[100px] object-fill w-full  rounded-md " src='/kids-nutrition.png' alt=''></img>


          <Link to='/' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-blue hover:text-white gap-2 ' >
            <FaHome /> <p>Home</p>

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
             onClick={()=> setVaccine((prev)=>!prev)}
             className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-blue hover:text-white gap-2'>
              <GiLoveInjection />
              {
                Vaccine ?(<p>Show Vaccine Name</p>) :(<p>Vaccine Data</p>)
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
          }} className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-blue hover:text-white gap-2'>
            <IoIosLogOut />
            <p>Log Out</p>
          </button>
        </div>

        {/* right */}
        <div className='w-[80%] h-full p-[1rem] text-black relative overflow-scroll dashboardScroll'  >
          <h1 className='text-[2.8rem] font-semibold'>Welcome <span className='text-blue'>Nitish Sah</span>!</h1>
          <div className='w-[30%] h-[2px] bg-red-600'></div>
          <p className=' capitalize my-2'>how are you feeling today?</p>


          <div className='mt-4 relative h-[240px] rounded-md  py-10 bg-darkGreen '>
            <h1 className='text-[2.2rem] ml-3 w-[50%]  text-white leading-10'>Find the best Doctor with Plus care</h1>
            <p className='ml-3 text-white mt-3'>Appoint the doctor and get finest medical service</p>
            <img className='size-[400px] right-4 absolute -bottom-10 ' src='/18784742_cuteanimated_269-removebg-preview (1).png'
              alt='doctorBg'></img>
          </div>


          {/* vaccine List */}
          {
            Vaccine  &&
              <>
                <div className='w-full '>
                  <p className='text-[1.6rem] pt-4 pb-1 font-bold tracking-tight uppercase text-blue text-center'>List Of Vaccine</p>
                  <div className='w-[10rem] h-1 bg-blue relative left-[50%] translate-x-[-50%]'></div>
                </div>
                <div className='p-4 mt-4 border-2 rounded-md'>
                  <table className="border-collapse rounded-md  w-full">
                    <thead className=''>
                      <tr className='text-gray-600 font-mono '>
                        <th className="p-[1rem]">Serial No:</th>
                        <th className="p-[1rem]">Vaccine</th>
                        <th className="p-[1rem]">Age</th>
                        <th className="p-[1rem]">Dose</th>
                        <th className="p-[1rem]">Site</th>
                      </tr>
                    </thead>

                    <tbody className='bg-lightBlue'>
                      {data.map((item, index) => (
                        <tr key={index}>
                          <td className="text-center  p-[1rem]">{index + 1}</td>
                          <td className="text-center capitalize  p-[1rem]">{item.Vaccine}</td>
                          <td className=" p-[1rem] capitalize">{item.Age}</td>
                          <td className="text-center capitalize p-[1rem]">{item.Dose}</td>

                          <td className=" p-[1rem]">{item.Site}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
          }
            <FaBlog /><p>Blog</p>
          </Link>
          <Link to='appointment' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-blue hover:text-white gap-2'>
            <GiBilledCap /><p>Appointment</p>
          </Link>
          <Link to='/cLink' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-blue hover:text-white gap-2'>
            <FaPhoneAlt /><p>Contect Us</p>
          </Link>
          <Link to='/' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-blue hover:text-white gap-2'>
            <IoIosLogOut /> <p>Log out</p>
          </Link>





        </div>

        {/* left */}
        <div className='w-[75%] h-full right-1 border-2 p-6 relative text-black ml-4  '  >
          <h1 className='text-[2.1rem]'>Welcome Nitish Sah</h1>
          <div className='w-[30%] h-[2px] bg-red-600'></div>
          <p className='mt-2'>how are you feeling today?</p>
          <img className='size-[350px] right-4 absolute top-4 ' src='/18784742_cuteanimated_269-removebg-preview (1).png'></img>

          <div className='h-[200px] rounded-md  mt-4 bg-blue '>
            <h1 className='text-[2.4rem] ml-3 w-[50%]  text-white'>Find the best Docter with health care</h1>
            <p className='ml-3 text-white mt-3'>Appoint the docter and get finest medical service</p>
          </div>
          <div className=' mt-4'>
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-100 h-[50px] text-[1rem] ">
                <tr>
                  <th className="border border-gray-400 p-2">Vaccine</th>
                  <th className="border border-gray-400 p-2">Age</th>
                  <th className="border border-gray-400 p-2">Dose</th>

                  <th className="border border-gray-400 p-2">Site</th>
                </tr>
              </thead>
              <tbody className="">
                {data.map((item, index) => (
                  <tr className="hover:bg-cyan-100" key={index}>
                    <td className="border border-gray-400 p-2">{item.Vaccine}</td>
                    <td className="border border-gray-400 p-2">{item.Age}</td>
                    <td className="border border-gray-400 p-2">{item.Dose}</td>

                    <td className="border border-gray-400 p-2">{item.Site}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div >
      </div>
    </div>
  )
}

export default DashBoard
