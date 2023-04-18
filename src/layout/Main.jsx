import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import { MainContainer, MainContent } from "./MainStyle";
import ModalJs from "../View/ModalJs/ModalJs";
import Home from "../pages/Home/Home";
import Form from "../pages/Forms/Forms";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Main = () => {
  return (
      <Router>
        <Navbar />
        <MainContainer>
          <Sidebar />
          <MainContent>
            <ModalJs />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/forms" element={<Form />} />
            </Routes>
          </MainContent>
        </MainContainer>
      </Router>
  );
};

export default Main;
