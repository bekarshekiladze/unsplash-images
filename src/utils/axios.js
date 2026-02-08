import axios from "axios";

const baseUrl = "https://api.unsplash.com/search/photos";

export const fetchPhotos = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
    Accept: "application/json",
  },
});
