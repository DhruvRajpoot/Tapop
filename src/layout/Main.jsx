import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import { MainContainer, MainContent } from "./MainStyle";

const Main = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <Sidebar />
        <MainContent />
      </MainContainer>
    </>
  );
};

export default Main;
