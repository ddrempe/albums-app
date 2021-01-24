import React from "react";
import { useHistory } from "react-router-dom";
import { ROUTE_ARTIST } from "routes";
import styled from "styled-components";

import Division from "components/atoms/Division/Division";
import Button from "components/atoms/Button/Button";
import { ReactComponent as StarIcon } from "assets/icons/star.svg";

const Container = styled(Division)`
  display: grid;
  grid-template-columns: 5% 55% 15% 15% 10%;
  background-color: white;
  margin-bottom: 10px;
  padding: 16px;
  box-shadow: 0px 1px 3px #e7e7e7;
  align-items: center;
`;

const CoverContainer = styled(Division)`
  position: relative;
  width: 58px;
  height: 58px;
`;

const Cover = styled.img`
  border: 1px solid #eeeeee;
  border-radius: 4px;
  width: 100%;
  height: auto;
`;

const CoverIcon = styled(Division)`
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 18px;
`;

const Text = styled.span`
  font-family: Work Sans;
  font-weight: 400;
  font-size: 14px;
`;

const AlbumTitle = styled(Division)`
  font-family: Work Sans;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #363636;
`;

const ArtistTitle = styled(Text)`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: #a0a0a0;
  cursor: pointer;
  &:hover {
    color: #13d6ea;
  }
`;
const TextContainer = styled(Division)`
  text-align: center;
`;
const ReleasedLabel = styled(Text)`
  font-size: 14px;
  color: #a0a0a0;
`;
const ReleasedValue = styled(Text)`
  font-size: 14px;
  color: #000000;
  font-weight: 500;
`;

const Price = styled(Text)`
  font-weight: 500;
  text-align: center;
  line-height: 14px;
`;
const Favorite = styled(Text)``;

export default function AlbumRow(props) {
  const { item, onClickMarkFavorite } = props;
  const history = useHistory();

  return (
    <Container>
      <CoverContainer>
        <Cover src={item.imageUrl} alt="" />
        {item.favorite && (
          <CoverIcon>
            <StarIcon />
          </CoverIcon>
        )}
      </CoverContainer>

      <Division>
        <AlbumTitle>{item.title}</AlbumTitle>
        <ArtistTitle
          onClick={() => history.push(`${ROUTE_ARTIST}/${item.artistId}`)}
        >
          {item.artist}
        </ArtistTitle>
      </Division>
      <TextContainer>
        <ReleasedLabel>Released: </ReleasedLabel>
        <ReleasedValue>
          {new Date(item.releaseDate).getFullYear()}
        </ReleasedValue>{" "}
      </TextContainer>
      <TextContainer>
        <Price>{item.price}</Price>
      </TextContainer>
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
