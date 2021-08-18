import React, { useState } from 'react';

export default function App(props) {
	const [name, updateName] = useState('Jason');
	const [query, updateQuery] = useState({
		baseURL: 'https://collectionapi.metmuseum.org/public/collection/v1/search?',
		option: 'title=true&q=',
		title: '',
		searchURL: ''
	});

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
			<h1>
				<a href={query.searchURL}>Your URL:{query.searchURL}</a>
			</h1>
		</div>
	);
}
