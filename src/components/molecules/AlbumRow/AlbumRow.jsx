import React, { Fragment } from "react";
import Division from "components/atoms/Division/Division";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ROUTE_ALBUMS, ROUTE_ARTIST } from "routes";

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
  const history = useHistory();

  return (
    <Container>
      <img src={item.imageUrl} alt="" />

      <Title>
        <div>{item.title}</div>
        <div onClick={() => history.push(`${ROUTE_ARTIST}/${item.artistId}`)}>
          {item.artist}
        </div>
      </Title>
      <ReleaseDate>
        Released: {new Date(item.releaseDate).getFullYear()}
      </ReleaseDate>
      <Price>{item.price}</Price>
      <Favorite>
        {item.favorite ? "Remove favorite" : "Mark as favorite"}
      </Favorite>
    </Container>
  );
}