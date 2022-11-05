import React from "react";
import {
  Container,
  SingleCardContainer,
} from "../../assets/styles/main-style/card-style";
import SingleCard from "./SingleCard";
import { data } from "../../data";

const Cards = () => {
  return (
    <Container>
      <SingleCardContainer>
        {data.map((item) => {
          return <SingleCard item={item} />;
        })}
      </SingleCardContainer>
    </Container>
  );
};

export default Cards;
