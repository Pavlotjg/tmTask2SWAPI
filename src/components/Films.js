import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

import FilmLink from "./FilmLink";
import {BackLinkWrap} from "./BackLinkWrap";

function Films() {
  const [ films, setFilms ] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/films/').then(
      res => {
        setFilms(res.data.results);
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
