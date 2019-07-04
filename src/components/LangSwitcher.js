import React from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';

const Button = styled.button`
    background-color: transparent;
    border: none;
    color: white;
    outline: none;
    
    :hover {
        font-style: italic;
    }
`;

const LangSwitcher = () => {

    const {i18n} = useTranslation();

    const changeLanguage = lng => () => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <Button type="button" onClick={changeLanguage('cs')}>cs</Button>
            <Button type="button" onClick={changeLanguage('en')}>en</Button>
        </div>
    )
};

export default LangSwitcher;
