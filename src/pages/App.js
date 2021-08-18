import React, { useState } from 'react';

export default function App(props) {
	const [name, updateName] = useState('Jason');
	const [query, updateQuery] useState({
		baseUrl: 'https://collectionapi.metmuseum.org/public/collection/v1/objects/',
		option: '&t=',
		title: '',
		searchURL: ''
		
	})



	return <div className="AppPage">This is the {props.page} page</div>;
}
