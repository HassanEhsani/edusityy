// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='our PROGRAM' title='What We Offer' />
        <Programs />
        <About/>
      </div>

    </div>
  )
}

export default App
