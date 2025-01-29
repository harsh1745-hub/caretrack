import React from 'react'
import HeroSection from '../Components/Hero'
import Features from '../Components/Feautre'
import ServicesSection from './Services'
import Testimonial from '../Components/Testimonal'

const Home = () => {
  return (
    <div >
        <HeroSection/>
        <Features/>
        <ServicesSection/>
        <Testimonial/>
    </div>
  )
}

export default Home
