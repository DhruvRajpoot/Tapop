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
    const imageSrc=`${process.env.REACT_APP_SERVER_BASEURL}/public/images/${image}`;

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
        <Anchor href={imageSrc} target="_blank" title="view in full screen"><Img src={imageSrc} alt="form image" /></Anchor>
      </ContentElement>
    </FormElementContainer>
  );
};

export default FormElement;
