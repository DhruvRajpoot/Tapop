import styled from "styled-components";

export const FormElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 20rem;
  height: fit-content;
  border-radius: 10px;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.256);
  gap: 1rem;
  padding: 1rem;
  background-color: #f5f5f580;

  @media (max-width: 768px) {
    max-width: 100vw;
  }
`;

export const ContentElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const Para = styled.p`
  font-size: 1rem;
`;

export const Img = styled.img`
  width: 100%;
  height: 10rem;
  object-fit: fit;
  border-radius: 10px;
`;

export const Anchor = styled.a`
  text-decoration: none;

  &:hover {
    transform: scale(1.01);
  }
`;