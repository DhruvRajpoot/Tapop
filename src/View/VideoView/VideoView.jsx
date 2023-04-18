import React from 'react'
import { Video, VideoViewContainer } from './VideoViewStyle'

const VideoView = () => {
  return (
    <VideoViewContainer>
        <Video src="https://www.youtube.com/embed/5LNDHzhbGPg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
    </VideoViewContainer>
  )
}

export default VideoView
