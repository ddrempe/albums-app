import React from "react";
import styled from "styled-components";

const StyledInput = styled.input``;

export default function Input(props) {
  const { onChange, ...rest } = props;

  return (
    <StyledInput
      onChange={(event) => {
        onChange(event.target.value);
      }}
      type="text"
      {...rest}
    />
  );
}
