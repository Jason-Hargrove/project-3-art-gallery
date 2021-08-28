import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ArtInfo from '../components/ArtInfo';
import AddAd from '../components/AddAd';
import Footer from '../components/Footer';

export default function App(props) {
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
			<section className="app-page">
				<header>
					<img
						className="logo"
						src="/img/serch-the-moma-api.png"
						id="imgTag"
						alt="Test Image"
					/>
				</header>

				<main>
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
							<input
								className="standard-button"
								type="submit"
								value="Find Art"
							/>
						</form>
						{art.objectIDs &&
							art.objectIDs.map(word => (
								<div key={word}>
									<button
										className="objectid-button"
										value={word}
										onClick={handleIDClick}
									>
										{word}
									</button>
								</div>
							))}
					</aside>

					<aside className="sidebar2">
						<ul>
							{ads.map(ad => {
								return (
									<li key={ad._id}>
										<h3>{ad.name}</h3>
										<Link to={`${ad._id}`}>
											<img src={`${ad.imageUrl}`} />
										</Link>
										<h3>{ad.description}</h3>
									</li>
								);
							})}
						</ul>
					</aside>
				</main>

				<footer>
					<Footer onAdd={() => setShowAddAd(!showAddAd)} showAdd={showAddAd} />
					{showAddAd && <AddAd onAdd={addAd} />}
				</footer>
			</section>
		</>
	);
}
