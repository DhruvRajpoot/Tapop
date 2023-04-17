import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  height: 100%;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: calc(1rem + .5vw);
  right: calc(1rem + .5vw);
  background-color: transparent;
  border: none;
  outline: none;
  color: #cacad5;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1000;
`;

export const Heading = styled.h1`
  text-align: center;
  font-size: calc(1.5rem + .5vw);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: none;
  outline: none;
  border-radius: 5px;
  background: #cacad5;
  font-size: 1rem;
`;

export const FileInput = styled(Input)`
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  &::file-selector-button {
    border-radius: 5px;
    border: none;
    outline: none;
    background: #51567d;
    color: white;
    padding: 0.4rem 0.7rem;
  }
`;
export const SubmitButton = styled.button`
  padding: 0.5rem;
  border: none;
  outline: none;
  border-radius: 5px;
  background: #51567d;
  color: white;
  cursor: pointer;
  font-size: 1.1rem;
  margin-top: 1.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #30334a;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const Label = styled.label``;

export const ThankYouWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 1rem;
  visibility: hidden;
`;

export const ThankYou = styled.h1`
  color: #135c13;
  font-size: calc(2.5rem + .5vw);
`;

export const Description = styled.p`
  font-size: calc(1rem + .3vw);
`;