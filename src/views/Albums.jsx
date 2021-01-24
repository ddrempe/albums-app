import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { parseUrl } from "query-string";

import {
  apiGetAlbums,
  apiGetAlbumsFiltered,
  apiGetArtists,
  apiPutAlbums,
} from "dataLayer/apiClient";
import { mapArtistTitlesToAlbums } from "dataLayer/helper";

import Header from "components/organisms/Header/Header";
import AlbumList from "components/organisms/AlbumList/AlbumList";

export default function Albums(props) {
  const location = useLocation();
  const limitParam = parseUrl(location.search).query.limit;
  const limit = limitParam ? limitParam : 10;

  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentLimitValue, setCurrentLimitValue] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const responseArtists = await apiGetArtists();
    const responseAlbums = await apiGetAlbums();

    setArtists(responseArtists);
    setAlbums(mapArtistTitlesToAlbums(responseAlbums, responseArtists));
  };

  const handleOnClickMarkFavorite = (item) => {
    apiPutAlbums(item.id, { ...item, favorite: !item.favorite });
    /**
     * Instead of the fetching the new data from the API each time, optimistic approach could be implemented.
     * This means updating state locally assuming data is changed on the backend successfully.
     */
    fetchData();
  };

  const handleOnInputChange = (value) => {
    setSearchValue(value);
  };

  const handleOnInputSubmit = async () => {
    if (currentLimitValue >= limit) {
      alert(`API LIMIT REACHED ${currentLimitValue}/${limit}`);
      return;
    }

    const response = await apiGetAlbumsFiltered(searchValue);
    setAlbums(mapArtistTitlesToAlbums(response, artists));
    setCurrentLimitValue(currentLimitValue + 1);
  };

  return (
    <Fragment>
      <Header
        search
        inputPlaceholder="Search"
        onInputChange={handleOnInputChange}
        inputSubmit={"GO"}
        onInputSubmit={handleOnInputSubmit}
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
