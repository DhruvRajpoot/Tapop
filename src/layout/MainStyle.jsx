import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
`;

export const MainContent = styled.div`
  width: calc(100vw - 250px);
  min-height: 100vh;
  background-color: #e6e6e6;
  padding: 2rem;
  @media (max-width: 768px) {
    width: 100vw;
    min-height: calc(100vh - 5rem);
  }
`;
