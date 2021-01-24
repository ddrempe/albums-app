import Division from "components/atoms/Division/Division";
import Button from "components/atoms/Button/Button";
import Input from "components/atoms/Input/Input";
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
    actionButton,
    onActionButtonClick,
    inputPlaceholder,
    onInputChange,
    inputSubmit,
    onInputSubmit,
  } = props;

  return (
    <StyledHeader>
      <Division>{children}</Division>
      {onInputChange && (
        <Division>
          <Input placeholder={inputPlaceholder} onChange={onInputChange} />
          <Button value={inputSubmit} onClick={onInputSubmit} />
        </Division>
      )}
      {onActionButtonClick && (
        <Button value={actionButton} onClick={onActionButtonClick} />
      )}
    </StyledHeader>
  );
}
