import {Link} from "react-router-dom";
import React from "react";
import styled from "styled-components";

const StarterWrap = styled.span`
  padding: 10px;
  font-size: 25px;
  cursor: pointer;
  color: white;
  &:hover {
    background-color: orange;
    color: black;
  }
`;
const StarterCont = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

function Starter() {
  return (
    <StarterCont>
      <Link to="/people">
        <StarterWrap>People</StarterWrap>
      </Link>
      <Link to="/films">
        <StarterWrap>Films</StarterWrap>
      </Link>
    </StarterCont>
  )
}

export default Starter;
