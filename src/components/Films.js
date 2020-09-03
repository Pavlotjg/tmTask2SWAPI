import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import styled from "styled-components";

import FilmLink from "./FilmLink";

const BackLinkWrap = styled.div`
  padding: 10px;
  margin: 10px 0;
  width: 50px;
  :hover {
    /*background-color: brown;*/
    border: 2px solid white;
  }
`;

function Films() {
  const [ films, setFilms ] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/films/').then(
      res => {
        setFilms(res.data.results);
        console.log(res.data.results);
      }
    )
  }, []);

  return (
    <div>
      <BackLinkWrap>
        <Link to="/">Back</Link>
      </BackLinkWrap>
      {films.map((film) => <FilmLink film={film} />)}
    </div>
  )
}

export default Films;
