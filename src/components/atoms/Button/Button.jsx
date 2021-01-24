import { APP_PRIMARY, WHITE } from "colours";
import React from "react";
import styled from "styled-components";

const BaseButton = styled.input`
  border-radius: 3px;
  height: 25px;
  width: 125px;
  border: none;
  color: ${WHITE};
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
  background: ${APP_PRIMARY};
  &:hover {
    background: white;
    border: 1px solid ${APP_PRIMARY};
    color: ${APP_PRIMARY};
  }
`;

const SecondaryButton = styled(BaseButton)`
  background: white;
  color: ${APP_PRIMARY};
  text-decoration: underline;
  &:hover {
    background: ${APP_PRIMARY};
    border: 1px solid white;
    color: ${WHITE};
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
