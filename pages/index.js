import Head from 'next/head'
import { getPopularMovies } from '../services/getPopularMovies'
import { getPoster } from '../services/getPoster'
import { getRecentlyAdded } from '../services/getRecentlyAdded'
import Header from '../components/Header'
import PopularMovies from '../components/PopularMovies'
import RecentlyMovies from '../components/RecentlyMovies'
import Footer from '../components/Footer'

export default function Home({ poster, popularMovies, recentlyMovies }) {
	return (
		<div>
			<Head>
				<title>Movie Rec 2.0 - Home</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta name='description' content='Home page of movie rec' />
			</Head>
			<main>
				<Header poster={poster} />
				<PopularMovies popularMovies={popularMovies} />
				<RecentlyMovies recentlyMovies={recentlyMovies} />
				<Footer popularMovies={popularMovies} />
			</main>
		</div>
	)
}

export async function getServerSideProps() {
	const poster = await getPoster()
	const popularMovies = await getPopularMovies()
	const recentlyMovies = await getRecentlyAdded()
	return {
		props: {
			poster,
			popularMovies,
			recentlyMovies,
		},
	}
}
