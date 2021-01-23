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
    console.log(title);
    let albumsWithArtistNames = responseAlbums.map((album) => {
      return {
        ...album,
        artist: title,
      };
    });
    setAlbums(albumsWithArtistNames);
    setArtistTitle(title);
  };

  return (
    <Fragment>
      <Header>{artistTitle}</Header>

      <ViewContainer>
        {albums &&
          albums.map((item, ix) => <AlbumRow key={item.id} item={item} />)}
      </ViewContainer>
    </Fragment>
  );
}
