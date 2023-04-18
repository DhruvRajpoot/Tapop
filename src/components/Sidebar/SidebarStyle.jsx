import styled from "styled-components";
import { LogoText, LogoWrapper } from "../Navbar/Navbar.style";
import { Link } from "react-router-dom";

export const SidebarWrapper = styled.div`
  width: 250px;
  height: 100vh;
  color: #cacad5;
  background-color: #51567d;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    position: fixed;
    width: 100vw;
    gap: 2rem;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100%)"};
    justify-content: center;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const SideLogoWrapper = styled(LogoWrapper)`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Text = styled(LogoText)`
  color: white;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
`;
