import React from 'react'
import Hero from '../../View/Hero/Hero';
import About from '../../View/About/About';
import { HomeContainer } from './HomeStyle';

const Home = () => {
  return (
    <HomeContainer>
      <Hero/>   
      <About/>
    </HomeContainer>
  )
}

export default Home;