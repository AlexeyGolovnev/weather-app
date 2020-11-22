import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { animated } from 'react-spring';
import bgDay from "./assets/day.jpg";
import bgNight from "./assets/night.jpg";

const GlobalStyle = createGlobalStyle`
    html, body {
      min-width:100%;
      min-height:100%;
      margin:0;
      padding:0;
      font-size:16px;
      font-weight:100;
      font-family:'Roboto', sans-serif;
      color:#ffffff;
      background-attachment: fixed;
      @media screen and (max-width:1368px) {
          font-size:13px;
      }
      @media screen and (max-width:424px) {
          font-size:12px;
      }
    }
    h1, h2, h3, h4, h5, h6, p {
      margin:0;
      padding:0;
    }
    *{
      box-sizing:border-box;
    }
    ul {
      list-style:none;
      margin:0;
      padding:0;
    }
`;

export const AppContainer = styled(animated.div)`
  width:100%;
  min-height:100vh;
  transition: background 1s linear;
  background:url(${({ isday }) => isday ? bgDay : bgNight}) no-repeat center / cover; 
`;
export const Container = styled.div`
  max-width: 1600px;
  min-width: 100%;
  padding: 0 50px;
  margin: 0 auto;
  @media screen and (max-width:767px) {
    padding:15px;
  }
  @media screen and (max-width:550px) {
    padding:5px;
  }
`;
export const HeroTitle = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 100;
`;
export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: ${({ bold }) => (bold ? 500 : 100)};
`;
export const SubTitle = styled.span`
  font-size: 1.5rem;
  font-weight: ${({ bold }) => (bold ? "400" : "100")};
`;
export const Text = styled.span`
  font-size: ${({ big }) => (big ? "5rem" : "1.5rem")};
  font-weight: ${({ bold }) => (bold ? "400" : "100")};
`;
export const LoaderBox = styled.div`
  position:absolute;
  display:flex;
  justify-content:center;
  align-items:center;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
`
export default GlobalStyle;
