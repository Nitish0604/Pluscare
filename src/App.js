import Home from './page/Home';
import Blogs from './page/Blogs';
import NoPage from './page/NoPage';
import Contact from './page/Contact';
import Subscription from './page/Subscription';
import DashBoard from './page/DashBoard';
import Login from './page/Login';
import { Route,Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Component/Navbar';
import PrivateRoute from './Component/PrivateRoute';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="/dashboard" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
              <DashBoard/>
          </PrivateRoute>
       
        } />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
