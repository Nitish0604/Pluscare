import React from 'react'
import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsFillGearFill }
    from 'react-icons/bs'

import logo from '../assets/logo4.png';
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Sidebar({ openSidebarToggle, OpenSidebar, setDoctor, setPatient, setDashboard, setIsLoggedIn, setIsMenuOpen }) {

    
    const navigate = useNavigate();

    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <img src={logo} alt="logo" className='h-[2.4rem] aspect-auto md:h-[4rem] mix-blend-multiply' />
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li onClick={() => {
                    setDashboard((prev) => (!prev));
                    setDoctor(false);
                    setPatient(false);
                }}
                    className='sidebar-list-item'>
                    <button >
                        <BsGrid1X2Fill className='icon' /> Dashboard
                    </button>
                </li>
                <li
                    onClick={() => {
                        setDashboard(false);
                        setDoctor(true);
                        setPatient(false);
                    }}
                    className='sidebar-list-item'>
                    <button>
                        <BsFillArchiveFill className='icon' /> Doctor List
                    </button>
                </li>
                <li
                    onClick={() => {
                        setDashboard(false);
                        setDoctor(false);
                        setPatient(true);
                    }}
                    className='sidebar-list-item'>
                    <button>
                        <BsFillGrid3X3GapFill className='icon' /> Patient List
                    </button>
                </li>

                <li className='sidebar-list-item'>
                    <button
                        onClick={() => {
                            setIsLoggedIn(false);
                            toast.success("Logged Out");
                            // setIsMenuOpen((prev) => !prev);
                            navigate("/");
                        }}>
                        <BsFillGearFill className='icon' />Log Out
                    </button>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar