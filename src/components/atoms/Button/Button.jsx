import React from "react";
import styled from "styled-components";

const BaseButton = styled.input`
  border-radius: 3px;
  height: 25px;
  width: 125px;
  border: none;
  color: white;
  text-align: center;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
`;

const PrimaryButton = styled(BaseButton)`
  background: #13d6ea;
  &:hover {
    background: white;
    border: 1px solid #13d6ea;
    color: #13d6ea;
  }
`;

const SecondaryButton = styled(BaseButton)`
  background: white;
  &:hover {
    background: #13d6ea;
    border: 1px solid white;
    color: white;
  }
`;

export default function Button(props) {
  const { children, primary, secondary, ...rest } = props;

  return secondary ? (
    <SecondaryButton type="button" {...rest} />
  ) : (
    <PrimaryButton type="button" {...rest} />
  );
}
