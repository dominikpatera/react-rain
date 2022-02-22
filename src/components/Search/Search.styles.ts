import styled from 'styled-components';

import { colors, media } from '../../styles/variables.styles';
import { UserSettingsThemeType } from '../../types/userSettings.types';

export const SearchWrapper = styled.div<SearchWrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 0.5rem;
  background-color: ${props => (props.theme === 'dark' ? '#343434' : 'white')};
  transition: background-color 0.25s linear;
  padding: 0.5rem;
  color: ${props => (props.theme !== 'dark' ? '#343434' : 'white')};
`;

export const SearchInput = styled.input`
  /* background-color: ${colors.lightGrey}; */
  background-color: transparent;
  outline: none;
  border: none;
  width: 0rem;
  padding-inline: 1rem 0.5rem;
  transition: width 0.3s;
  font-size: 1rem;
  color: inherit;

  @media screen and (min-width: ${media.lg}) {
    width: 10rem;
  }

  &:focus-visible {
    outline: none;
    border: none;
    width: 5rem;

    @media screen and (min-width: ${media.sm}) {
      width: 16rem;
    }

    @media screen and (min-width: ${media.lg}) {
      width: 20rem;
    }

    @media screen and (min-width: ${media.xxl}) {
      width: 30rem;
    }

    @media screen and (min-width: ${media.xxxl}) {
      width: 36rem;
    }
  }
`;

export const Form = styled.form<FormProps>`
  display: ${props => (props.show ? 'flex' : 'none')};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: ${media.lg}) {
    display: flex;
  }
`;

export const Cancel = styled.button<CancelProps>`
  display: ${props => (props.show ? 'unset' : 'none')};
  color: inherit;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding-left: 1rem;
  font-size: 1.5rem;
  @media screen and (min-width: ${media.lg}) {
    display: none;
  }
`;

type SearchWrapperProps = {
  theme: UserSettingsThemeType;
};

type FormProps = {
  show: boolean;
};

type CancelProps = {
  show: boolean;
};
