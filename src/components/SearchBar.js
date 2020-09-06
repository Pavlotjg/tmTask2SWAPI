import React, {useCallback, useEffect, useRef, useState} from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  padding: 10px;
  width: 300px;
  color: ${(props) => props.theme.color};
  &:hover {
    background-color: darkorange;
    color: ${(props) => props.theme.color};
  }
`;

function SearchBar(props) {
  const [ searchValue, setSearchValue ] = useState('');

  let myTimeOut = useRef();
  let inputContainer = useRef();

  useEffect(() => {
    inputContainer.current.focus();
  }, []);

  const someMethod = useCallback((event) => {
    const {value} = event.target;
    setSearchValue(value);
    clearTimeout(myTimeOut.current);
    myTimeOut.current = setTimeout(() => {
      props.onSearch(value);
    }, props.delay);
  }, []);
  return (
    <InputWrapper>Filter:
      <input type="text"
             ref={inputContainer}
             value={searchValue}
             onChange={someMethod}
             placeholder='find person via name...'
      />
    </InputWrapper>
  )
}

export default SearchBar;
