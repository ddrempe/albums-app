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
