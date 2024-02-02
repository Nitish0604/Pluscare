import React from 'react'
import { useState } from 'react';
import logo from "../assets/logo.png"
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const Subscription = () => {

  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    childName: '',
    childDob: '',
    gender: '',
    phoneNo: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
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
    console.log('Form submitted:', formData);
    setVisible(true);
  };

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      }
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  // function clickHandler(){
  //   // toast.success("successfully Purchased!");
  //   // navigate("/");

  // }

  // const clickHandler = (e) => {
  //   e.preventDefault();
  //   if (inputValue.trim()) {
  //     // socket.emit("chat message", inputValue);
  //     setInputValue("");
  //   }
  // };

  const clickHandler = async (e) => {
    e.preventDefault();
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/initializePayment"
    );

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/PlusCare/Home/payment/razorpay",
        { amount: 500 }
      );
      const options = {
        key: "rzp_test_j3uMC3pJNVXJpR",
        amount: data.amount,
        currency: data.currency,
        name: "Service",
        description: "Test Transaction",
        order_id: data.id,
        handler: async (response) => {
          try {
            const verifyUrl = "http://localhost:4000/api/PlusCare/Home/payment/verifyPayment";
            const { data } = await axios.post(verifyUrl, {
              ...response,
              // sid,
              // tid,
            });
            console.log(data);
          } catch (error) {
            console.log(error);
          }
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();

    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div className=' w-full h-fit'>

      <div className=' w-full h-fit  flex flex-col justify-center'>
        <div className='w-full text-center mb-[1rem]'>
          <div className='relative flex flex-col items-center mb-[120px] w-full h-[60px]'>
            <img src={logo} alt='logo' className='h-[500%] w-fit mix-blend-multiply' />
          </div>
          <div className='text-[2.5rem] uppercase text-center font-semibold  pt-2 mx-auto'>Subscription</div>
          <p className='text-darkGreen font-semibold'>Stay Connected: Subscribe for Exclusive Updates and Special Offers</p>
        </div>
        <div className='flex flex-col-reverse lg:flex-row justify-around items-center lg:items-start'>
          <div className='lg:w-[60%] p-4'>
            <form onSubmit={handleSubmit} className="w-[100%] h-[100%] flex flex-col gap-[2rem] p-[2rem]">
              {/* parent and child name */}
              <div className='flex md:flex-row flex-col justify-between'>
                <div className='md:w-[40%] flex flex-col'>
                  <label className="mb-2 font-semibold text-[1.1rem]" htmlFor="name">Parent Name:</label>
                  <input
                    className="border-b-2 border-b-darkGreen w-[100%] h-[50px] p-2"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='md:w-[40%] flex flex-col'>
                  <label className='mb-2 font-semibold text-[1.1rem]' htmlFor="childName">Child Name:</label>
                  <input
                    className="border-b-2 border-b-darkGreen w-[100%] h-[50px] p-2"
                    type="text"
                    id="childName"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              {/* email,gender and dob */}
              <div className='flex md:flex-row flex-col justify-between'>
                <div className='md:w-[50%] flex flex-col'>
                  <label className='mb-2 font-semibold text-[1.1rem]' htmlFor="email">Parent Email:</label>
                  <input
                    className="border-b-2 border-b-darkGreen w-full  h-[50px] p-2"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>
                <div className='md:w-[20%] flex flex-col'>
                  <label className='mb-2 font-semibold text-[1.1rem]' htmlFor="childDob">Child's DoB:</label>
                  <input
                    className="border-b-2 border-b-darkGreen w-full  h-[50px] p-2"
                    type="date"
                    id="childDob"
                    name="childDob"
                    value={formData.childDob}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='md:w-[20%] flex flex-col'>
                  <label className='mb-2 font-semibold text-[1.1rem]' htmlFor='gender'>Gender</label>
                  <select className="border-b-2 border-b-darkGreen w-full h-[50px] p-2" name="gender" id='gender' value={formData.gender} onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              {/* phoneNo */}
              <div className=''>
                <label className='mb-2 font-semibold text-[1.1rem]' htmlFor="phoneNo">Phone Number:</label>
                <input
                  className="border-b-2 border-b-darkGreen w-full  h-[50px] p-2"
                  type="number"
                  id="phoneNo"
                  name="phoneNo"
                  placeholder='Enter Your Phone No'
                  min="0"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* address */}
              <div className=''>
                <label className='mb-2 font-semibold text-[1.1rem]' htmlFor="address">Address:</label>
                <textarea
                  className="border-2 border-b-darkGreen w-full  h-[100px] p-2"
                  id="address"
                  name="address"
                  maxLength="200"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* state pinCode city */}
              <div className='flex justify-between'>
                <div className='w-[30%] flex flex-col'>
                  <label className='mb-2 font-semibold text-[1.1rem]' htmlFor="state">State:</label>
                  <input
                    className="border-b-2 border-b-darkGreen w-full  h-[50px] p-2"
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className='w-[30%] flex flex-col '>
                  <label className='mb-2 font-semibold text-[1.1rem]' htmlFor="city">City:</label>
                  <input
                    className="border-b-2 border-b-darkGreen w-full  h-[50px] p-2"
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className='w-[30%] flex flex-col '>
                  <label className='mb-2 font-semibold text-[1.1rem]' htmlFor="pincode">Pincode:</label>
                  <input
                    className="border-b-2 border-b-darkGreen w-full  h-[50px] p-2"
                    type="text"
                    id="pincode"
                    name="pincode"
                    maxLength="6"
                    pattern="[0-9]{6}"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className='h-[15%] flex justify-center'>
                <button className='w-[137px] h-[42px] bg-darkGreen border rounded-md px-[19px] py-[10px] flex justify-center items-center text-[#ffffff] font-roboto font-semibold tracking-tighter' type="submit">Submit</button>
              </div>
            </form>
          </div>
          <img src='https://img.freepik.com/free-vector/doctor-injecting-vaccine-patient-illustrated_23-2148821190.jpg?w=740&t=st=1706341496~exp=1706342096~hmac=b0e20ef7b95ebc1d565fb49f46ebfda4c708b45fd0e6933bd610e996986dd690'
            alt="img2" className='w-[40%] aspect-square' />

        </div>
      </div>

      {/* subscription */}
      {
        visible &&
        <div className='w-[60%] mx-auto mb-[2rem] flex-col flex gap-[1rem]'>
          <p className='text-[2.5rem] uppercase text-center font-semibold  pt-2 mx-auto mb-[2rem]'>Your <span className='text-darkGreen'>Subscription's</span> Details</p>
          <div className='flex justify-between'>
            <p className='text-darkGreen text-[1.4rem]'>ParentName:<span className='ml-[1rem] text-black text-[1.2rem] capitalize'>{formData.name}</span></p>
            <p className='text-darkGreen text-[1.4rem]'>ChildName:
              <span className='ml-[1rem] text-black text-[1.2rem] capitalize'>{formData.childName}</span></p>
          </div>
          <p className='text-darkGreen text-[1.4rem]'>Your Email:<span className='ml-[1rem] text-black text-[1.2rem]'>{formData.email}</span></p>
          <p className='text-darkGreen text-[1.4rem]'>Phone No:<span className='ml-[1rem] text-black text-[1.2rem]'>{formData.phoneNo}</span></p>
          <p className='text-darkGreen text-[1.4rem]'>Your Total Amount: <span className='ml-[1rem] text-black text-[1.2rem] capitalize'>₹2000/-</span></p>
          <button onClick={clickHandler} className='bg-blue w-[40%] h-[50px] text-white rounded-xl relative left-[50%] translate-x-[-50%] 
      mt-[1rem]'>Purchase</button>
        </div>
      }


    </div>

  )
}

export default Subscription;