import React from 'react'
import Navbar from '../components/Navbar'

import Hero from '../components/Hero'
import Feature from '../components/Feature'
import CTA from '../components/CTA'

function Landing() {
  return (
    <div>
        <Navbar /> 
        <Hero /> 
        <Feature />
        <CTA />
    </div>
  )
}

export default Landing