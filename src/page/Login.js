import React from 'react'
import { useState } from 'react';
import bgImg from "../assets/9094686.jpg"

const Login = () => {

  

  const [formData, setFormData] = useState({ loginId: "", password:"" });
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
      setFormData({ loginId: "", password: "" });
  }
  const submitHandler = async (e) => {
      e.preventDefault();
      console.log('Form Data:', formData);  
      resetForm();
          

      
  }
  return (
    <div className='relative'>
        <div className='absolute top-28 left-[15%] z-[100] shadow-inner  ' id='popup'>
                <div className='w-[70vw] h-[80vh] bg-[rgba(102,166,231,0.82)] rounded-md flex justify-center items-center'>
                    <div className='w-[90vw] h-[80vh] flex flex-col gap-10'>
                        <div className='flex '>
                            <div className='text-4xl text-center font-semibold font-roboto pt-2 mx-auto'>Login Detail</div>
                           
                        </div>
                        <div className='w-[90%] mx-auto bg-[#ffffff] rounded-md p-4 h-fit gap-2'>
                            <div className='flex  w-full '> 
                                <form className='w-[40%] mr-8' onSubmit={submitHandler}>
                                        <div className='flex flex-col gap-10 w-full'>
                                            <div className='flex justify-between'>
                                                <div className='w-full flex flex-col gap-3'>
                                                    <label className='text-lg font-semibold font-roboto'>Login Id</label>
                                                    <input required type='text' name='loginId' onChange={changeHandler} value={formData.loginId} className='w-full h-[50px] p-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:shadow-md'></input>
                                                </div>
                                            </div>
                                            <div className='flex justify-between'>
                                                <div className='w-full flex flex-col gap-3'>
                                                    <label className='font-semibold font-roboto text-lg'>Passward</label>
                                                    <input required type='text' name='password' onChange={changeHandler} value={formData.password} className='w-full h-[50px] p-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:shadow-md'></input>
                                                </div>
                                            </div>
                                            <div className='w-full flex justify-center'>
                                                <button className='w-[137px] h-[42px] bg-[#EAB308] border rounded-md px-[19px] py-[10px] flex justify-center items-center text-[#ffffff] font-roboto font-semibold tracking-tighter'>
                                                    Submit
                                                </button>
                                            </div>
                                        </div>

                                    

                                </form>
                                <div className='w-[60%]  bg-red-500  '>
                                <img src={bgImg} className='w-full h-full rounded-xl'></img>
                                </div>
                            </div>    
                        </div>
                    </div>

                </div>
            </div>
    </div>
  )
}

export default Login