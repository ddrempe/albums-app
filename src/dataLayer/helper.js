export const getArtistTitleById = (artists, id) => {
  return artists.find((artist) => artist.id === id).title;
};
