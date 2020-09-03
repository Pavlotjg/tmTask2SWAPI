import React, { useState, useEffect, useCallback } from "react";
import "./style.css";
import axios from "axios";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

import SearchBar from "./components/SearchBar";

const Wrapper = styled.div`
  padding: 10px;
  cursor: pointer;
  color: black;
  &:hover {
    background-color: skyblue;
    color: white;
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
      <Link to="/">Back</Link>
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

function PersonListItem ({name, id}) {
  return (
      <Link to={`/people/${id}`} key={id}>
        <Wrapper>{name}</Wrapper>
      </Link>
  );
}

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
    <div>
      <Link to="/people/">Back</Link>
      <div>name: { person.name }</div>
      <div>gender: { person.gender }</div>
      <div>height: { person.height }</div>
      <div>hair: { person.hair_color }</div>
      <div>films: {person.films.map((elem) => {

        const numberPattern = /\d+/g;
        const result = elem.match( numberPattern );

        return <Link to={`/films/${result}`}>
          <Wrapper>Episode {result[0]}</Wrapper>
        </Link>
      })}</div>
    </div>
  );
}

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
      <Link to="/">Back</Link>
      {films.map((film) => <FilmLink film={film} />)}
    </div>
  )
}

function FilmLink({film}) {
  return(
    <Link to={`/films/${film.episode_id}`}>
      <Wrapper>{film.title}</Wrapper>
    </Link>
  )
}

function Film() {

  const [ film, setFilm] = useState({});

  useEffect(() => {
    axios.get(`https://swapi.dev/api${document.location.pathname}/`).then(
      res => {
        console.log(res.data);
        setFilm(res.data);

      }
    )
  }, []);
  return(
    <div>
      <Link to="/films/">Back</Link>
      <div>Created: {film.created}</div>
      <div>Edited: {film.edited}</div>
      <div>Director: {film.director}</div>
      <div>Producer: {film.producer}</div>

    </div>


  )
}

function Starter() {
  return (
    <div>
      <Link to="/people">
        <Wrapper>People</Wrapper>
      </Link>
      <Link to="/films">
        <Wrapper>Films</Wrapper>
      </Link>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Starter/>
          </Route>
          <Route path="/people" exact>
            <People />
          </Route>
          <Route path="/films" exact>
            <Films/>
          </Route>
          <Route path="/people/:personId">
            <Person />
          </Route>
          <Route path="/films/:id/">
            <Film/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}
