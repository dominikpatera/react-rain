import styled from 'styled-components';
import { colors, media } from '../../styles/variables.styles';
import { UserSettingsThemeType } from '../../types/userSettings.types';

export const Main = styled.main<MainProps>`
  background-color: ${props =>
    props.theme === 'dark' ? colors.darkContentBg : colors.lightContentBg};
  color: ${props =>
    props.theme === 'dark' ? colors.lightContentBg : colors.darkContentBg};
  padding: 7rem 2rem 4rem;
  min-height: calc(100vh - 4rem);
  transition: background-color 0.25s linear;

  @media screen and (min-width: ${media.md}) {
    padding-inline: 8rem;
  }

  @media screen and (min-width: ${media.lg}) {
    padding-inline: 12rem;
  }

  @media screen and (min-width: ${media.xl}) {
    padding-inline: 18rem;
  }

  @media screen and (min-width: ${media.xxl}) {
    padding-inline: 24rem;
  }

  @media screen and (min-width: ${media.xxxl}) {
    padding-inline: 32rem;
  }
`;

type MainProps = {
  theme: UserSettingsThemeType;
};
