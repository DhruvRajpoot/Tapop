import React from 'react'
import ImageView from '../ImageView/ImageView';
import VideoView from '../VideoView/VideoView';
import { HeroContainer } from './HeroStyle';

const Hero = () => {
  return (
    <HeroContainer>
      <VideoView/>
      <ImageView/>
    </HeroContainer>
  )
}

export default Hero;