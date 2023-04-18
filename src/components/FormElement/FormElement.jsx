import React from "react";
import {
  Anchor,
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
        <Anchor href={image} target="_blank" title="view in full screen"><Img src={image} alt="form image" /></Anchor>
      </ContentElement>
    </FormElementContainer>
  );
};

export default FormElement;
