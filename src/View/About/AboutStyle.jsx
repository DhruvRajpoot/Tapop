import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  color: #45037f;
`;
export const Heading = styled.h1`
  width: 40vw;
  font-size: calc(1.5rem + 0.5vw);

  @media (max-width: 768px) {
    width: 90%;
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80vw;

  @media (max-width: 768px) {
    gap: 1.5rem;
    flex-direction: column;
    width: 90%;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 30%;
  height: 15rem;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.16);
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    transform: scale(1.03);
    transition: all .3s;
  }
`;

export const Icon = styled.img`
  width: 5rem;
  height: 5rem;
`;

export const Desciption = styled.h3``;
