import { API_KEY, BASE_URL } from './configApi'

export async function getPopularMovies() {
	const res = await fetch(
		`${BASE_URL}/discover/movie?api_key=${process.env.ENV_LOCAL_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
	)
	const response = await res.json()
	const data = response
	return data
}
