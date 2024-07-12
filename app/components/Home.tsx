'use client'
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Feature from './features/Feature'
import PopularBurger from './popularburger/PopularBurger'
import Deliver from './Delivery/Deliver'
import Team from './Team/Team'
import Reservation from './Reservation/Reservation'
import NewLetter from './Newsletter/NewLetter'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
  useEffect(()=>{
       const initAOS = async ()=>{await import("aos")
       AOS.init({
        duration:1000,
        easing:"ease",
        once: true,
        anchorPlacement: "top-center",
       })
      };
      initAOS();
  },[])
  return (
    <div className='overflow-hidden'>
    <Hero/>
    <Feature/>
    <PopularBurger/>
    <Deliver/>
    <Team/>
    <Reservation/>
    <NewLetter/>
    </div>
  )
}

export default Home
