import { API_KEY, BASE_URL } from './configApi'

export async function getPopularMovies() {
	const res = await fetch(
		`${BASE_URL}/movie/popular?api_key=${process.env.ENV_LOCAL_API_KEY}&language=en-US&page=1`
	)
	const response = await res.json()
	const data = response
	return data
}
