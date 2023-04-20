import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
`;

export const MainContent = styled.div`
  width: calc(100vw - 250px);
  min-height: 100vh;
  background: rgb(212,217,255);
background: linear-gradient(90deg, rgba(212,217,255,0.8040266106442577) 70%, rgba(248,218,255,0532142857142857) 100%);
  padding: calc(.5rem + 1.5vw);
  position: relative;

  @media (max-width: 992px) {
    width: 100vw;
    min-height: calc(100vh - 5rem);
  }
`;
