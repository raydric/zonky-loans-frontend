import React from 'react';
import styled from 'styled-components';

import Rating from './Rating';
import ratings from '../utils/Ratings'

const StyledRatings = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.2);
`;

const Ratings = ({calculate}) => (
    <StyledRatings>
        {ratings.map((rating, index) => {
            return <Rating key={index} calculate={calculate} rating={rating} />
        })}
    </StyledRatings>
);

export default Ratings;
