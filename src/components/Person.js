import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import Wrapper from "./Wrapper";

const Container = styled.div`
  padding: 10px;
  color:white;
`;
const PersonItem = styled.div`
  padding: 10px 0;
`;
const BackLinkWrap = styled.div`
  padding: 10px;
  margin: 10px 0;
  width: 50px;
  :hover {
    /*background-color: brown;*/
    border: 2px solid white;
  }
`;

function Person (props) {
  const [person, setPerson] = useState();
  let { personId } = useParams();     //// useParams()

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${personId}/`)
      .then((res) => {
        console.log(res);
        setPerson(res.data);
      });
  }, [setPerson]);

  if (!person) {
    return <div>Loading...</div>;
  }
  return (
    <Container>
      <BackLinkWrap>
        <Link to="/people/">Back</Link>
      </BackLinkWrap>
      <PersonItem>Name: { person.name }</PersonItem>
      <PersonItem>Gender: { person.gender }</PersonItem>
      <PersonItem>Height: { person.height }</PersonItem>
      <PersonItem>Hair: { person.hair_color }</PersonItem>
      <div>Films: {person.films.map((elem) => {
        const numberPattern = /\d+/g;
        const result = elem.match( numberPattern );
        return <Link to={`/films/${result}`}>
          <Wrapper>Episode {result[0]}</Wrapper>
        </Link>
      })}</div>
    </Container>
  );
}

export default Person;