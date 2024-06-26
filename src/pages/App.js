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

	// ========== MET API Call ==========
	// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Grabbing the objectIDs ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

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
			console.error('Error fetching art:', err);
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
			console.error('Error posting art:', err);
		}
	};

	const handleIDClick = e => {
		e.preventDefault();
		postArt(e.target.value);
	};

	// ↑↑↑↑↑↑↑↑↑↑↑  End - Add an Object to the Page ↑↑↑↑↑↑↑↑↑↑↑
	// ========== End - Met API Call ==========

	// ========== Advertisements ==========
	// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Right Panel Ads ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

	useEffect(() => {
		const fetchAds = async () => {
			try {
				// Fetch ads from API
				const response = await fetch('/api/ads');
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				// Parse JSON response into a javascript object
				const data = await response.json();
				setAds(data);
			} catch (error) {
				console.error('Error fetching ads:', error);
			}
		};
		fetchAds();
	}, []);

	// Add an Ad
	const addAd = async e => {
		try {
			// Send POST request to add a new ad
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
			console.error('Error adding ad:', error);
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
						src="/img/search-the-met-api.png"
						id="imgTag"
						alt="Test Image"
					/>
				</header>

				<main>
					<article className="main">
						{/* Display the selected art information */}
						{Object.keys(populate).length ? <ArtInfo art={populate} /> : ''}
					</article>

					<aside className="sidebar1">
						{/* Form to search for art */}
						<form onSubmit={handleSubmit}>
							<label id="wiggle-wiggle" htmlFor="title">
								Lets find some art!
							</label>
							<input
								id="title"
								placeholder="Enter a title here"
								type="text"
								value={objectIDs}
								onChange={handleChange}
							/>
							<input
								className="standard-button find-art-button"
								type="submit"
								value="Find Art"
							/>
						</form>
						<p>Then click on an object ID below.</p>
						{/* Display list of object IDs */}
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
						{/* Display list of ads */}
						<ul>
							{ads.length > 0 ? (
								ads.map(ad => (
									<li key={ad._id}>
										<a href="http://www.jasonhargroveart.com/purchase">
											<h4>{ad.name}</h4>
										</a>
										<Link to={`${ad._id}`}>
											<img src={`${ad.imageUrl}`} alt={ad.name} />
										</Link>
										<a href="http://www.jasonhargroveart.com/purchase">
											<p>{ad.description}</p>
										</a>
									</li>
								))
							) : (
								<p>No ads to display</p>
							)}
						</ul>
					</aside>
				</main>

				<footer>
					<Footer onAdd={() => setShowAddAd(!showAddAd)} showAdd={showAddAd} />
					{/* Show AddAd component when showAddAd is true */}
					{showAddAd && <AddAd onAdd={addAd} />}
				</footer>
			</section>
		</>
	);
}
