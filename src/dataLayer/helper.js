export const getArtistTitleById = (artists, id) => {
  return artists.find((artist) => artist.id === Number(id)).title;
};

export const mapArtistTitlesToAlbums = (albums, artists) => {
  return albums.map((album) => {
    return {
      ...album,
      artist: getArtistTitleById(artists, album.artistId),
    };
  });
};
