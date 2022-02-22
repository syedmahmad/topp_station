import Head from 'next/head';

function HeadContent({
	description,
	title,
	route,
	image_url,
	keywords,
}) {

	const url = "https://toppstation.com/";

	return (
		<Head>
			<meta charSet="UTF-8" />
			<base href="/" />
			<title>{title}</title>
			<meta name="title" property="og:title" content={title} />
			<meta name="description" property="og:description" content={description} />
			<meta name="keywords" content={keywords ? keywords : ""} />
			<meta name="viewport" content="width=device-width,minimum-scale=1, initial-scale=1, maximum-scale=1, user-scalable=no" />

			<link rel="canonical" href={url + route} />
			<meta name="type" property="og:type" content="website" />
			<meta name="title" property="og:title" content={title} />
			<meta name="url" property="og:url" content={url + route} />
			<meta name="image" property="og:image" content={"https://d310ox1f4zno4b.cloudfront.net/static-content/Landing+Page+Banner+.png"} />
			<meta name="description" property="og:description" content={description} />
			<meta property="fb:app_id" content="1757891891170883" />

			<meta name="twitter:title" content={title} />
			<meta name="twitter:card" content="summary_large_image"/>
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content={url + route} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={"https://d310ox1f4zno4b.cloudfront.net/static-content/Landing+Page+Banner+.png"} />
		</Head>
	);
}

export default HeadContent;
