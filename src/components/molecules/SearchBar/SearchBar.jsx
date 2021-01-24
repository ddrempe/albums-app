import React from "react";
import styled from "styled-components";

import Division from "components/atoms/Division/Division";
import Input from "components/atoms/Input/Input";
import SearchButton from "components/molecules/SearchButton/SearchButton";
import { APP_SECONDARY } from "colours";

const SearchBarContainer = styled(Division)`
  display: flex;
  flex: 80% 20%;
  position: relative;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  height: 40px;
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  @media (max-width: 1200px) {
    max-width: 80vw;
  }
`;

const SearchBarInput = styled(Input)`
  min-width: 332px;
  background: #ffffff;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: ${APP_SECONDARY};
  padding-left: 23px;
  outline: none;
  border: none;
`;

export default function SearchBar(props) {
  const { inputPlaceholder, onInputChange, onInputSubmit } = props;

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      onInputSubmit();
    }
  };

  return (
    <SearchBarContainer>
      <SearchBarInput
        placeholder={inputPlaceholder}
        onChange={onInputChange}
        onKeyDown={handleOnKeyDown}
      />

      <SearchButton onClick={onInputSubmit} />
    </SearchBarContainer>
  );
}
