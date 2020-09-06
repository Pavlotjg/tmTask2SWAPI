import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import Wrapper from "./Wrapper";
import {BackLinkWrap} from "./BackLinkWrap";

const Container = styled.div`
 padding: 10px; 
 color: ${(props) => props.theme.color};
`;
const PersonItem = styled.div`
  padding: 10px 0;
`;

function Person() {
  const [person, setPerson] = useState();
  let {personId} = useParams();
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${personId}/`)
      .then((res) => {
        setPerson(res.data);
      });
  }, []);

  if (!person) {
    return <div>Loading...</div>;
  }
  return (
      <div>
        <BackLinkWrap>
          <Link to="/people/">Back</Link>
        </BackLinkWrap>
        <Container>
          <PersonItem>Name: {person.name}</PersonItem>
          <PersonItem>Gender: {person.gender}</PersonItem>
          <PersonItem>Height: {person.height}</PersonItem>
          <PersonItem>Hair: {person.hair_color}</PersonItem>
          <PersonItem>Mass: {person.mass}</PersonItem>
          <PersonItem>Birth Year: {person.birth_year}</PersonItem>
          <div>Films: {person.films.map((elem) => {
            const numberPattern = /\d+/g;
            const result = elem.match(numberPattern);
            return (
              <Link to={`/films/${result}`}>
                <Wrapper>Episode {result[0]}</Wrapper>
              </Link>
            )
          })}
          </div>
        </Container>
      </div>
  );
}

export default Person;
