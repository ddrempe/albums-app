import Division from "components/atoms/Division/Division";
import Button from "components/atoms/Button/Button";
import React from "react";
import styled from "styled-components";

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
    search,
    actionButton,
    onActionButtonClick,
    ...rest
  } = props;

  return (
    <StyledHeader>
      <Division>{children}</Division>
      {search && <Division>Search bar</Division>}
      {onActionButtonClick && (
        <Button value={actionButton} onClick={onActionButtonClick} />
      )}
    </StyledHeader>
  );
}
