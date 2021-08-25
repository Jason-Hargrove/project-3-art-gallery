import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ArtInfo from '../components/ArtInfo';
import AddAd from '../components/AddAd';
import RightPanel from '../components/RightPanel';
import Footer from '../components/Footer';

export default function App(props) {
	const [name, updateName] = useState('Jason');
	const [objectIDs, setObjectIDs] = useState('');
	const [art, updateArt] = useState({});
	const [populate, updatePopulate] = useState({});
	const [ads, setAds] = useState([]);
	const [showAddAd, setShowAddAd] = useState(false);

	// ========== MOMA API Call ==========
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
	// ========== End - MOMA API Call ==========

	// ========== Advertisements ==========
	// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Right Panel Ads ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/ads');
				const data = await response.json();
				setAds(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	// Add an Ad
	const addAd = async e => {
		try {
			const response = await fetch('/api/ads/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(e)
			});
			const data = await response.json();
			setAds([...ads, data]);
		} catch (error) {
			res.status(404).json({ message: error.message });
		}
	};

	// ↑↑↑↑↑↑↑↑↑↑↑  End - Add an Object to the Page ↑↑↑↑↑↑↑↑↑↑↑
	// ========== End - Advertisements ==========

	return (
		<>
			<section>
				<header>
					<img src="/img/testImg.png" id="imgTag" alt="Test Image" />
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
						<ul>
							{ads.map(ad => {
								return (
									<li key={ad._id}>
										<h3>{ad.name}</h3>
										<h3>{ad.description}</h3>
										<img src={`${ad.imageUrl}`} />
									</li>
								);
							})}
						</ul>
					</aside>
				</main>

				<footer>
					<div className="container mt-3">
						<Footer
							title="It's the Ad Page"
							onAdd={() => setShowAddAd(!showAddAd)}
							showAdd={showAddAd}
						/>
						{showAddAd && <AddAd onAdd={addAd} />}
						<ul className="list-group">
							{ads.map(ad => {
								return (
									<li key={ad._id} className="list-group-item">
										<Link to={`/${ad._id}`}>
											<h3>{ad.title}</h3>
										</Link>
										<a href={ad.url}>{ad.url}</a>
									</li>
								);
							})}
						</ul>
					</div>
				</footer>
			</section>
		</>
	);
}
