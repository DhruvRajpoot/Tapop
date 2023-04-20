import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(1rem + 1vw);
  `;

export const Heading = styled.h1`
  text-align: center;
  font-size: calc(1.5rem + 1vw);
  `;

export const FormWrapper = styled.div`
 display: flex;
 justify-content: center;
 `;

export const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: calc(1rem + 1vw);
  width: 86%;

  @media (max-width: 768px) {
    width: 100%;
  }
  `;
