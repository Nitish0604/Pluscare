// pages part
import Home from './page/Home';
import Blogs from './page/Blogs';
import NoPage from './page/NoPage';
import Contact from './page/Contact';
import Subscription from './page/Subscription';
import DashBoard from './page/DashBoard';
import Login from './page/Login';
import JoinDoctor from './page/JoinDoctor';
import Symptoms from './page/Symptoms'

// components part
import Navbar from './Component/Navbar';
// import PrivateRoute from './Component/PrivateRoute';


//react components
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const excludedPaths = ['/dashboard','/adminDashboard'];
  const location = useLocation();
  return (
    <div className="relative">
      {!excludedPaths.includes(location.pathname) && <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="contact" element={<Contact />} />
        <Route path="symptoms" element={<Symptoms />} />
        <Route path="login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="joinDoctor" element={<JoinDoctor />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/dashboard" element={
            <DashBoard isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
