import React, { forwardRef, useRef, useState } from "react";
import {
  Image,
  ImageViewContainer,
  ImageWrapper,
  BackImage,
} from "./ImageViewStyle";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";

const ImageView = forwardRef((props,ref) => {
  const frontImg = useRef(null);
  const backImg = useRef(null);
  const [angle, setAngle] = useState(180);

  const rotate = () => {
    frontImg.current.style.transform = `rotateY(${angle}deg)`;
    backImg.current.style.transform = `rotateY(${angle + 180}deg)`;
    setAngle(angle + 180);
  };

  return (
    <ImageViewContainer>
      <ImageWrapper ref={ref} onClick={rotate}>
        <Image src={image1} alt="image" ref={frontImg} />
        <BackImage src={image2} alt="image" ref={backImg} />
      </ImageWrapper>
    </ImageViewContainer>
  );
});

export default ImageView;
