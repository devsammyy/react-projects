import React from "react";
import {
  Container,
  Collections,
  H1,
} from "../../assets/styles/main-style/index";
import Cards from "./Cards";

const Main = () => {
  return (
    <Container>
      <Collections>
        <H1>Shop from our Collections</H1>
        <Cards />
      </Collections>
    </Container>
  );
};

export default Main;
