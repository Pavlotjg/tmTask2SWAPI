import styled from "styled-components";

const Wrapper = styled.div`
  width: 250px;
  padding: 10px;
  cursor: pointer;
  color: ${props => props.theme.color};
  &:hover {
    background-color: ${(props) => props.theme.hoverBackground};
    border: 2px solid white;
  }
`;

export default Wrapper;
