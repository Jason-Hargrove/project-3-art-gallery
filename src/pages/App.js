import React, { useState, useEffect } from 'react';
import ArtInfo from '../components/ArtInfo';
import RightPanel from '../components/RightPanel';
import Footer from '../components/Footer';

export default function App(props) {
	const [name, updateName] = useState('Jason');
	const [objectIDs, setObjectIDs] = useState('');
	const [art, updateArt] = useState({});
	const [populate, updatePopulate] = useState({});

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
			updatePopulate('');
		} catch (err) {
			console.error(err);
		}
	};

	const handleChange = e => {
		setObjectIDs(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		getArt(objectIDs);
		setObjectIDs('');
	};

	// ↑↑↑↑↑↑↑↑↑↑↑  End - Grabbing the objectIDs ↑↑↑↑↑↑↑↑↑↑↑

	// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Add an Object to the Page ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

	const postArt = async searchTerm => {
		try {
			// Make fetch request and store response.
			const response = await fetch(
				`https://collectionapi.metmuseum.org/public/collection/v1/objects/${searchTerm}`
			);
			// Parse JSON response into a javascript object.
			const data = await response.json();
			updatePopulate(data);
			updateArt('');
		} catch (err) {
			console.error(err);
		}
	};

	const handleIDClick = e => {
		e.preventDefault();
		postArt(e.target.value);
	};

	// ↑↑↑↑↑↑↑↑↑↑↑  End - Add an Object to the Page ↑↑↑↑↑↑↑↑↑↑↑

	return (
		<>
			<section>
				<header>
					<h2>Gallery App</h2>
					<h3>{name}</h3>
					<button
						onClick={e => {
							updateName(Math.floor(Math.random() * 1000));
						}}
					>
						Click Me
					</button>
				</header>

				<main className="AppPage">
					<article className="main">
						{Object.keys(populate).length ? <ArtInfo art={populate} /> : ''}
					</article>

					<aside className="sidebar1">
						<form onSubmit={handleSubmit}>
							<label htmlFor="title">Title</label>
							<input
								id="title"
								type="text"
								value={objectIDs}
								onChange={handleChange}
							/>
							<input type="submit" value="Find Art" />
						</form>
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
					</aside>

					<aside className="sidebar2">
						<RightPanel title={'Right Panel'} />
					</aside>
				</main>

				<footer>
					<Footer title={'Footer'} />
				</footer>
			</section>
		</>
	);
}
