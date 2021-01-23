import Division from "components/atoms/Division/Division";
import React from "react";
import styled from "styled-components";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding-left: 10%;
  padding-right: 10%;
`;

export default function Header(props) {
  const { children, ...rest } = props;

  return (
    <Container>
      <Division>{children}</Division>
      <Division>Search bar</Division>
    </Container>
  );
}
