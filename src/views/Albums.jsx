import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { parseUrl } from "query-string";

import { apiGetAlbums, apiGetArtists } from "dataLayer/apiClient";
import { getArtistTitleById } from "dataLayer/helper";

import AlbumRow from "components/molecules/AlbumRow/AlbumRow";
import ViewContainer from "components/molecules/ViewContainer/ViewContainer";
import Header from "components/organisms/Header/Header";

export default function Albums(props) {
  const location = useLocation();
  const limitParam = parseUrl(location.search).query.limit;
  const limit = limitParam ? limitParam : 10;

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const responseArtists = await apiGetArtists();
    const responseAlbums = await apiGetAlbums();
    let albumsWithArtistNames = responseAlbums.map((album) => {
      return {
        ...album,
        artist: getArtistTitleById(responseArtists, album.artistId),
      };
    });
    setAlbums(albumsWithArtistNames);
  };

  return (
    <Fragment>
      <Header search>Album list</Header>

      <ViewContainer>
        {albums && albums.map((item) => <AlbumRow key={item.id} item={item} />)}
      </ViewContainer>
    </Fragment>
  );
}
