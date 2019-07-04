import React from 'react';
import styled from 'styled-components';
import LangSwitcher from "./LangSwitcher";

const StyledHeader = styled.header`
    background-color: #37b4be;
    justify-self: normal;
    grid-area: navigation;
    grid-template-columns: 1fr auto auto;
    align-items: center;
    display: grid;
    grid-column-gap: 1rem;
    padding: 0.25rem 1rem;
`;

const Header = () => (
    <StyledHeader>
        <img src="zonky-logo.svg" alt="" />
        <LangSwitcher/>
        <a href="https://github.com/raydric/zonky-loans-frontend" target="_blank" rel="noopener noreferrer">
            <img src="github-logo.png" alt=""/>
        </a>
    </StyledHeader>
);

export default Header;
