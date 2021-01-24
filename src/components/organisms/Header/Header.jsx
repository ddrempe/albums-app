import React from "react";
import styled from "styled-components";

import Division from "components/atoms/Division/Division";
import Button from "components/atoms/Button/Button";
import SearchBar from "components/molecules/SearchBar/SearchBar";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding-left: 10%;
  padding-right: 10%;
  min-height: 10vh;
`;

export default function Header(props) {
  const {
    children,
    actionButton,
    onActionButtonClick,
    search,
    inputPlaceholder,
    onInputChange,
    onInputSubmit,
  } = props;

  return (
    <StyledHeader>
      <Division>{children}</Division>
      {search && (
        <SearchBar
          inputPlaceholder={inputPlaceholder}
          onInputChange={onInputChange}
          onInputSubmit={onInputSubmit}
        />
      )}
      {onActionButtonClick && (
        <Button value={actionButton} onClick={onActionButtonClick} />
      )}
    </StyledHeader>
  );
}
