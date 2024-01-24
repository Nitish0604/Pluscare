import React from 'react'
import { useState } from 'react';

const Subcription = () => {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    childName: '',
    childDob: '',
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
    <div className='relative'>
      <div className='absolute top-28 left-[15%] mt-9 z-[100] shadow-inner '>
        <div className='w-[70vw] h-[80vh] bg-[rgba(103,168,233,0.82)] rounded-md flex justify-center items-center'>
          <div className='w-[90vw] h-[100%] flex flex-col gap-10'>
            <div className='flex '>
              <div className='text-4xl text-center font-semibold font-roboto pt-2 mx-auto'>Subscription</div>

            </div>
            <div className='w-[90%] mx-auto  bg-[#ffffff] rounded-md p-4 h-fit gap-2'>
              <div className='flex  w-full '>

                <form onSubmit={handleSubmit} className="text-xl grid grid-row-2 ">
                  <div className='h-[80%] grid grid-rows-4 gap-2'>
                    <div className='flex justify-evenly'>
                      <label className="border-2" htmlFor="name">Parent Name:</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />


                      <label htmlFor="email">Parent Email:</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className='flex justify-evenly'>
                      <label htmlFor="childName">Child Name:</label>
                      <input
                        type="text"
                        id="childName"
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="childDob">Child Date of Birth:</label>
                      <input
                        type="date"
                        id="childDob"
                        name="childDob"
                        value={formData.childDob}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className='flex justify-evenly'>
                      <label htmlFor="phoneNo">Phone Number:</label>
                      <input
                        type="tel"
                        id="phoneNo"
                        name="phoneNo"
                        value={formData.phoneNo}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="state">State:</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className='flex justify-start'>
                    <label htmlFor="address">Address:</label>
                      <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className='flex justify-evenly'>
                     
                      <label htmlFor="city">City:</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.state}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="pincode">Pincode:</label>
                      <input
                        type="number"
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        required
                      />
                    </div>

                  </div>

                  <button className='w-[137px] h-[42px] bg-[#EAB308] border rounded-md mx-auto ' type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Subcription;