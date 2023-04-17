import React, { useContext } from "react";
import {  LogoContainer, SideLogoWrapper, SidebarWrapper, Text} from "./SidebarStyle";
import { Logo } from "../Navbar/Navbar.style";
import logo from "../../assets/images/logo.png";
import Button from "../Button/Button";
import { GiClick } from "react-icons/gi";
import { AiOutlineForm } from "react-icons/ai";
import { AppContext } from "../../Context/AppContext";

const Sidebar = () => {
  const { sidebarIsOpen,setSidebarIsOpen,setModalIsOpen,modalIsOpen} = useContext(AppContext);
  const openModal = () => {
    setModalIsOpen(!modalIsOpen);
    setSidebarIsOpen(!sidebarIsOpen);
  };
  
  return (
    <SidebarWrapper isOpen={sidebarIsOpen}>
      <LogoContainer>
        <SideLogoWrapper>
          <Logo src={logo} alt="Logo" />
          <Text>Tapop</Text>
        </SideLogoWrapper>
        <Button onClickFunc={() => console.log("Clicked Button 1")} icon={<GiClick />} title="Button 1"/>
        <Button onClickFunc={() => console.log("Clicked Button 2")} icon={<GiClick />} title="Button 2"/>
      </LogoContainer>
      <Button onClickFunc={() => {openModal()}} icon={<AiOutlineForm />} title="Open Form"/>
    </SidebarWrapper>
  );
};

export default Sidebar;
