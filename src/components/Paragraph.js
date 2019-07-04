import styled from 'styled-components';

const Paragraph = styled.p`
  margin: 0;
  padding: ${({padding}) => padding};
  font-size: ${({size}) => size};
`;

export default Paragraph;
