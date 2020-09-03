import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar";
import PersonListItem from "./PersonListItem";
import styled from "styled-components";

const BackLinkWrap = styled.div`
  padding: 10px;
  margin: 10px 0;
  width: 50px;
  
  :hover {
    /*background-color: brown;*/
    border: 2px solid white;
  }
`;

function People () {
  const [people, setPeople] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/?search=${searchQuery}`)
      .then((res) => {
        console.log(res.data.results);
        setPeople(res.data.results);
      });
  }, [searchQuery]);

  const toPerson = useCallback((person, index) => <PersonListItem name={person.name} id={index + 1} />);

  return (
    <div>
      <BackLinkWrap>
        <Link to="/">Back</Link>
      </BackLinkWrap>
      <div>{ people.map(toPerson) }
        <SearchBar
          onSearch={
            (value) => {
              console.log(value);
              setSearchQuery(value);
            }
          }
          delay={400}
        />
      </div>
    </div>
  );
}

export default People;