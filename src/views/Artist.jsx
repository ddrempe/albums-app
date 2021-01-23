import React, { Fragment, useEffect, useState } from "react";
import {
  apiGetAlbums,
  apiGetAlbumsByArtistId,
  apiGetArtists,
} from "dataLayer/apiClient";
import Division from "components/atoms/Division/Division";
import AlbumRow from "components/molecules/AlbumRow/AlbumRow";
import { getArtistTitleById } from "dataLayer/helper";
import { useParams } from "react-router-dom";

export default function Artist(props) {
  let { artistId } = useParams();

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const responseArtists = await apiGetArtists();
    const responseAlbums = await apiGetAlbumsByArtistId(artistId);

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
      <Division>Artist</Division>

      {albums &&
        albums.map((item, ix) => <AlbumRow key={item.id} item={item} />)}
    </Fragment>
  );
}
