import React from "react";
import loading from "../../assets/loading.gif";
import styled from "styled-components";

const Loader = () => {
  return (
    <LoadingContainer>
      <Image src={loading} alt="loading" />
    </LoadingContainer>
  );
};

export default Loader;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;
