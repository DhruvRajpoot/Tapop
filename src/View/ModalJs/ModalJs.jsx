import React, { useContext, useRef } from "react";
import Modal from "react-modal";
import {
  ModalWrapper,
  CloseButton,
  Description,
  FileInput,
  Form,
  Heading,
  Input,
  InputWrapper,
  Label,
  SubmitButton,
  ThankYou,
  ThankYouWrapper,
} from "./ModalStyle";
import { AppContext } from "../../Context/AppContext";
import { AiFillCloseSquare } from "react-icons/ai";
import useAxios from "../../utils/useAxios";

Modal.setAppElement("#root");
const ModalJs = () => {
  const { modalIsOpen, setModalIsOpen } = useContext(AppContext);
  const modalRef = useRef(null);
  const thankYouRef = useRef(null);
  const isScreenSmall = window.matchMedia("(max-width: 768px)").matches;
  const formData = new FormData();
  const api = useAxios();

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.append("name", e.target.name.value);
    formData.append("email", e.target.email.value);
    formData.append("image", e.target.image.files[0]);

    try {
      await api.post("/form/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (err) {
      console.log(err);
    }
    modalRef.current.style.visibility = "hidden";
    thankYouRef.current.style.visibility = "visible";
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const customStyles = {
    content: {
      zIndex: "1000",
      width: isScreenSmall ? "90vw" : "50vw",
      height: "fit-content",
      top: 0,
      left: isScreenSmall ? 0 : "250px",
      right: 0,
      bottom: 0,
      margin: "auto",
      filter: "drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.256))",
      padding: "calc(1rem + .5vw)",
      backgroundColor: "#fefbfb",
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <CloseButton onClick={closeModal} title="close">
        {" "}
        <AiFillCloseSquare />
      </CloseButton>
      <ModalWrapper ref={modalRef}>
        <Heading>Details Form</Heading>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <Label>Name</Label>
            <Input type="text" name="name" placeholder="Name" required />
          </InputWrapper>
          <InputWrapper>
            <Label>Email</Label>
            <Input type="email" name="email" placeholder="Email" required />
          </InputWrapper>
          <InputWrapper>
            <Label>
              {" "}
              Image <small>&#40;only png/jpeg &#41;</small>
            </Label>
            <FileInput
              type="file"
              name="image"
              placeholder="Image"
              accept="image/png, image/jpeg"
              required
            />
          </InputWrapper>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
        <ThankYouWrapper ref={thankYouRef}>
          <ThankYou>Congratulation</ThankYou>
          <Description>Form has been filled successfully &#128521;</Description>
        </ThankYouWrapper>
      </ModalWrapper>
    </Modal>
  );
};

export default ModalJs;
