import React, { Fragment, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ROUTE_ALBUMS } from "routes";

import {
  apiGetAlbumsByArtistId,
  apiGetArtists,
  apiPutAlbums,
} from "dataLayer/apiClient";
import { getArtistTitleById, mapArtistTitlesToAlbums } from "dataLayer/helper";

import Header from "components/organisms/Header/Header";
import AlbumList from "components/organisms/AlbumList/AlbumList";

export default function Artist(props) {
  let { artistId } = useParams();

  const [albums, setAlbums] = useState(undefined);
  const [artistTitle, setArtistTitle] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const responseArtists = await apiGetArtists();
    const responseAlbums = await apiGetAlbumsByArtistId(artistId);
    const title = getArtistTitleById(responseArtists, artistId);

    setAlbums(mapArtistTitlesToAlbums(responseAlbums, responseArtists));
    setArtistTitle(title);
  };

  const handleOnClickMarkFavorite = (item) => {
    apiPutAlbums(item.id, { ...item, favorite: !item.favorite });
    /**
     * Instead of the fetching the new data from the API each time, optimistic approach could be implemented.
     * This means updating state locally assuming data is changed on the backend successfully.
     */
    fetchData();
  };

  const history = useHistory();

  return (
    <Fragment>
      <Header
        actionButton="Back to all albums"
        onActionButtonClick={() => history.push(ROUTE_ALBUMS)}
        title={artistTitle}
      />

      <AlbumList
        albums={albums}
        onClickMarkFavorite={(item) => handleOnClickMarkFavorite(item)}
      />
    </Fragment>
  );
}
