import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";

const StyledSearchButton = styled.button`
  background-color: white;
  border: none;
`;

export default function SearchButton(props) {
  const { ...rest } = props;

  return (
    <StyledSearchButton {...rest}>
      <SearchIcon />
    </StyledSearchButton>
  );
}
