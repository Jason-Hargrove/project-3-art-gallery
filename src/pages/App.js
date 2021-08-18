import React, { useState, useEffect } from 'react';

export default function App(props) {
	const [name, updateName] = useState('Jason');
	const [query, updateQuery] = useState({
		baseURL: 'https://collectionapi.metmuseum.org/public/collection/v1/search?',
		option: 'title=true&q=',
		title: '',
		searchURL: ''
	});

	const [art, updateArt] = useState({});
	useEffect(() => {
		query.searchURL.length > 0 &&
			(async () => {
				try {
					const response = await fetch(query.searchURL);
					const data = await response.json();
					updateArt({ ...data });
					updateQuery({ ...query, title: '', searchURL: '' });
				} catch (e) {
					console.error(e);
				}
			})();
	}, [query]);

	const handleChange = e => {
		updateQuery({ ...query, ...{ [e.target.id]: e.target.value } });
	};

	const handleSubmit = e => {
		e.preventDefault();
		updateQuery({
			...query,
			searchURL: query.baseURL + query.option + query.title
		});
	};

	// const list = art
	// 	? art.objectIDs.map(word => {
	// 			<div>{word}</div>;
	// 	  })
	// 	: null;

	return (
		<div className="AppPage">
			<h2>Gallery App</h2>
			<h3>{name}</h3>
			<form onSubmit={handleSubmit}>
				<label htmlFor="title"> Title</label>
				<input
					id="title"
					type="text"
					value={query.title}
					onChange={handleChange}
				/>
				<input type="submit" value="Find Art" />
			</form>
			<div>{Object.keys(art).length > 0 ? art.objectIDs : 'Awaiting Art'}</div>
			<div>
				{art.objectIDs &&
					art.objectIDs.map(word => <div key={word}>{word}</div>)}
			</div>
		</div>
	);
}
