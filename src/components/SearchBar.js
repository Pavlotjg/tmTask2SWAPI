import React, {useCallback, useRef, useState} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px;
  width: 300px;
  color: white;
  &:hover {
    background-color: darkorange;
    color: black;
  }
`;

function SearchBar(props) {
  const [ searchValue, setSearchValue ] = useState('');

  let myTimeOut = useRef();

  const someMethod = useCallback((event) => {
    const {value} = event.target;
    setSearchValue(value);
    clearTimeout(myTimeOut.current);
    myTimeOut.current = setTimeout(() => {
      props.onSearch(value);
    }, props.delay);
  }, []);
  return (
    <Wrapper>Filter:
      <input type="text"
             value={searchValue}
             onChange={someMethod}
             placeholder='find person via name...'
      />
    </Wrapper>
  )
}

export default SearchBar;
