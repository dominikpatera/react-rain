import { FormEvent, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faSearch } from '@fortawesome/free-solid-svg-icons';

import { Form, SearchInput, Cancel, SearchWrapper } from './Search.styles';
import { UserSettingsThemeType } from '../../types/userSettings.types';

const Search: React.FC<SearchProps> = props => {
  const [searchInput, setSearchInput] = useState('');
  const [allowSubmit, setAllowSubmit] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const searchInputChange = (e: any) => {
    const input = e.target.value;
    setSearchInput(input);
    if (input.length > 3) return setAllowSubmit(true);
    setAllowSubmit(false);
  };

  const searchSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!allowSubmit) return;
    setAllowSubmit(false);
    setSearchInput('');
    navigate(`/city/${searchInput}`);
    props.onSubmit();
  };

  useEffect(() => {
    if (!props.show) return;
    searchInputRef.current!.focus();
  }, [props.show]);

  return (
    <Form onSubmit={searchSubmitHandler} show={props.show}>
      <SearchWrapper theme={props.theme}>
        <FontAwesomeIcon icon={faSearch} />
        <SearchInput
          type="text"
          name="search"
          placeholder="Search city ..."
          onChange={searchInputChange}
          value={searchInput}
          ref={searchInputRef}
        />
        <Cancel show={props.show} type="button" onClick={props.onSubmit}>
          <FontAwesomeIcon icon={faXmark} />
        </Cancel>
      </SearchWrapper>
    </Form>
  );
};

type SearchProps = {
  onSubmit: () => void;
  show: boolean;
  theme: UserSettingsThemeType;
};

export default Search;
