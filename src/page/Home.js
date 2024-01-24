import React from 'react'

//components parts
import Hero from '../Component/Hero';
import About from '../Component/About';
import StepPage from '../Component/StepPage';


const Home = ({isLoggedIn,setIsLoggedIn}) => {
  return (
    <div>
      <Hero/>
      <About isLoggedIn={isLoggedIn}/>
      <StepPage isLoggedIn={isLoggedIn}/>
    </div>
  )
}

export default Home