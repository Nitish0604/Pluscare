import React from 'react'
import { useState } from 'react';

const Subcription = () => {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    childName: '',
    childDob: '',
    genger: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className=' w-full h-screen mt-14 items-center flex justify-center  shadow-inner '>
      <div className='w-[80vw] h-[116vh] bg-[rgba(103,168,233,0.82)] rounded-md flex justify-center items-center'>
        <div className='w-[100%] h-[100%] flex flex-col gap-10'>
          <div className='flex '>
            <div className='text-4xl text-center font-semibold font-roboto pt-2 mx-auto'>Subscription</div>
          </div>
          <div className='w-[90%] h-[75%] mx-auto  bg-[#ffffff] rounded-md p-4  gap-4'>
            <div className='flex h-[100%] bg-yellow-50'>

              <form onSubmit={handleSubmit} className=" text-base grid grid-row-2 w-[100%] h-[100%] ">
                <div className=' grid grid-rows-5 grid-cols-2 gap-1 w-[100%] h-[95%] p-2'>
                  <div className='grid grid-col-2 '>
                    <label className="flex items-center" htmlFor="name">Parent Name:</label>
                    <input
                      className="rounded-xl shadow-md px-2"
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='grid grid-rows-2 '>
                    <label className='flex items-center mt-1' htmlFor="email">Parent Email:</label>
                    <input
                      className="rounded-xl shadow-md px-2"
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='grid grid-rows-2 '>
                    <label className='flex items-center mt-1' htmlFor="childName">Child Name:</label>
                    <input
                     className="rounded-xl shadow-md px-2"
                      type="text"
                      id="childName"
                      name="childName"
                      value={formData.childName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='grid grid-rows-2 '>
                    <label className='flex items-center mt-1' htmlFor="childDob">Child Date of Birth:</label>
                    <input
                      className="rounded-xl shadow-md px-2"
                      type="date"
                      id="childDob"
                      name="childDob"
                      value={formData.childDob}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='grid grid-rows-2 '>
                        <label className='flex items-center mt-1' htmlFor='gender'>Gender</label>
                        <select className="rounded-xl shadow-md px-2" name="gender" id='gender'  value={formData.gender} onChange={handleChange}>
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      
                    </div>
                  <div className='grid grid-rows-2 '>
                    <label className='flex items-center mt-1' htmlFor="phoneNo">Phone Number:</label>
                    <input
                      className="rounded-xl shadow-md px-2"
                      type="tel"
                      id="phoneNo"
                      name="phoneNo"
                      value={formData.phoneNo}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='grid grid-rows-2 '>
                    <label className='flex items-center mt-1' htmlFor="state">State:</label>
                    <input
                      className="rounded-xl shadow-md px-2"
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className='grid grid-rows-2 '>
                    <label className='flex items-center mt-1' htmlFor="city">City:</label>
                    <input
                     className="rounded-xl shadow-md px-2"
                      type="text"
                      id="city"
                      name="city"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className='grid grid-rows-2 '>
                    <label className='flex items-center mt-1' htmlFor="pincode">Pincode:</label>
                    <input
                      className="rounded-xl shadow-md px-2"
                      type="number"
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='grid grid-rows-2 '>
                    <label className='flex items-center mt-1' htmlFor="address">Address:</label>
                    <textarea
                      className="rounded-xl shadow-md px-2"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>

                </div>
                <div className='h-[15%] flex justify-center'>
                  <button className='w-[137px] h-[42px] bg-[#EAB308] border rounded-md px-[19px] py-[10px] flex justify-center items-center text-[#ffffff] font-roboto font-semibold tracking-tighter' type="submit">Submit</button>
                </div>

              </form>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Subcription;