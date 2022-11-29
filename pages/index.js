import Head from 'next/head'
import { getPopularMovies } from '../services/getPopularMovies'
import { getPoster } from '../services/getPoster'
import { getTrending } from '../services/getTrending'
import Header from '../components/Header'
import PopularMovies from '../components/PopularMovies'
import ListOfMovies from '../components/ListOfMovies'
import Footer from '../components/Footer'

export default function Home({ poster, popularMovies, trendingMovies }) {
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
				<ListOfMovies movies={trendingMovies} title='Trending' viewAll />
				<Footer popularMovies={popularMovies} />
			</main>
		</div>
	)
}

export async function getServerSideProps() {
	const poster = await getPoster()
	const popularMovies = await getPopularMovies()
	const trendingMovies = await getTrending()
	return {
		props: {
			poster,
			popularMovies,
			trendingMovies,
		},
	}
}
