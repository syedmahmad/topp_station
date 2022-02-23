import Head from 'next/head';

function HeadContent({
	description,
	title,
	route,
	image_url,
	keywords,
}) {

	const url = "https://toppstation.com/";

	// Whatsapp: size up to 300. Anything above 300px will not work in WhatsApp.


	return (
		<Head>
			<meta charSet="utf-8" />
			<link rel="icon" href="%PUBLIC_URL%/favicon-32x32.png" />
			<meta name="viewport"
				content="width=device-width  initial-scale=1, maximum-scale=1 , height=device-height, initial-scale=1.0, user-scalable=no,user-scalable=0;" />

			{/* MS Tile - for Microsoft apps */}
			<meta name="msapplication-TileImage" content="http://www.example.com/image01.jpg"/> 

			{/* <!-- Primary Meta Tags --> */}
			<title>{title}</title>
			<meta name="title" content={title || "Toppstation | Enabling Entrepreneurs worldwide"} />
			<meta name="description" content={description || "Discover benefits of building a business from a pro-business environment, including how tax incentives, rule of law, connectivity to other markets, strategic location and skilled workforce benefit you regardless where you are."} />

			{/* <!-- Open Graph / Facebook --> */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={url + route} />
			<meta property="og:site_name" content="Toppstation"/>
			<meta property="og:title" content={title || "Toppstation | Enabling Entrepreneurs worldwide"} />
			<meta property="og:description" content={description || "Discover benefits of building a business from a pro-business environment, including how tax incentives, rule of law, connectivity to other markets, strategic location and skilled workforce benefit you regardless where you are."} />
			<meta property="og:image" itemProp="image" content={"http://167.172.90.103:5009/a3d3ee1d-f549-464f-8542-e9d0c1cbd7b5-asdadada.png"}/>
			
			<link rel="canonical" href={url + route} />
			{/* <meta property="fb:app_id" content="1757891891170883" /> */}

			{/* Twitter special case  */}
			<meta property="twitter:card" content="summary_large_image"/>
			<meta property="twitter:url" content={url + route}/>
			<meta property="twitter:title" content={title || "Toppstation | Enabling Entrepreneurs worldwide"}/>
			<meta property="twitter:description" content={description || "Discover benefits of building a business from a pro-business environment, including how tax incentives, rule of law, connectivity to other markets, strategic location and skilled workforce benefit you regardless where you are."} />
			<meta property="twitter:image" content="http://167.172.90.103:5009/a3d3ee1d-f549-464f-8542-e9d0c1cbd7b5-asdadada.png"/>
		</Head>
	);
}

export default HeadContent;
