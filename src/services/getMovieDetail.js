import { BASE_URL } from './configApi'

export async function getMovieDetail(id) {
	const res = await fetch(
		`${BASE_URL}/movie/${id}?api_key=${process.env.ENV_LOCAL_API_KEY}&language=en-US`
	)
	const response = await res.json()
	const data = response
	return data
}
