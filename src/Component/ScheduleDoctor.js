import React from 'react'
import { Link } from 'react-router-dom'

const ScheduleDoctor = () => {
    return (
            <div className="w-full h-fit">
                <div className="w-full h-fit max-w-[1600px] bg-darkGreen py-[5rem]">
                    <div className="text-center w-[60%] mx-auto">
                        <h2 className="text-[3rem] font-semibold capitalize text-white tracking-tight leading-[3.5rem]">Schedule an in person or virtual appointment today</h2>
                        <p className="text-[1.1rem] text-gray-200 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                    <div className=" w-[60%] flex justify-center mx-auto mt-4 ">
                        <div className='mr-[1.5rem] px-4 py-3  bg-lightBlue rounded-md'>
                        <Link to='/contact' className="">
                            <span className=" capitalize font-semibold">Book in person appointment</span>
                        </Link>
                        </div>
                        <button className="ml-[1.5rem] px-4 py-3 bg-lightBlue rounded-md" >
                            <span className=" capitalize font-semibold">Book virtual appointment</span>
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default ScheduleDoctor