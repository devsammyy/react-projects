import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.light};
`;

export const Collections = styled.section`
  padding: 2rem;
`;

export const H1 = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.h1.fontSize.md - 5 + "px"};
`;
