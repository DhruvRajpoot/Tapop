import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  width: 100vw;
  height: 4.5rem;
  position: sticky;
  top: 0;
  background-color: #f6f7ff;
  color: #cacad5;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 0 1rem;
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: calc(.5rem + .5vw);
  align-items: center;
  color: #5e5979;
`;

export const Logo = styled.img`
  width: calc(3rem - .5vw);
  height: calc(3rem - .5vw);
`;

export const LogoText = styled.h1`
  font: 700 1.7rem Courgette;
`;

export const HamBurger = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 2rem;
`;
