import { useState, useEffect } from 'react'
import Hero from './Hero'
import Services from './Services'
import About from './About'
import Contact from './Contact'
import Navigation from './Navigation'

function Home() {
  return (
    <div className="home">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default Home;