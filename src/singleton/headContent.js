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
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta name="image" property="og:image" content={image_url} />
			<meta name="description" property="og:description" content={description} />
			<meta property="fb:app_id" content="1757891891170883" />

			<meta name="twitter:title" content={title} />
			<meta name="twitter:card" content="summary_large_image"/>
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content={url + route} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image_url} />
		</Head>
	);
}

export default HeadContent;
