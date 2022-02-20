import styled from 'styled-components';

import { colors } from '../../styles/variables.styles';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  height: 4rem;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  background-color: ${props =>
    props.theme === 'dark' ? colors.darkContentBg : colors.lightContentBg};
  color: ${props =>
    props.theme === 'dark' ? colors.lightContentBg : colors.darkContentBg};
  transition: background-color 0.25s linear;
`;

export const Link = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  color: inherit;

  transition: all 0.25s;

  &:hover {
    transform: scale(1.25);
  }
`;
