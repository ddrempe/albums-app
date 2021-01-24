import React from "react";
import Division from "components/atoms/Division/Division";
import styled from "styled-components";

const StyledViewContainer = styled(Division)`
  background-color: #f2f2f2;
  padding-left: 10%;
  padding-right: 10%;
  min-height: 85vh;
  padding-top: 2.5vh;
  padding-bottom: 2.5vh;
`;

export default function ViewContainer(props) {
  const { children, ...rest } = props;

  return <StyledViewContainer {...rest}>{children}</StyledViewContainer>;
}
