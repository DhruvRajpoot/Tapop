import React, { useEffect, useState } from "react";
import { FormContainer, FormWrapper, Heading } from "./FormsStyle";
import FormElement from "../../components/FormElement/FormElement";
import useAxios from "../../utils/useAxios";
import Loader from "../../components/Loader/Loader";

const Forms = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const api = useAxios();

  const getData = async () => {
    setLoading(true);
    try {
      const res = await api.get("/form");
      setFormData(res.data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <FormContainer>
          <Heading>Filled Forms</Heading>
          <FormWrapper>
            {(Object.keys(formData).length !== 0 ? formData.data : [])?.map(
              (ele, index) => {
                return <FormElement key={index} data={ele} />;
              }
            )}
          </FormWrapper>
        </FormContainer>
      )}
    </>
  );
};

export default Forms;
