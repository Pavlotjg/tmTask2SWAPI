import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import styled, {ThemeProvider, createGlobalStyle} from "styled-components";

import People from "./components/People";
import Person from "./components/Person";
import Navigation from "./components/Navigation";
import Film from "./components/Film";
import Films from "./components/Films";
import {theme} from "./components/Themes";

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${(props) => props.theme.bgImg });
    color: ${(props) => props.theme.color};
    font-size: 20px;
  }
  a {
    color: ${(props) => props.theme.color};
  }
  input {
    margin-left: 10px;
    font-size: 17px;
    color: green;
  }
`;

const ThemeButton = styled.button`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.btnBackground};
  width: 150px;
  margin: 10px 0 15px 10px;
  padding: 5px;
  font-size: 20px;
  cursor: pointer;
`;

export default function App() {
  const [themeChecker, setThemeChecker] = useState(theme.darkSide);

  function toggleTheme() {
     const newValue = theme.darkSide  === themeChecker ? theme.lightSide : theme.darkSide;
     setThemeChecker(newValue);
  }
  return (
    <div>
      <ThemeProvider theme={themeChecker}>
        <GlobalStyle></GlobalStyle>
        <Router>
          <Navigation/>
          <ThemeButton onClick={toggleTheme}>Change theme</ThemeButton>
          <Switch>
            <Route path="/people" exact>
              <People/>
            </Route>
            <Route path="/films" exact>
              <Films/>
            </Route>
            <Route path="/people/:personId">
              <Person/>
            </Route>
            <Route path="/films/:id/">
              <Film/>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}
