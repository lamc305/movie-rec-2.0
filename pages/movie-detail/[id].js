import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { getMovieDetail } from '../../services/getMovieDetail'

function MoviesDetail({ movieDetails }) {
	const { query } = useRouter()
	const { id } = query
	const bgImage = movieDetails.backdrop_path
		? `url("https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}")`
		: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTos6aPN9yJ1aUky6C5ml-VqNSykiCzQyS9OLS5-Wot&s')`
	return (
		<>
			<Head>
				<title>Movie Rec 2.0 - {movieDetails.title}</title>
			</Head>
			<main
				className='h-screen bg-center bg-no-repeat relative bg-cover pt-10'
				style={{ backgroundImage: bgImage }}>
				<section className='grid place-content-center'>
					<div className='z-20'>
						<Image
							src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
							alt=''
							width={250}
							height={400}

						/>
					</div>
					<div></div>
				</section>
				<div className='absolute top-0 right-0 h-full w-full z-10 bg-[#00000090]' />
			</main>
		</>
	)
}

export default MoviesDetail

export async function getServerSideProps(context) {
	const movieDetails = await getMovieDetail(context.params.id)
	return {
		props: {
			movieDetails,
		},
	}
}
