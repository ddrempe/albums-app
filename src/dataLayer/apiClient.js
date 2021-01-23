import axios from "axios";

const { REACT_APP_API_URL } = process.env;

const axiosInstance = axios.create({
  baseURL: REACT_APP_API_URL,
});

const axiosGET = (url) => {
  return axiosInstance.get(url);
};

const URL_ALBUMS = "albums/";
const URL_ARTISTS = "artists/";

export const apiGetAlbums = async () => {
  const response = await axiosGET(URL_ALBUMS);
  return response.data;
};

export const apiGetArtists = async () => {
  const response = await axiosGET(URL_ARTISTS);
  return response.data;
};

export const apiGetAlbumsByArtistId = async (artistId) => {
  const response = await axiosGET(`${URL_ALBUMS}?artistId=${artistId}`);
  return response.data;
};
