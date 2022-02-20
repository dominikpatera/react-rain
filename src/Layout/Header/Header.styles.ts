import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { colors, media } from '../../styles/variables.styles';
import { UserSettingsThemeType } from '../../types/userSettings.types';

export const StyledHeader = styled.header<StyledHeaderProps>`
  display: flex;
  position: fixed;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 4rem;
  padding: 0.5rem 2rem;
  background-color: ${props =>
    props.theme === 'dark' ? colors.darkHeaderBg : colors.lightHeaderBg};
  opacity: 0.97;
  color: ${props =>
    props.theme === 'dark' ? colors.lightHeaderBg : colors.darkHeaderBg};
  box-shadow: 1px 18px 23px 5px rgba(0, 0, 0, 0.46);
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

export const Logo = styled(NavLink)<LogoProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.375rem;
  line-height: 1.75rem;
  font-family: 'AbeeZee';
  font-weight: 900;
  text-decoration: none;
  color: ${props => (props.theme === 'dark' ? 'white' : colors.darkHeaderBg)};

  @media screen and (min-width: ${media.xs}) {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
`;

export const Settings = styled.div<SettingsProps>`
  display: ${props => (props.show ? 'flex' : 'none')};
  flex-direction: row;

  @media screen and (min-width: ${media.lg}) {
    display: flex;
  }
`;

export const SettingsItem = styled.div<SettingsItemProps>`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  cursor: pointer;
  transition: all 0.25s;
  color: ${props =>
    props.themeChanger
      ? props.theme === 'dark'
        ? colors.moonIcon
        : colors.sunIcon
      : 'inherit'};

  &:hover {
    transform: scale(1.25);
  }
`;

export const SearchItem = styled(SettingsItem)<SearchItemProps>`
  display: ${props => (props.show ? 'flex' : 'none')};

  @media screen and (min-width: ${media.lg}) {
    display: none;
  }
`;

type LogoProps = {
  theme: UserSettingsThemeType;
};

type StyledHeaderProps = {
  theme: UserSettingsThemeType;
};

type SettingsItemProps = {
  themeChanger?: boolean;
  theme?: UserSettingsThemeType;
};

type SearchItemProps = {
  show: boolean;
};

type SettingsProps = {
  show: boolean;
};
