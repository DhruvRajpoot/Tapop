import React, { useContext } from "react";
import { HamBurger, Logo, LogoText, LogoWrapper, NavbarWrapper } from "./Navbar.style";
import { CgMenuGridR } from "react-icons/cg";
import { VscChromeClose } from "react-icons/vsc";
import logo from "../../assets/images/logo.png";
import { AppContext } from "../../Context/AppContext";

const Navbar = () => {
  const { isOpen, setIsOpen } = useContext(AppContext);

  return (
    <NavbarWrapper>
      <LogoWrapper>
        <Logo src={logo} alt="Logo" />
        <LogoText>Tapop</LogoText>
      </LogoWrapper>
      <HamBurger onClick={() => setIsOpen(!isOpen)}>
        {isOpen?<VscChromeClose/>:<CgMenuGridR />}
      </HamBurger>
    </NavbarWrapper>
  );
};

export default Navbar;
