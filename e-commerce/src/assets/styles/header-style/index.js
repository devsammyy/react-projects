import styled from "styled-components";
import img from "../../images/bg.jpg";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 100vh;
  background: url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  .overlay {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  background: transparent;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  width: 100%;

  .logo-container {
    padding: 0.5rem;
  }
  .logo-container h1 {
    font-size: 2rem;
    font-weight: 900;
    font-family: Roboto;
    color: yellow;
  }

  nav ul {
    display: flex;
    justify-content: start;
    gap: 2rem;
    list-style: none;
  }
  nav ul li a {
    text-decoration: none;
    font-size: 1.2rem;
    color: #fff;
  }

  .cta {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-inline-end: 1.5rem;
  }
`;

export const ShowcaseContainer = styled.div`
  @keyframes slideIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .primary {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  .primary h1 {
    margin-top: 4rem;
    font-size: ${({ theme }) => theme.h1.fontSize.md + 10 + "px"};
    color: #fff;
    text-align: center;
    @media screen and (max-width: 768px) {
      font-size: 3rem;
    }
    @media screen and (max-width: 550px) {
      font-size: 300%;
    }
  }
  .primary h1 span {
    color: ${({ theme }) => theme.colors.primary};
  }
  .primary {
    animation: slideIn 3s linear;
    position: relative;
  }
  .primary p {
    color: #fff;
    text-align: center;
    font-size: 1.5rem;
    /* line-height: 2; */
    font-style: italic;
  }

  .secondary {
    width: 80%;
    margin: 4rem auto;
    display: flex;
    justify-content: center;
  }
  .secondary .input {
    width: 100%;
    position: relative;
  }
  .secondary .input input[type="text"] {
    padding: 1.5rem;
    border-radius: 0.5rem;
    width: 100%;
    font-size: 1.5rem;
  }
  .secondary .input img {
    position: absolute;
    top: 5px;
    right: 15px;
    cursor: pointer;
  }
`;
