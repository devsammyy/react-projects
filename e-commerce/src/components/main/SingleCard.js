import React from "react";
import { CardContainer } from "../../assets/styles/main-style/card-style";

const SingleCard = ({ item }) => {
  return (
    <CardContainer key={item.id}>
      <img src={item.imgUrl} alt="img" />
      <h1>{item.name}</h1>
    </CardContainer>
  );
};

export default SingleCard;
