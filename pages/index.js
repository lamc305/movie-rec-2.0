import { getPopularMovies } from '../services/getPopularMovies'
import { getPoster } from '../services/getPoster'
import { getTrending } from '../services/getTrending'
import Header from '../components/Header'
import PopularMovies from '../components/PopularMovies'
import ListOfMovies from '../components/ListOfMovies'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

export default function Home({ poster, popularMovies, trendingMovies }) {
	return (
		<Layout title='Home' content='Page home of Movie Rec'>
			<Header poster={poster} />
			<PopularMovies popularMovies={popularMovies} />
			<ListOfMovies movies={trendingMovies} title='Trending' viewAll />
			<Footer popularMovies={popularMovies} />
		</Layout>
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
