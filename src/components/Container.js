import React from 'react';
import styled from 'styled-components';
import Calculator from './Calculator';
import {useTranslation} from 'react-i18next';

const Main = styled.main`
  display: grid;
  text-align: center;
  padding: 2rem 5vw;
  grid-row-gap: 1rem;
  grid-area: content;
  justify-self: stretch;
`;

const Title = styled.h1`
    padding-top: 2rem;
    color: #37b4be;
    text-align: center;
    text-transform: uppercase;
    font-size: 3rem;
`;

const Container = () => {
    const {t} = useTranslation();

    return (
        <Main>
            <Title>{t('avgLoans')}</Title>
            <Calculator/>
        </Main>
    )
};

export default Container;
