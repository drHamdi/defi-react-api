import React from 'react'

import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import Signup from './Signup'
import Featured from './Featured'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'
import Prima from './Prima'
import Testimonial from './Testimonial'


const Home = () => {
  return (
    <>
      < Navbar />
      < Testimonial />
      < Prima />
      < Signup />
      <About />
      < Featured />
      < Contact />
      
      
      < Footer />
    </>
  )
}

export default Home
