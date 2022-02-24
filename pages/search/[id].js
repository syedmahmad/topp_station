import Search from "../../src/components/Search";

function SingleSearchPage(props) {

	return (
			<Search search={props?.search}/>
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
