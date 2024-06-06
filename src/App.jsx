// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title/>
        <Programs/>
      </div>
      
    </div>
  )
}

export default App
