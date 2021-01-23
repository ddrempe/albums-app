import React, { Fragment, useEffect, useState } from "react";
import { apiGetAlbums, apiGetArtists } from "dataLayer/apiClient";
import Division from "components/atoms/Division/Division";
import AlbumRow from "components/molecules/AlbumRow/AlbumRow";
import { getArtistTitleById } from "dataLayer/helper";

export default function Albums(props) {
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
      <Division>Albums</Division>

      {albums &&
        albums.map((item, ix) => <AlbumRow key={item.id} item={item} />)}
    </Fragment>
  );
}
