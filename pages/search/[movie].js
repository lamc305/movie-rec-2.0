import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import FormSearch from '../../components/FormSearch'
import Nav from '../../components/Nav'
import { getSearchMovie } from '../../services/getSearchMovie'
import Image from 'next/image'
import Link from 'next/link'
import Poster from '../../components/Poster'
import SearchMovies from '../../components/SearchMovies'

function MovieSearch({ movieSearch }) {
	const { query } = useRouter()
	const { movie } = query
	
	const bgImage = {
		backgroundImage:
			movieSearch.results.length > 1
				? `url('https://image.tmdb.org/t/p/original/${movieSearch.results[0].backdrop_path}')`
				: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/220px-Black_flag.svg.png")',
	}
	
	return (
		<Layout title={movie} content={`Page of search of the movie ${movie}`}>
			<div
				className='h-72 relative flex flex-col text-white bg-center bg-no-repeat bg-cover'
				style={bgImage}>
				<Nav />
				<div className='flex flex-col w-10/12 mx-auto z-20'>
					<FormSearch />
					<p className='mt-5 text-center'>
						Your search was <i>{`"${movie}"`}</i>
					</p>
				</div>
				<div className='bg-[#00000080] absolute h-full w-full z-10 top-0 right-0' />
			</div>
			{movieSearch.results.length > 0 ? (
				<SearchMovies movie={movieSearch.results} />
			) : (
				<div>
					<p className=' mt-10 text-center'>
						There is no results for your search
					</p>
				</div>
			)}
		</Layout>
	)
}

export default MovieSearch

export async function getServerSideProps(context) {
	const movieSearch = await getSearchMovie(context.params.movie)
	return {
		props: { movieSearch },
	}
}
