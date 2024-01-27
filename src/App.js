// pages part
import Home from './page/Home';
import Blogs from './page/Blogs';
import NoPage from './page/NoPage';
import Contact from './page/Contact';
import Subscription from './page/Subscription';
import DashBoard from './page/DashBoard';
import Login from './page/Login';
import JoinDoctor from './page/JoinDoctor';

// components part
import Navbar from './Component/Navbar';
import PrivateRoute from './Component/PrivateRoute';


//react components
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="relative">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="joinDoctor" element={<JoinDoctor />} />
        <Route path="/blogs" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Blogs />
          </PrivateRoute>

        } />
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <DashBoard />
          </PrivateRoute>

        } />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
