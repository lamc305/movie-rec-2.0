import { cache } from "react";
import { http } from "./http";

export async function getVideos(id: string) {
  const { data } = await http.get(`/movie/${id}/videos`);
  return data;
}

export async function getTrending() {
  const { data } = await http.get(`/trending/movie/week`);
  return data;
}

export async function getSimilarMovies(id: string) {
  const { data } = await http.get(`/movie/${id}/similar`, {
    params: {
      page: 1,
    },
  });
  return data;
}

export async function getSearchMovie(query: string) {
  const { data } = await http.get(`/search/movie`, {
    params: {
      query,
      page: 1,
      include_adult: false,
    },
  });
  return data;
}

export async function getPoster() {
  const { data } = await http.get(`/discover/tv`, {
    params: {
      sort_by: "popularity.desc",
      include_adult: "false",
      include_video: "false",
      page: 1,
      with_watch_monetization_types: "faltrate",
    },
  });
  return data;
}

export async function getPopularMovies() {
  const { data } = await http.get(`/movie/popular`, {
    params: {
      page: 1,
    },
  });
  return data;
}

export const getMovieDetail = cache(async (id: string) => {
  const { data } = await http.get(`/movie/${id}`);
  return data;
});
