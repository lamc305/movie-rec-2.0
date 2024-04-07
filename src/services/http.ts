import axios from "axios";

export const http = axios.create({
  baseURL: process.env.BASE_URL,
  params: {
    api_key: process.env.ENV_LOCAL_API_KEY,
    language: "en-US",
  },
});
