import React, { Fragment } from "react";
import Division from "components/atoms/Division/Division";
import styled from "styled-components";

const Container = styled(Division)`
  display: grid;
  grid-template-columns: 15% 40% 15% 15% 15%;
`;

const Cover = styled(Division)``;
const Title = styled(Division)``;
const Price = styled(Division)``;
const Favorite = styled(Division)``;
const ReleaseDate = styled(Division)``;

export default function AlbumRow(props) {
  const { item, children, ...rest } = props;

  return (
    <Container>
      <img src={item.imageUrl} alt="" />

      <Title>
        <div>{item.title}</div>
        <div>{item.artistId}</div>
      </Title>
      <ReleaseDate>Released: {item.releaseDate}</ReleaseDate>
      <Price>{item.price}</Price>
      <Favorite>
        {item.favorite ? "Remove favorite" : "Mark as favorite"}
      </Favorite>
    </Container>
  );
}
