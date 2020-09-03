import React, {useCallback, useRef, useState} from "react";

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
    <div> Filter:
      <input type="text"
             value={searchValue}
             onChange={someMethod}
             placeholder='find person via name...'
      />
    </div>
  )
}

export default SearchBar;
