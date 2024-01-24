import React from 'react'

//components parts
import Hero from '../Component/Hero';
import About from '../Component/About';

const Home = ({isLoggedIn,setIsLoggedIn}) => {
  return (
    <div>
      <Hero/>
      <About isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    </div>
  )
}

export default Home