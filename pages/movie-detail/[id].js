import Image from 'next/image'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import ListOfMovies from '../../components/ListOfMovies'
import Nav from '../../components/Nav'
import { getMovieDetail } from '../../services/getMovieDetail'
import { getSimilarMovies } from '../../services/getSimilarMovies'

function MoviesDetail({ movieDetails, similarMovies }) {
	const bgImage = {
		backgroundImage: movieDetails.backdrop_path
			? `url("https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}")`
			: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTos6aPN9yJ1aUky6C5ml-VqNSykiCzQyS9OLS5-Wot&s')`,
	}

	const router = useRouter()

	const handleClick = () => {
		router.back()
	}

	return (
		<Layout
			title={movieDetails.title}
			content={`Page details of ${movieDetails.title} `}>
			<div
				className='h-auto min-h-screen bg-center bg-no-repeat relative bg-cover pt-10'
				style={bgImage}>
				<div className='flex w-11/12 max-w-screen-xl mx-auto items-center justify-between'>
					<Nav />
					<button
						type='button'
						onClick={handleClick}
						className='px-3 py-1 rounded-lg bg-red-400 text-white z-20 text-sm md:top-20 md:left-20'>
						<p>Back</p>
					</button>
				</div>
				<section className='grid place-content-center md:grid-cols-2 mt-20 mx-auto  max-w-5xl'>
					<div className='z-20 mx-auto'>
						<Image
							src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
							alt={`Poster of the movie ${movieDetails.title}`}
							width={250}
							height={400}
						/>
					</div>
					<div className='text-white z-20 mt-5 pb-10 md:mt-0'>
						<h1 className='font-semibold text-4xl text-center'>
							{movieDetails.title}
						</h1>
						<div className='mt-1 flex flex-col gap-1 w-9/12 mx-auto'>
							{movieDetails.genres && (
								<p className='text-center mb-5 text-gray-300'>
									{movieDetails.genres.map((res) => (
										<span className='mr-2' key={res.id}>
											{' '}
											{res.name}{' '}
										</span>
									))}
								</p>
							)}
							<p>Release data: {movieDetails.release_date}</p>
							<p>Duration: {movieDetails.runtime}min</p>
							<p className='text-white text-2xl'>
								{'★'.repeat(movieDetails.vote_average / 2).padEnd(5, '☆')}
							</p>
							<p>{movieDetails.overview}</p>
						</div>
					</div>
				</section>
				<div className='absolute top-0 right-0 h-full w-full z-10 bg-[#00000090]' />
			</div>
			<ListOfMovies title='Similar Movies' movies={similarMovies} />
		</Layout>
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
