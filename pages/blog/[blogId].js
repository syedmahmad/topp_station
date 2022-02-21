import Blog from "../../src/components/Blog";
import axios from 'axios';
import HeadContent from '../../src/singleton/headContent';

function BlogPage(props) {
	const meta = {
		title: props?.blog?.title || `title of blog ${props?.id}`,
		description: props?.blog?.description || `This is a description of blog ${props.id}`,
		image_url: props?.blog?.image || "",
		route: `blog/${props?.id}`
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
			<Blog id={props?.id} blog={props.blog} blogs={props.blogs} />
		</>
	)
}

export async function getServerSideProps(context) {
	const blog = await axios.get("https://toppstation.com/api/blogs/" + context.query.blogId);

	return {
		props: {
			id: context.query.blogId,
			blog: blog?.data[0] || null, 
		},
	}
}

export default BlogPage;
