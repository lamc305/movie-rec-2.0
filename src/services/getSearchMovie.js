import { BASE_URL } from './configApi'

export async function getSearchMovie(movie) {
	const URL = `${BASE_URL}/search/movie?api_key=${process.env.ENV_LOCAL_API_KEY}&language=en-US&query=${movie}&page=1&include_adult=false`
	const data = await fetch(URL)
	const results = await data.json()
	return results
}
