import {Link} from "react-router-dom";
import React from "react";
import Wrapper from "./Wrapper";

function FilmLink({film}) {
  return(
    <Link to={`/films/${film.episode_id}`}>
      <Wrapper>{film.title}</Wrapper>
    </Link>
  )
}

export default FilmLink;
