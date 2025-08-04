import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import CTA from '@/components/CTA'
import React from 'react'
import Footer from '@/components/Footer'



export const Home = () => {
  return (
    <div className='min-h-screen'>
     <Header />
     <Hero /> 
     <Features /> 
     <CTA />
     <Footer />
    </div>
  )
}

export default Home
