import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import bg from "./assets/background.jpg";

const GlobalStyle = createGlobalStyle`
    html, body {
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        font-size:16px;
        font-weight:100;
        font-family:'Roboto', sans-serif;
        color:#fff;
        background:url(${bg}) no-repeat center / cover; 
        background-attachment: fixed;
        @media screen and (max-width:1368px) {
            font-size:11px;
        }
    }
    h1, h2, h3, h4, h5, h6, p {
        margin:0;
        padding:0;
    }
    *{
        box-sizing:border-box;
    }
`;
export const Container = styled.div`
  max-width: 1600px;
  width: 100%;
  padding: 0 30px;
  margin: 0 auto;

`;

export const HeroTitle = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 100;
`;
export const Title = styled.h2`
  font-size: 3rem;
  font-weight: ${({ bold }) => (bold ? 500 : 100)};
`;

export const SubTitle = styled.span`
  font-size: 1.8rem;
  font-weight: ${({ bold }) => (bold ? "500" : "100")};
`;
export const Text = styled.span`
  font-size: ${({ big }) => (big ? "5rem" : "2rem")};
  font-weight: ${({ bold }) => (bold ? "500" : "100")};
`;

export default GlobalStyle;
