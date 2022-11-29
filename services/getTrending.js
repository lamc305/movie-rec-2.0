import { API_KEY, BASE_URL } from './configApi'

export async function getTrending() {
	const data = await fetch(
		`${BASE_URL}/trending/movie/week?api_key=${process.env.ENV_LOCAL_API_KEY}
		`
	)
	const rencently = await data.json()
	return rencently
}
