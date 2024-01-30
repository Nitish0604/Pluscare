import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { FaBlog } from "react-icons/fa";
import { GiBilledCap } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";

const DashBoard = () => {
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
          
          
            <button className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-blue hover:text-white gap-2 ' >
            <FaHome /> <p>Home</p>
            </button>
          

          <button className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-blue hover:text-white gap-2' >
          <FaBlog /><p>Blog</p>
          </button>
          <button className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-blue hover:text-white gap-2'>
          <GiBilledCap /><p>Appointment</p>
          </button>
          <div className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-blue hover:text-white gap-2'>
          <FaPhoneAlt /><p>Contect Us</p> 
          </div>
          <button className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-blue hover:text-white gap-2'>
          <IoIosLogOut /> <p>Log out</p>
          </button>
          
          
          


        </div>

        {/* left */}
        <div className='w-[75%] h-full right-1 border-2 p-6 relative text-black ml-4 relative '  >
          <h1 className='text-[2.1rem]'>Welcome Nitish Sah</h1>
          <div className='w-[30%] h-[2px] bg-red-600'></div>
          <p>how are you feeling today?</p>
          <img className='size-[350px] right-4 absolute top-4 ' src='/18784742_cuteanimated_269-removebg-preview (1).png'></img>

          <div className='h-[200px] rounded-md  mt-4 bg-blue '>
           <h1 className='text-[2.4rem] ml-3 w-[50%]  text-white'>Find the best Docter with health care</h1>
           <p className='ml-3 text-white mt-3'>Appoint the docter and get finest medical service</p>
          </div>
          <div className=' mt-4'>
          <table className="border-collapse border w-full">
      <thead>
        <tr>
          <th className="border border-gray-400 p-2">Vaccine</th>
          <th className="border border-gray-400 p-2">Age</th>
          <th className="border border-gray-400 p-2">Dose</th>
          
          <th className="border border-gray-400 p-2">Site</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
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