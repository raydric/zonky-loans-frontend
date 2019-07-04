import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: white;
  outline: none;
  padding: 1rem 1rem;
  border: none;
  transition: background-color 200ms ease-in;
  color: ${({color}) => color || "white"};
  
  :hover, :focus, :active {
    color: white;
    background-color: ${({color}) => color || "white"};
  }
`;

const Rating = ({calculate, rating}) => (
    <Button onClick={calculate(rating)} color={rating.color}>
        {rating.percentage}
    </Button>
);

export default Rating;
