import React, { useContext } from "react";
import {  LogoContainer, SideLogoWrapper, SidebarWrapper, Text,CustomLink} from "./SidebarStyle";
import { Logo } from "../Navbar/Navbar.style";
import logo from "../../assets/images/logo.png";
import Button from "../Button/Button";
import { GiClick } from "react-icons/gi";
import { AiOutlineForm } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { AppContext } from "../../Context/AppContext";

const Sidebar = () => {
  const { sidebarIsOpen,setSidebarIsOpen,setModalIsOpen,modalIsOpen} = useContext(AppContext);
  const openModal = () => {
    setModalIsOpen(!modalIsOpen);
    setSidebarIsOpen(!sidebarIsOpen);
  };

  const closeSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };
  
  return (
    <SidebarWrapper isOpen={sidebarIsOpen}>
      <LogoContainer>
        <SideLogoWrapper to='/'>
          <Logo src={logo} alt="Logo" />
          <Text>Tapop</Text>
        </SideLogoWrapper>
        <CustomLink to='/'><Button onClickFunc={()=>{closeSidebar()}} icon={<FaHome />} title="Home"/></CustomLink>
        <CustomLink to='/forms'><Button onClickFunc={()=>{closeSidebar()}} icon={<GiClick />} title="Show Forms"/></CustomLink>
      </LogoContainer>
      <Button onClickFunc={() => {openModal()}} icon={<AiOutlineForm />} title="Fill Form"/>
    </SidebarWrapper>
  );
};

export default Sidebar;
