import React, { Fragment } from "react";
import Division from "components/atoms/Division/Division";
import styled from "styled-components";

const Container = styled(Division)`
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
`;

const Column = styled(Division)`
  background: tomato;
  padding: 5px;
  line-height: 150px;
  color: white;
  font-weight: bold;
  font-size: 0.8em;
  text-align: center;
`;

const Cover = styled(Division)`
  flex-grow: 1;
`;
const Title = styled(Division)`
  flex-grow: 3;
`;
const Price = styled(Division)`
  flex-grow: 1;
`;
const Favorite = styled(Division)`
  flex-grow: 1;
`;
const ReleaseDate = styled(Division)`
  flex-grow: 1;
`;

export default function AlbumRow(props) {
  const { item, children, ...rest } = props;

  return (
    <Container>
      {/* <Cover>{item.imageUrl}</Cover> */}
      <Title>{item.title}</Title>
      <Price>{item.price}</Price>
      <Favorite>{item.favorite ? "yes" : "no"}</Favorite>
      <ReleaseDate>{item.releaseDate}</ReleaseDate>
    </Container>
  );
}
