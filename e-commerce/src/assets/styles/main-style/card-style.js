import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  margin: auto;
  padding-inline: 2rem;
  overflow: hidden;
`;
export const SingleCardContainer = styled.div`
  width: 1800px;

  display: flex;
  gap: 1.5rem;
  position: relative;
`;

export const CardContainer = styled.div`
  width: 250px;
  height: 300px;
  background-color: #fff;
  box-shadow: 5px 5px 20px #f2f2f2, -5px -5px 20px #f2f2f2;
  border-radius: 0.8rem;
  margin-block: 2rem;
  img {
    width: 100%;
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
  }
  /* animation: slide 10s linear infinite;
  transition: all 25s ease;
  @keyframes slide {
    from {
      transform: translate(-1800px);
    }
    to {
      transform: translate(0px);
    }
  } */
`;
