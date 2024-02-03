import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Contact = () => {

  const [allDoctor, setAllDoctor] = useState([]);

  const getAllDoctor = async () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:4000/api/PlusCare/Home/allDoctors',
      headers: {
        // 'Content-Type': 'application/json'
      },
    };

    axios.request(config)
      .then((response) => {
        setAllDoctor(response.data.Doctors);
        // console.log(response.data.Doctors);
      })
      .catch((error) => {
        console.log(error);
      });


  };

  useEffect(() => {
    getAllDoctor();
  }, []);

  
  return (
    <div className='text-black top-[80px]'>
      <p className='text-center text-[3rem] text-darkGreen font-semibold uppercase '>Doctor List</p>
      {allDoctor.map((doctor) => (
        <div key={doctor._id} className=' text-center rounded-md border-2 w-fit p-2 m-2'>
          <p className='font-bold text-[2rem] text-darkGreen'>{doctor.name}</p>
          <p className='text-[1.4rem]'>{doctor.qualification}</p>
          <p className='text-[1.4rem]'>{doctor.gender}</p>
          <p className='text-[1.4rem] text-darkGreen'>Email:<span className='text-black'> {doctor.email}</span></p>
          <p className='text-[1.4rem] text-darkGreen'>PhoneNO:<span className='text-black'> {doctor.phoneNo}</span></p>
          <div className=" flex flex-col-reverse items-center  gap-[2rem] justify-center mx-auto mt-[2rem] mb-[1rem] ">
            <Link target='_blank' to='https://www.videosdk.live/prebuilt/demo'>
              <span className="text-center px-6 py-3 border-2 border-black bg-lightBlue rounded-md text-nowrap capitalize font-semibold">Book virtual appointment</span>
            </Link>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Contact