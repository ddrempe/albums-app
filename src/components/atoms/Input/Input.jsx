import React from "react";
import styled from "styled-components";

const StyledInput = styled.input``;

export default function Input(props) {
  const { children, primary, secondary, ...rest } = props;

  return <StyledInput type="text" {...rest} />;
}
