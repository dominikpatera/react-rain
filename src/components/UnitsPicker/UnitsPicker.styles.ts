import styled from 'styled-components';
import { UserSettingsThemeType } from '../../types/userSettings.types';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: ${props =>
    props.theme === 'dark' ? '2px solid black' : '2px solid white'};
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const Option = styled.span<OptionProps>`
  padding: 0.25rem 0.75rem;
  background-color: ${props =>
    props.active
      ? props.theme === 'dark'
        ? '#343434'
        : '#a3a3a3'
      : props.theme === 'dark'
      ? 'black'
      : 'white'};
  color: ${props =>
    props.theme === 'dark' ? 'inherit' : props.active ? 'white' : 'inherit'};
  transition: background-color 0.25s linear;
  cursor: pointer;

  &:hover {
    background-color: ${props =>
      props.active
        ? props.theme === 'dark'
          ? '#343434'
          : '#a3a3a3'
        : props.theme === 'dark'
        ? '#1a1a1a'
        : '#ededed'};
  }
`;

type OptionProps = {
  active: boolean;
  theme: UserSettingsThemeType;
};
