import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";

const StyledSearchButton = styled.button`
  background-color: white;
  border: none;
  padding-right: 20px;
`;

export default function SearchButton(props) {
  const { ...rest } = props;

  return (
    <StyledSearchButton {...rest}>
      <SearchIcon />
    </StyledSearchButton>
  );
}
