import React, { useContext } from "react";
import { LogoContainer, SideLogoWrapper, SidebarWrapper, Text } from "./SidebarStyle";
import { Logo } from "../Navbar/Navbar.style";
import logo from "../../assets/images/logo.png";
import Button from "../Button/Button";
import { GiClick } from "react-icons/gi";
import { AiOutlineForm } from "react-icons/ai";
import { AppContext } from "../../Context/AppContext";

const Sidebar = () => {
  const { isOpen } = useContext(AppContext);

  return (
    <SidebarWrapper isOpen={isOpen}>
      <LogoContainer>
        <SideLogoWrapper>
          <Logo src={logo} alt="Logo" />
          <Text>Tapop</Text>
        </SideLogoWrapper>
        <Button onclickFunc={() => console.log("Clicked Button 1")} icon={<GiClick/>} title="Button 1" />
        <Button onclickFunc={() => console.log("Clicked Button 2")} icon={<GiClick/>} title="Button 2" />
      </LogoContainer>
        <Button onclickFunc={() => console.log("Clicked 3")} icon={<AiOutlineForm/>} title="Open Form" />
    </SidebarWrapper>
  );
};

export default Sidebar;
