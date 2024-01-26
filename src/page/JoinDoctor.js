import React from 'react'
import { useState } from 'react';


const JoinDoctor = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNo: '',
    gender: '',
    qualification: '',
    address: '',
    description: '',
    yearsOfExperience: '',
  });

  function resetForm() {
    setFormData({
      name: '',
      email: '',
      phoneNo: '',
      gender: '',
      qualification: '',
      address: '',
      description: '',
      yearsOfExperience: '',
    });
  }

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Submit data here (e.g., API call)
    resetForm();
  };

  return (
    <div>

      <div className="w-full relative bg-white min-h-[150vh] overflow-hidden text-center text-[48px] text-slate-950 font-roboto">
        <div className=" text-center absolute top-[50px] left-[50%] inline  tracking-[0.01em] leading-[54px] font-semibold">
          Join as Doctor
        </div>
        <img
          className="absolute top-[10px] ] rounded-[27px] w-[30%] h-[75%] object-cover"
          alt=""
          src="/rectangle-5.png"
        />
        <div className="absolute top-[130px] left-[400px] w-[60%] min-h-[80vh] h-fit rounded-lg bg-gray-100 text-lg p-4" >
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-[1.5rem] justify-evenly w-full '>
              {/* Name and mail */}
              <div className=' w-full flex h-[33%] justify-around '>
                <div className='flex flex-col items-start w-[50%]'>
                  <label htmlFor="name">Name:</label>
                  <input
                    className=" rounded-lg shadow-md px-2 w-[90%] h-[40px] "
                    type="text"
                    id="name"
                    name="name"
                    placeholder='Enter Your Name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='flex flex-col items-start w-[50%]'>
                  <label htmlFor="email">Email:</label>
                  <input
                   className=" rounded-lg shadow-md px-2 w-[90%] h-[40px] "
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Enter Your Email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              {/* phone and gender */}
              <div className=' w-full flex h-[33%] justify-around '>
                <div className='flex flex-col items-start w-[50%]'>
                  <label htmlFor="phoneNo">Phone Number:</label>
                  <input
                   className=" rounded-lg shadow-md px-2 w-[90%] h-[40px] "
                    type="number"
                    id="phoneNo"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='flex flex-col items-start w-[50%]'>
                  <label htmlFor="gender">Gender:</label>
                  <select id="gender" name="gender" value={formData.gender} onChange={handleChange}
                  className='rounded-lg px-3 h-[40px]'>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

              </div>
              {/* qualification and gender */}
              <div className=' w-full flex h-[33%] justify-around '>
                <div className='flex flex-col items-start w-[50%]'>
                  <label htmlFor="qualification">Qualification:</label>
                  <input
                   className=" rounded-lg shadow-md px-2 w-[90%] h-[40px] "
                    type="text"
                    id="qualification"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className='flex flex-col items-start w-[50%]'>
                  <label htmlFor="yearsOfExperience">YRS EXP:</label>
                  <input
                    type="number"
                    className=" rounded-lg shadow-md px-2 w-[90%] h-[40px] "
                    id="yearsOfExperience"
                    name="yearsOfExperience"
                    value={formData.yearsOfExperience}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div >
            </div>

            {/* address */}

            <div className='flex flex-col items-start'>
              <label htmlFor="address">Address:</label>
              <textarea
               className=" rounded-lg shadow-md px-2 w-[100%] h-[90px] "
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            {/* description */}
            <div className='flex flex-col items-start'>
              <label htmlFor="description">
                Description:
                <small>(Provide any additional information you'd like to share)</small>
              </label>
              <textarea
               className=" rounded-lg shadow-md px-2 w-[100%] h-[150px] "
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className='mt-4 bg-darkGreen px-4 py-2 rounded-lg text-white font-bold'>Submit</button>
          </form>
        </div>

      </div>

    </div>
  )
}

export default JoinDoctor