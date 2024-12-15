import { styled, createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyled = createGlobalStyle`
body {
    font-family: "Inter", sans-serif;
    margin: 0;
}

h1, h2, h3, h4, h5, h6, p {
    margin: 0;
}

ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
}

a {
   text-decoration: none;
}

img {
    display: block;
}

button {
  cursor:pointer
}
`;

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  min-width: 320px;
  max-width: 1200px;
`;

export const Section = styled.section`
  min-height: 101vh;
  background-color: #f3f3f3;
  z-index: 1;
  padding-top: 220px;
  @media screen and (min-width: 850px) {
    padding-top: 150px;
  }
  padding-bottom: 50px;
`;
