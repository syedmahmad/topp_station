import Search from "../../src/components/Search";
import axios from 'axios';
import HeadContent from '../../src/singleton/headContent';

function SingleSearchPage(props) {

	const meta = {
		title: `title of search ${props?.search}`,
		description: `This is a description of search ${props?.search}`,
		image_url: "",
		route: `search/${props?.search}`
	}

	return (
		<>
			<HeadContent
				title={meta?.title}
				description={meta?.description}
				route={meta?.route}
				image_url={meta?.image_url}
				keywords={""}
			/>
			<Search search={props?.search}/>
		</>
	)
}

export async function getServerSideProps(context) {
	return {
		props: {
			search: context.query.id,
		},
	}
}

export default SingleSearchPage;
