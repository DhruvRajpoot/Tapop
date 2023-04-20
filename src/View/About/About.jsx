import React from "react";
import {
  AboutContainer,
  Desciption,
  Heading,
  Icon,
  ItemContainer,
  Wrapper,
} from "./AboutStyle";
import sales from "../../assets/images/sales.png";
import customer from "../../assets/images/customer.png";
import rating from "../../assets/images/experience.png";

const About = () => {
  return (
    <AboutContainer>
      <Heading>Grow faster with help of our customers</Heading>
      <Wrapper>
        <ItemContainer>
          <Icon src={rating} alt="rating and reviews" />
          <Desciption>Rating & Reviews</Desciption>
        </ItemContainer>
        <ItemContainer>
          <Icon src={sales} alt="sales and marketing" />
          <Desciption>Sales and Marketing</Desciption>
        </ItemContainer>
        <ItemContainer>
          <Icon src={customer} alt="customer experience" />
          <Desciption>Customer Experience</Desciption>
        </ItemContainer>
      </Wrapper>
    </AboutContainer>
  );
};

export default About;
