import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import { MainContainer, MainContent } from "./MainStyle";
import ModalJs from "../components/ModalJs/ModalJs";

const Main = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <Sidebar />
        <MainContent>
          <ModalJs />
        </MainContent>
      </MainContainer>
    </>
  );
};

export default Main;
