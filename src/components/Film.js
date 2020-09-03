import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import styled from "styled-components";

const FilmWrap = styled.div`
  color: white;
  padding: 0 10px;
`;
const FilmItem = styled.div`
  padding: 10px 0;
`;
const BackLinkWrap = styled.div`
  padding: 10px;
  margin: 10px 0;
  width: 50px;
  :hover {
    border: 2px solid white;
  }
`;

function Film() {
  const [ film, setFilm] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://swapi.dev/api/films/${id}/`).then(
      res => {
        setFilm(res.data);
      }
    )
  }, []);
  return(
    <FilmWrap>
      <BackLinkWrap>
        <Link to="/films/">Back</Link>
      </BackLinkWrap>
      <FilmItem>Created: {film.created}</FilmItem>
      <FilmItem>Edited: {film.edited}</FilmItem>
      <FilmItem>Director: {film.director}</FilmItem>
      <FilmItem>Producer: {film.producer}</FilmItem>
    </FilmWrap>
  )
}

export default Film;
