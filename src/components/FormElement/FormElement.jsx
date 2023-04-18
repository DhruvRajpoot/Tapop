import React from "react";
import {
  ContentElement,
  FormElementContainer,
  Img,
  Para,
} from "./FormElementStyle";

const FormElement = (props) => {
    const { name,email,image } = props.data;

  return (
    <FormElementContainer>
      <ContentElement>
        <Para>Name:</Para>
        <Para>{name}</Para>
      </ContentElement>

      <ContentElement>
        <Para>Email:</Para>
        <Para>{email}</Para>
      </ContentElement>

      <ContentElement>
        <Para>Image:</Para>
        <Img src={`${"http://localhost:8080/public/images/"}${image}`} alt="form image" />
      </ContentElement>
    </FormElementContainer>
  );
};

export default FormElement;
