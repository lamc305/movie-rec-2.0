import { BASE_URL } from './configApi'

export async function getSimilarMovies(id) {
	const URL = `${BASE_URL}/movie/${id}/similar?api_key=${process.env.ENV_LOCAL_API_KEY}&language=en-US&page=1`
	const data = await fetch(URL)
	const results = data.json()
	return results
}
