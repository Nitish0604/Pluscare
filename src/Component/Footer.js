import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='w-full h-fit border-t-2'>
                <footer className="mx-auto max-w-[1600px] py-3 my-4">
                    <ul className=" w-full flex justify-center  pb-3 mb-3">
                        <Link to='/' className="px-2 text-[1.1rem] text-darkGreen font-semibold">Home</Link>
                        <Link to='/blogs' className="px-2 text-[1.1rem] text-darkGreen font-semibold">Blogs</Link>
                        <Link to='/contact' className="px-2 text-[1.1rem] text-darkGreen font-semibold">FAQs</Link>
                        <Link to='/dashboard' className="px-2 text-[1.1rem] text-darkGreen font-semibold">DashBoard</Link>
                    </ul>
                    <p className="text-center text-[1.1rem]">© 2023 Plus Care, Inc</p>
                </footer>
        </div>
    )
}

export default Footer