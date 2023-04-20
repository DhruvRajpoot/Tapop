import styled from "styled-components";

export const ImageViewContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    min-height: 60vh;
  }
`;

export const ImageWrapper = styled.button`
  outline: none;
  border: none;
  width: calc(15rem + 8vw);
  height: 80%;
  transform: scale(1);
  padding: 0 1rem;
  position: relative;
  background: transparent;
`;

export const Image = styled.img`
  padding: 1rem;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  transition: transform 0.5s;
  filter: drop-shadow(0 0 8px rgb(24, 5, 47));
  border-radius: 10px;
  background: rgb(224, 161, 255);
  background: linear-gradient(
    144deg,
    rgba(224, 161, 255, 0.1540266106442577) 53%,
    rgba(161, 118, 255, 0.6044467787114846) 100%
  );
  box-shadow: 0 0 10px rgb(24, 5, 47);

  @media (max-width: 768px) {
    min-height: 50vh;
  }
`;

export const BackImage = styled(Image)`
  transform: rotateY(180deg);
`;
