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

			<meta property="og:site_name" content="Toppstation | Enabling Entrepreneurs worldwide"/>
			<meta property="og:title" content={title || "Toppstation | Enabling Entrepreneurs worldwide"} />
			<meta property="og:description" content={description || "Discover benefits of building a business from a pro-business environment, including how tax incentives, rule of law, connectivity to other markets, strategic location and skilled workforce benefit you regardless where you are."} />
			<meta property="og:image" itemProp="image" content={"/images/300.png"}/>
			<meta property="og:type" content="website" />
			<link rel="canonical" href={url + route} />
			{/* <meta property="fb:app_id" content="1757891891170883" /> */}
			{/* No need to change anything here  */}
			<meta property="og:type" content="website" />
			<meta property="og:image:type" content="image/jpeg"/>

			{/* <!-- Size of image. Any size up to 300. Anything above 300px will not work in WhatsApp --> */}
			<meta property="og:image:width" content="300"/>
			<meta property="og:image:height" content="300"/>

			{/* <!-- Website to visit when clicked in fb or WhatsApp--> */}
			<meta property="og:url" content={url + route} />

			{/* Twitter special case  */}
			<meta name="twitter:card" content="summary_large_image"/>
			<meta name="twitter:site" content="Toppstation | Enabling Entrepreneurs worldwide"/>
			<meta name="twitter:title" content={title || "Toppstation | Enabling Entrepreneurs worldwide"}/>
			<meta name="twitter:description" content={description || "Discover benefits of building a business from a pro-business environment, including how tax incentives, rule of law, connectivity to other markets, strategic location and skilled workforce benefit you regardless where you are."} />
			<meta name="twitter:image" content="/images/300.png"/>
		</Head>
	);
}

export default HeadContent;
