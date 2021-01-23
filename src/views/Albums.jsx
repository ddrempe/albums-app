import React, { Fragment, useEffect, useState } from "react";
import { apiGetAlbums } from "dataLayer/apiClient";
import Division from "components/atoms/Division/Division";

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
      {albums &&
        albums.map((item, ix) => (
          <Division key={ix}>
            <Division>{item.title}</Division>
            <Division>{item.price}</Division>
            <Division>{item.favorite}</Division>
            <Division>{item.releaseDate}</Division>
          </Division>
        ))}
    </Fragment>
  );
}
