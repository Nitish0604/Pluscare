import React from 'react'
import { Link } from 'react-router-dom'

const ScheduleDoctor = () => {
    return (
        <div className="w-full h-fit">
            <div className="w-full h-fit max-w-[1600px] mx-auto bg-darkGreen py-[5rem]">
                <div className="text-center md:w-[60%] mx-auto">
                    <h2 className="text-[3rem] font-semibold capitalize text-white tracking-tight leading-[3.5rem]">Schedule an in person or virtual appointment today</h2>
                    <p className="text-[1.1rem] text-gray-200 mt-[2rem] lg:mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
                <div className=" w-[60%] flex flex-col-reverse items-center md:flex-row gap-[2rem] justify-center mx-auto mt-[2rem] ">
                    
                        <Link to='/contact' className="">
                            <span className="text-center capitalize px-4 py-3 text-nowrap  bg-lightBlue rounded-md font-semibold">Book in person appointment</span>
                        </Link>
                        <Link target='_blank' to='https://www.videosdk.live/prebuilt/demo'>
                            <span className="text-center px-6 py-3 bg-lightBlue rounded-md text-nowrap capitalize font-semibold">Book virtual appointment</span>
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default ScheduleDoctor