import React, { Fragment, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { apiGetAlbumsByArtistId, apiGetArtists } from "dataLayer/apiClient";
import { getArtistTitleById } from "dataLayer/helper";

import AlbumRow from "components/molecules/AlbumRow/AlbumRow";
import Header from "components/organisms/Header/Header";
import ViewContainer from "components/molecules/ViewContainer/ViewContainer";

export default function Artist(props) {
  let { artistId } = useParams();

  const [albums, setAlbums] = useState([]);
  const [artistTitle, setArtistTitle] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const responseArtists = await apiGetArtists();
    const responseAlbums = await apiGetAlbumsByArtistId(artistId);
    const title = getArtistTitleById(responseArtists, artistId);

    let albumsWithArtistNames = responseAlbums.map((album) => {
      return {
        ...album,
        artist: title,
      };
    });
    setAlbums(albumsWithArtistNames);
    setArtistTitle(title);
  };

  const history = useHistory();

  return (
    <Fragment>
      <Header
        actionButton="Back"
        onActionButtonClick={() => {
          history.goBack();
        }}
      >
        {artistTitle}
      </Header>

      <ViewContainer>
        {albums && albums.map((item) => <AlbumRow key={item.id} item={item} />)}
      </ViewContainer>
    </Fragment>
  );
}
