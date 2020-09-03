import {Link} from "react-router-dom";
import React from "react";
import Wrapper from "./Wrapper";

function PersonListItem ({name, id}) {
  return (
    <Link to={`/people/${id}`} key={id}>
      <Wrapper>{name}</Wrapper>
    </Link>
  );
}

export default PersonListItem;
