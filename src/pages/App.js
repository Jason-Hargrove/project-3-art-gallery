import React, { useState, useEffect } from 'react';
import ArtInfo from '../components/ArtInfo';

export default function App(props) {
	const [name, updateName] = useState('Jason');
	const [objectIDs, setObjectIDs] = useState('');
	const [art, updateArt] = useState({});

	// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Grabing the objectIDs ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

	const getArt = async searchTerm => {
		try {
			// Make fetch request and store response.
			const response = await fetch(
				`https://collectionapi.metmuseum.org/public/collection/v1/search?title=true&q=${searchTerm}`
			);
			// Parse JSON response into a javascript object.
			const data = await response.json();
			// Set the Art state to the Art.
			updateArt(data);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getArt('Sunflowers');
	}, []);

	const handleChange = e => {
		setObjectIDs(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		getArt(objectIDs);
		setObjectIDs('');
	};

	// ↑↑↑↑↑↑↑↑↑↑↑  End - Grabbing the objectIDs ↑↑↑↑↑↑↑↑↑↑↑

	// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Adding an Object to the Page ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

	const postArt = async searchTerm => {
		try {
			// Make fetch request and store response.
			const response = await fetch(
				`https://collectionapi.metmuseum.org/public/collection/v1/objects/${searchTerm}`
			);
			// Parse JSON response into a javascript object.
			const data = await response.json();
			//set the Art state to the Art
			updateArt(data);
		} catch (err) {
			console.error(err);
		}
	};

	const handleIDClick = e => {
		e.preventDefault();
		postArt(e.target.value);
	};

	// ↑↑↑↑↑↑↑↑↑↑↑  Adding an Object to the Page ↑↑↑↑↑↑↑↑↑↑↑

	return (
		<div className="AppPage">
			<h2>Gallery App</h2>
			<h3>{name}</h3>
			<button
				onClick={e => {
					updateName(Math.floor(Math.random() * 1000));
				}}
			>
				Click Me
			</button>
			<form onSubmit={handleSubmit}>
				<label htmlFor="title"> Title</label>
				<input
					id="title"
					type="text"
					value={objectIDs}
					onChange={handleChange}
				/>
				<input type="submit" value="Find Art" />
			</form>
			<div>{Object.keys(art).length > 0 ? art.objectIDs : 'Awaiting Art'}</div>
			<div>
				{art.objectIDs &&
					art.objectIDs.map(word => (
						<div key={word}>
							<button value={word} onClick={handleIDClick}>
								{word}
							</button>
						</div>
					))}
			</div>
			<main>{Object.keys(art).length ? <ArtInfo art={art} /> : ''}</main>
		</div>
	);
}
