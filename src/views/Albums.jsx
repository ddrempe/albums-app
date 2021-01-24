import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { parseUrl } from "query-string";

import { apiGetAlbums, apiGetArtists, apiPutAlbums } from "dataLayer/apiClient";
import { getArtistTitleById } from "dataLayer/helper";

import Header from "components/organisms/Header/Header";
import AlbumList from "components/organisms/AlbumList/AlbumList";

export default function Albums(props) {
  const location = useLocation();
  const limitParam = parseUrl(location.search).query.limit;
  const limit = limitParam ? limitParam : 10;

  const [albums, setAlbums] = useState([]);
  const [searchValue, setSearchValue] = useState("");

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

  const handleOnClickMarkFavorite = (item) => {
    apiPutAlbums(item.id, { ...item, favorite: !item.favorite });
    /**
     * Instead of the fetching the new data from the API each time, optimistic approach could be implemented.
     * This means updating state locally assuming data is changed on the backend successfully.
     */
    fetchData();
  };

  return (
    <Fragment>
      <Header
        search
        inputPlaceholder="Search"
        onInputChange={(value) => {
          console.log("onInputChange", value);
          setSearchValue(value);
        }}
        inputSubmit={"GO"}
        onInputSubmit={() => {
          console.log("onInputSubmit");
        }}
      >
        Album list
      </Header>

      <AlbumList
        albums={albums}
        onClickMarkFavorite={(item) => handleOnClickMarkFavorite(item)}
      />
    </Fragment>
  );
}
