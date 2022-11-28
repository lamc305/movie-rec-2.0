import Image from 'next/image'
import { BiData } from 'react-icons/bi'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

function RecentlyMovies({ recentlyMovies }) {
	const justSixRecentlyMovies = recentlyMovies.results.slice(1, 7)

	return (
		<section className='bg-gray-200 pb-20'>
			<div className='flex justify-between mb-4 pt-10 w-9/12 max-w-5xl mx-auto'>
				<div className='flex items-center gap-1'>
					<BiData className='text-red-400' />
					<p className='font-bold'>Recently Added</p>
				</div>
				<div className='flex items-center gap-1 text-gray-500 cursor-pointer'>
					<p className='font-light'>View All</p>
					<HiOutlineArrowNarrowRight />
				</div>
			</div>
			<div className='grid w-9/12 max-w-5xl mx-auto grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 place-content-center'>
				{justSixRecentlyMovies.map(({ id, poster_path }) => (
					<Image
						className='w-full object-contain'
						key={id}
						width={125}
						height={200}
						src={`https://image.tmdb.org/t/p/w500${poster_path}`}
						alt={`Poster of the movie ${id}`}
					/>
				))}
			</div>
		</section>
	)
}

export default RecentlyMovies
