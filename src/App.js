import React, {Fragment} from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import Header from './components/Header';
import Container from "./components/Container";

const GlobalStyle = createGlobalStyle`
  html, body {
      margin: 0;
      font-family: "Comic Sans MS", cursive, sans-serif;
}
`;

const StyledApp = styled.div`
    display: grid;
    justify-items: center;
    grid-template-areas:
        "navigation navigation navigation navigation navigation"
        ". content content content .";
`;

const App = () => (
    <Fragment>
        <StyledApp>
            <Header/>
            <Container/>
        </StyledApp>
        <GlobalStyle/>
    </Fragment>
);

export default App;
