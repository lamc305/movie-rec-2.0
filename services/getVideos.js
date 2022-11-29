import { BASE_URL } from './configApi'

export async function getVideos(id) {
	const URL = `${BASE_URL}/movie/${id}/videos?api_key=${process.env.ENV_LOCAL_API_KEY}&language=en-US`
	const data = await fetch(URL)
	const results = await data.json()
	return results
}
