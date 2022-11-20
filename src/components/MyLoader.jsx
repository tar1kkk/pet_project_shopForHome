import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
	<ContentLoader
		speed={2}
		width={400}
		height={400}
		viewBox="0 0 400 400"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<rect x="32" y="1" rx="0" ry="0" width="300" height="300" />
	</ContentLoader>
)


export default MyLoader;