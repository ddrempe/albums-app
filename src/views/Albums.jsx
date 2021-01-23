import React, { Fragment, useEffect, useState } from "react";
import { apiGetAlbums } from "dataLayer/apiClient";
import Division from "components/atoms/Division/Division";
import AlbumRow from "components/molecules/AlbumRow/AlbumRow";
import styled from "styled-components";

const VerticalListContainer = styled(Division)``;

const VerticalListItem = styled(Division)``;

export default function Albums(props) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await apiGetAlbums();
    console.log(response);
    setAlbums(response);
  };

  return (
    <Fragment>
      <Division>Albums</Division>
      <VerticalListContainer>
        {albums &&
          albums.map((item, ix) => (
            <VerticalListItem key={ix}>
              <AlbumRow item={item} />
            </VerticalListItem>
          ))}
      </VerticalListContainer>
    </Fragment>
  );
}
