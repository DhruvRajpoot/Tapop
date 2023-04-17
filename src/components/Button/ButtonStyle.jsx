import styled from "styled-components";

export const ButtonWrapper = styled.button`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.6rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  background: #1f1f1f;
  transition: all 0.2s ease-in-out;
  font-size: 1rem;

  &:hover {
    background: #424242;
  }

  &:active {
    transform: scale(0.95);
  }
`;
