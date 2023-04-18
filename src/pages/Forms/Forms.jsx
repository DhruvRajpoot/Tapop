import React, { useEffect, useState } from "react";
import axios from "axios";
import { FormContainer, FormWrapper,Heading } from "./FormsStyle";
import FormElement from "../../components/FormElement/FormElement";

const Forms = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:8080/form");
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <FormContainer>
      <Heading>Filled Forms</Heading>
    <FormWrapper>
      {data.map((ele, index) => {
        return <FormElement data={ele} key={index} />;
      })}
    </FormWrapper>
    </FormContainer>
  );
};

export default Forms;

