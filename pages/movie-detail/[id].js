import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import ListOfMovies from '../../components/ListOfMovies'
import { getMovieDetail } from '../../services/getMovieDetail'
import { getSimilarMovies } from '../../services/getSimilarMovies'

function MoviesDetail({ movieDetails, similarMovies }) {
	const bgImage = movieDetails.backdrop_path
		? `url("https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}")`
		: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTos6aPN9yJ1aUky6C5ml-VqNSykiCzQyS9OLS5-Wot&s')`
	const router = useRouter()

	const handleClick = () => {
		router.back()
	}

	return (
		<>
			<Head>
				<title>Movie Rec 2.0 - {movieDetails.title}</title>
			</Head>
			<main>
				<div
					className='h-full min-h-screen bg-center bg-no-repeat relative bg-cover pt-20 pb-20 md:flex md:justify-center md:items-center'
					style={{ backgroundImage: bgImage }}>
					<section className='grid place-content-center md:grid-cols-2 max-w-5xl '>
						<div className='z-20 mx-auto'>
							<Image
								src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
								alt={`Poster of the movie ${movieDetails.title}`}
								width={250}
								height={400}
							/>
						</div>
						<div className='text-white z-20 mt-5 md:mt-0'>
							<h1 className='font-semibold text-4xl text-center'>
								{movieDetails.title}
							</h1>
							<div className='mt-3 flex flex-col gap-1 w-9/12 mx-auto'>
								<p className='text-center text-gray-300'>
									{movieDetails.genres.map((res) => (
										<span className='mr-2' key={res.id}>
											{' '}
											{res.name}{' '}
										</span>
									))}
								</p>
								<p>Release data: {movieDetails.release_date}</p>
								<p>Duration: {movieDetails.runtime}min</p>
								<p className='text-white text-2xl'>
									{'★'.repeat(movieDetails.vote_average / 2).padEnd(5, '☆')}
								</p>
								<p>{movieDetails.overview}</p>
							</div>
						</div>
						<button
							type='button'
							onClick={handleClick}
							className='absolute top-5 left-5 px-3 py-1 rounded-lg bg-red-400 text-white z-20 text-sm md:top-20 md:left-20'>
							<p>Back</p>
						</button>
					</section>
				</div>
				<div className='absolute top-0 right-0 h-full w-full z-10 bg-[#00000090]' />
				<section>
					<ListOfMovies title='Similar Movies' movies={similarMovies} />
				</section>
			</main>
		</>
	)
}

export default MoviesDetail

export async function getServerSideProps(context) {
	const movieDetails = await getMovieDetail(context.params.id)
	const similarMovies = await getSimilarMovies(context.params.id)
	return {
		props: {
			movieDetails,
			similarMovies,
		},
	}
}
