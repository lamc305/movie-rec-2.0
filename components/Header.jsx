import { BsSearch } from 'react-icons/bs'
import Image from 'next/image'

function Header({ poster }) {
	const bgImage =
		poster &&
		`url("https://image.tmdb.org/t/p/original${
			poster.results[Math.floor(Math.random() * poster.results.length)]
				.backdrop_path
		}")`

	return (
		<header
			className='h-[500px] relative flex flex-col text-white bg-center bg-no-repeat bg-cover'
			style={{
				backgroundImage: bgImage,
			}}>
			<div className='flex justify-between items-center mt-2 mx-5 z-20'>
				<div className='flex items-center'>
					<Image
						width='200'
						height='25'
						className='h-16 w-28'
						src='/assets/logo11.png'
						alt='Image logo of movie rec'
					/>
					<p>Browse +</p>
				</div>
				<div className='flex gap-2'>
					<button>Login</button>
					<button className='text-red-500 border-2 border-red-500 rounded-3xl px-2 py-1 cursor-pointer'>
						Sign Up
					</button>
				</div>
			</div>
			<div className='mt-10 w-9/12 mx-auto text-justify z-20'>
				<h1 className='font-bold mb-4 text-center text-3xl'>
					Your favorite movies. Explanined.
				</h1>
				<h2 className='font-normal text-center text-xl'>
					Figure out what happend. Then find out why.
				</h2>
				<form className='mt-10'>
					<div className='flex items-center mx-auto bg-white py-2 px-2 gap-3 rounded-3xl max-w-sm'>
						<BsSearch className='text-black w-10 ' />
						<input
							type='text'
							name='search'
							id='search'
							className='w-9/12 outline-none text-black'
							placeholder='Search for a movie'
						/>
					</div>
				</form>
			</div>
			<div className='bg-[#00000080] absolute h-full w-full z-10 top-0 right-0' />
		</header>
	)
}

export default Header
