import styled from "styled-components";

export const ButtonWrapper = styled.button`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: calc(.9rem - .4vw) 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  background: #1f1f1f;
  transition: all 0.2s ease-in-out;
  font-size: calc(1.2rem - .2vw);

  &:hover {
    background: #424242;
  }

  &:active {
    transform: scale(0.95);
  }
`;
