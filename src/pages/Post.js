import React, { useState, useEffect, useRef } from 'react';

export default function Post(props) {
	const [ad, setAd] = useState({});
	const nameInput = useRef(null); // It's like doc.querySelector('input#title').
	const urlInput = useRef(null); // doc.querySelector('input#url').
	const descriptionInput = useRef(null);

	const handleUpdate = async e => {
		e.preventDefault();
		try {
			const response = await fetch(`/api/ads/${props.match.params.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: nameInput.current.value, // <----- Current has all the dom elements you love.
					imageUrl: urlInput.current.value,
					description: descriptionInput.current.value
				})
			});
			const data = await response.json();
			setAd(data);
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/'); // Send us back to '/Home' / reload everyting. Had to change it to '/'
		}
	};

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/ads/${props.match.params.id}`);
				const data = await response.json();
				setAd(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	const handleDelete = async e => {
		try {
			const response = await fetch(`/api/ads/${props.match.params.id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const deletedAd = await response.json(); // Saved deleted blog if we want to use it.
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/'); // Send us back to '/Home' / reload everyting. Had to change it to '/'
		}
	};

	return (
		<>
			<form className="post" onSubmit={handleUpdate}>
				<header id="ad-info">
					<h1>Update or Delete Form</h1>
					{Object.keys(ad).length ? (
						<>
							<h3>{ad.name}</h3>
							<img src={`${ad.imageUrl}`} />
							<p>{ad.description}</p>
						</>
					) : (
						<h1>Loading...</h1>
					)}
				</header>
				<section>
					<p>
						<label htmlFor="name" />
						<span>Name</span>
						<input
							type="text"
							id="name"
							className="form-control"
							ref={nameInput}
							defaultValue={ad.name}
						/>
					</p>
					<p>
						<label htmlFor="description" />
						<span>Description</span>
						<input
							type="text"
							id="description"
							className="form-control"
							ref={descriptionInput}
							defaultValue={ad.description}
						/>
					</p>
					<p>
						<label htmlFor="image" />
						<span>Image</span>
						<input
							type="text"
							id="image"
							className="form-control"
							ref={urlInput}
							defaultValue={ad.imageUrl}
						/>
					</p>
					<p>
						<input
							className="standard-button update"
							type="submit"
							value="Update Ad"
						/>
					</p>
					<p>
						<button
							className="delete-button"
							onClick={handleDelete}
							type="button"
						>
							DELETE ME
						</button>
					</p>
				</section>
			</form>
		</>
	);
}
