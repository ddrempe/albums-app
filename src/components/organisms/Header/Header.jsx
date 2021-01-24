import React from "react";
import styled from "styled-components";

import Division from "components/atoms/Division/Division";
import Button from "components/atoms/Button/Button";
import SearchBar from "components/molecules/SearchBar/SearchBar";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10%;
  padding-right: 10%;
  min-height: 10vh;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.183679);
  position: relative;
  z-index: 10;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    padding-top: 20px;
  }
`;

const Title = styled(Division)`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #363636;
  @media (max-width: 1200px) {
    padding-bottom: 20px;
  }
`;

export default function Header(props) {
  const {
    title,
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
      <Title>{title}</Title>
      {children && <Division>{children}</Division>}
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
