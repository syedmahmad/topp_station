import { useEffect, useState } from 'react';
import HeadContent from './headContent';
import MetaTags from "../common/meta_tags";

const HeadWrapper = ({ componentName }) => {
	const [meta, setMeta] = useState(MetaTags[componentName]);

	useEffect(() => {
		// set default meta tags
		if (!meta || Object.keys(meta).length === 0) {
			setMeta(MetaTags['default']);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [componentName]);

	return (
		<HeadContent
			title={meta?.title}
			description={meta?.description}
			route={meta?.route}
			image_url={meta?.image_url}
			keywords={meta?.keywords}
		/>
	);
};

export default HeadWrapper;
