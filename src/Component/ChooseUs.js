import React from 'react'
import { Link } from 'react-router-dom'

const ChooseUs = () => {
    return (
        <div className="flex flex-col gap-[3rem] w-full h-fit py-2 my-4 border-t-2">
            <div className='text-[3rem] text-darkGreen text-center font-bold uppercase my-4'>Why You Choose Us!</div>
            <div className="w-[70%] mx-auto">
                <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                    <div className="md:w-[50%]">
                        <h2 className="text-[2.5rem] font-semibold capitalize">Dedicated doctors with the core mission to help.</h2>
                        <p className="text-[1.2rem]  capitalize">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <Link to="/contact"><div className='px-4 py-3  bg-lightBlue rounded-md w-fit mt-4 font-semibold text-black'>See our doctors ~</div></Link>
                    </div>
                    <img alt="image3" src="https://img.freepik.com/free-photo/surgeons-performing-operation-operation-theater_107420-64891.jpg?w=1060&t=st=1706522378~exp=1706522978~hmac=2931d8ab8319c350e7e9e304ec568efc62bcbd34f73db4af46f91f00efa65d59" className="md:w-[360px] md:h-[360px] w-[90%] aspect-square" />
                </div>
            </div>
            <div className="w-[70%] mx-auto">
                <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between">
                    <div className="md:w-[50%]">
                        <h2 className="text-[2.5rem] font-semibold capitalize">Get access to specialty tests and breakthrough information.
                        </h2>
                        <p className="text-[1.2rem]  capitalize">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </p>
                        <Link to='/contact'>
                            <div className='px-4 py-3  bg-lightBlue rounded-md w-fit 
                            mt-4 font-semibold text-black'>Find test
                            </div>
                        </Link>
                    </div>

                    <img alt="image1" src="https://img.freepik.com/free-photo/close-up-researcher-working-with-microscope_23-2148882102.jpg?w=1060&t=st=1706223955~exp=1706224555~hmac=f2adc1d6ae7295716e5b4fab6bf50b729540994088a71ea5822efa0d967bb38e" className="md:w-[360px] md:h-[360px] w-[90%] aspect-square" />
                </div>
            </div>
            <div className="w-[70%] mx-auto">
                <div className="flex  flex-col-reverse md:flex-row justify-between items-center">
                    <div className="md:w-[50%]">
                        <h2 className="text-[2.5rem] font-semibold capitalize">Find out how we can help you.</h2>
                        <p className="text-[1.2rem]  capitalize">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <button className='px-4 py-3  bg-lightBlue rounded-md w-fit 
                            mt-4 font-semibold text-black'>
                            <Link to='https://www.videosdk.live/prebuilt/demo' target='_blank'>
                                Book a virtual appointment
                            </Link>
                        </button>
                    </div>
                    <img alt="image2" src="https://img.freepik.com/free-photo/cropped-photo-boy-s-shoulder-with-stick-bandaid-vaccination_1157-51964.jpg?w=1060&t=st=1706224076~exp=1706224676~hmac=98456c25cb2aa3a56d79c810328b345f7776b5883b62b878c334c837a23b4468" className="md:w-[360px] md:h-[360px] w-[90%] aspect-square" />
                </div>
            </div>
        </div>
    )
}

export default ChooseUs