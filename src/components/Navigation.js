import {Link} from "react-router-dom";
import React from "react";
import styled from "styled-components";

const NavWrap = styled.span`
  padding: 10px;
  font-size: 25px;
  cursor: pointer;
  color: ${(props) => props.theme.color};
  &:hover {
    background-color: orange;
    color: black;
  }
`;
const Container = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

function Navigation() {
  return (
    <Container>
      <Link to="/people">
        <NavWrap>People</NavWrap>
      </Link>
      <Link to="/films">
        <NavWrap>Films</NavWrap>
      </Link>
    </Container>
  )
}

export default Navigation;
