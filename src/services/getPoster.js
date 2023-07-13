import { API_KEY, BASE_URL } from './configApi'

export async function getPoster() {
	const URL = `${BASE_URL}/discover/tv?api_key=${process.env.ENV_LOCAL_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
	const res = await fetch(URL)
	const poster = await res.json()
	return poster
}
