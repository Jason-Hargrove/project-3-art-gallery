import React, { useState, useEffect } from 'react';

export default function Home(props) {
	const [portrait, updatePortrait] = useState({});
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					'https://collectionapi.metmuseum.org/public/collection/v1/objects/436524'
				);
				const data = await response.json();
				updatePortrait({ ...data });
			} catch (e) {
				console.error(e);
			}
		})();
	}, []);
	return (
		<div className="HomePage">
			This is the {props.page} page
			<img src={portrait.primaryImage} alt="" />
		</div>
	);
}
