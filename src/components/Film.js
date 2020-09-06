import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import styled from "styled-components";
import {BackLinkWrap} from "./BackLinkWrap";

const FilmWrap = styled.div`
  padding: 0 10px;
`;
const FilmItem = styled.div`
  padding: 10px 0;
`;

function Film() {
  const [film, setFilm] = useState({});
  const {id} = useParams();
  useEffect(() => {
    axios.get(`https://swapi.dev/api/films/${id}/`).then(
      res => {
        setFilm(res.data);
      }
    )
  }, []);
  return (
    <div>
      <BackLinkWrap>
        <Link to="/films/">Back</Link>
      </BackLinkWrap>
      <FilmWrap>
        <FilmItem>Created: {film.created}</FilmItem>
        <FilmItem>Edited: {film.edited}</FilmItem>
        <FilmItem>Director: {film.director}</FilmItem>
        <FilmItem>Producer: {film.producer}</FilmItem>
      </FilmWrap>
    </div>
  )
}

export default Film;
