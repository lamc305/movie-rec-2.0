import { API_KEY, BASE_URL } from './configApi'

export async function getRecentlyAdded() {
	const data = await fetch(
		`${BASE_URL}/discover/movie?api_key=${process.env.ENV_LOCAL_API_KEY}&language=en-US&sort_by=release_date.desc&page=2`
	)
	const rencently = await data.json()
	return rencently
}
