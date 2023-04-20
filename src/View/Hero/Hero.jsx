import React, { useEffect, useRef } from 'react'
import ImageView from '../ImageView/ImageView';
import VideoView from '../VideoView/VideoView';
import { HeroContainer } from './HeroStyle';

const Hero = () => {
  const eleRef=useRef(null);
  const heroRef=useRef(null);

  
  const transformImage = (e) => {
    const contraintX = 20;
    const contraintY = 30;
    const { clientX, clientY } = e;
    const { width, height } = window.screen;
    const xCenter = clientX - width / 2;
    const yCenter = clientY - height / 2;
    const xDeg = (yCenter / height) * contraintX;
    const yDeg = (xCenter / width) * contraintY;
    eleRef.current.style.transform = `perspective(500px) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;
  };

  useEffect(() => {
    heroRef.current.addEventListener("mousemove", transformImage);
    heroRef.current.addEventListener("touchmove", transformImage);
    //eslint-disable-next-line
  }, []);

  
  return (
    <HeroContainer ref={heroRef}>
      <VideoView/>
      <ImageView ref={eleRef}/>
    </HeroContainer>
  )
}

export default Hero;