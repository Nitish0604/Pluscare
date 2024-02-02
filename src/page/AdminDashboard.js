import { useState } from 'react'
import './AdminDashboard.css'
import Header from '../Component/Header'
import Sidebar from '../Component/Sidebar'
import Home from '../Component/Home'

function App({isLoggedIn,setIsLoggedIn}) {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const[dashboard ,setDashboard] =useState(true);
  const[patient ,setPatient] =useState(false);
  const[doctor ,setDoctor] =useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}
      setDashboard={setDashboard} setDoctor={setDoctor} setPatient={setPatient} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Home patient={patient} doctor={doctor} dashboard={dashboard} />
    </div>
  )
}

export default App