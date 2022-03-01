import { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { UserSettingsContext } from '../../context/userSettings';
import { media } from '../../styles/variables.styles';

const ErrorBox: React.FC<ErrorBoxProps> = props => {
  const { theme } = useContext(UserSettingsContext);

  return (
    <Wrapper onClick={props.onClick} theme={theme} cursor={props.cursor}>
      <Row>
        <IconWrapper color={props.iconColor}>
          <FontAwesomeIcon icon={props.icon} />
        </IconWrapper>
      </Row>
      <Row>{props.msg}</Row>
    </Wrapper>
  );
};

export default ErrorBox;

type ErrorBoxProps = {
  msg: string;
  icon: IconDefinition;
  iconColor: string;
  cursor: 'pointer' | 'unset';
  onClick: () => void;
};

const IconWrapper = styled.div`
  color: ${props => props.color};
  background-color: white;
  font-size: 2rem;
  padding: 1.5rem;
  border-radius: 9999rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  color: inherit;

  font-size: 1.5rem;
`;

const Wrapper = styled.div<WrapperProps>`
  text-decoration: none;
  color: inherit;
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  gap: 1rem;
  flex-direction: column;
  transition: all 0.3s;
  background-color: ${props =>
    props.theme === 'dark' ? '#343434' : '#e1e1e1'};
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: -1px 3px 20px 0px rgb(114 99 99 / 46%);
  cursor: ${props => props.cursor};

  &:hover {
    transform: scale(1.05);
    box-shadow: 7px 10px 27px 0px rgb(114 99 99 / 46%);
  }

  & .city_name {
    font-size: 1.5rem;
    font-weight: 600;

    @media screen and (min-width: ${media.md}) {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: ${media.lg}) {
    width: 80%;
  }

  @media screen and (min-width: ${media.xl}) {
    width: 70%;
  }

  @media screen and (min-width: ${media.xxl}) {
    width: 60%;
  }
`;

type WrapperProps = {
  cursor: 'pointer' | 'unset';
};
