import styled from 'styled-components';

const Card = styled.div`
  border-radius: 2rem;
  padding: 0;
  margin: 0;
`;

export default Card;

export const InfoCard = styled(Card)`
  padding: 1.5rem;
  transition: transform 0.1s linear;
  &:hover {
    transform: scale(1.02);
  }
`;
