import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  ImageViewContainer,
  ImageWrapper,
  BackImage,
} from "./ImageViewStyle";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";

const ImageView = () => {
  const imgContainer = useRef(null);
  const img = useRef(null);
  const frontImg = useRef(null);
  const backImg = useRef(null);
  const [angle, setAngle] = useState(180);

  const transformImage = (e) => {
    const contraintX = 20;
    const contraintY = 30;
    const { clientX, clientY } = e;
    const { width, height } = window.screen;
    const xCenter = clientX - width / 2;
    const yCenter = clientY - height / 2;
    const xDeg = (yCenter / height) * contraintX;
    const yDeg = (xCenter / width) * contraintY;
    img.current.style.transform = `perspective(500px) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;
  };

  useEffect(() => {
    document.body.addEventListener("mousemove", transformImage);
    document.body.addEventListener("touchmove", transformImage);
  }, []);

  const rotate = () => {
    frontImg.current.style.transform = `rotateY(${angle}deg)`;
    backImg.current.style.transform = `rotateY(${angle + 180}deg)`;
    setAngle(angle + 180);
  };

  return (
    <ImageViewContainer ref={imgContainer}>
      <ImageWrapper ref={img} onClick={rotate}>
        <Image src={image1} alt="image" ref={frontImg} />
        <BackImage src={image2} alt="image" ref={backImg} />
      </ImageWrapper>
    </ImageViewContainer>
  );
};

export default ImageView;
