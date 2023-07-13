import Head from 'next/head'

function Layout({ children, title = 'Home', content }) {
	return (
		<>
			<Head>
				<title>Movie Rec 2.0 - {title}</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta name='description' content={content} />
			</Head>
			<main>{children}</main>
		</>
	)
}

export default Layout
