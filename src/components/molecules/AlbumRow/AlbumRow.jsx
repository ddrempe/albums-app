import React from "react";
import { useHistory } from "react-router-dom";
import { ROUTE_ARTIST } from "routes";
import styled from "styled-components";

import Division from "components/atoms/Division/Division";
import Button from "components/atoms/Button/Button";

const Container = styled(Division)`
  display: grid;
  grid-template-columns: 15% 40% 15% 15% 15%;
  background-color: white;
  margin-bottom: 10px;
`;

const Title = styled(Division)``;
const Price = styled(Division)``;
const Favorite = styled(Division)``;
const ReleaseDate = styled(Division)``;

export default function AlbumRow(props) {
  const { item, onClickMarkFavorite } = props;
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
        {item.favorite ? (
          <Button
            secondary
            value={"Remove favorite"}
            onClick={onClickMarkFavorite}
          />
        ) : (
          <Button value={"Mark as favorite"} onClick={onClickMarkFavorite} />
        )}
      </Favorite>
    </Container>
  );
}
