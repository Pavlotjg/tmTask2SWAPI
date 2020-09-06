import styled from "styled-components";
import {Link} from "react-router-dom";

export const BackLinkWrap = styled(Link)`
  padding: 10px;
  width: 50px; 
  :hover {
    border: 2px solid ${(props) => props.theme.color};
  }
`;
