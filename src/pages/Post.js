import React, { useState, useEffect, useRef } from 'react';

export default function Show(props) {
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
		<div className="container">
			{Object.keys(ad).length ? (
				<>
          <h3>{ad.name}</h3>
          <h3>{ad.description}</h3>
          <img src={`${ad.imageUrl}`}
				</>
			) : (
				<h1>Loading...</h1>
			)}
			<form onSubmit={handleUpdate}>
				<div className="mb-3">
					<label className="form-label">Title</label>
					<input
						type="text"
						className="form-control"
						ref={nameInput}
						defaultValue={ad.name}
					/>
				</div>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            ref={descriptionInput}
            defaultValue={ad.description}
          />
        </div>
				<div className="mb-3">
					<label className="form-label">Url</label>
					<input
						type="text"
						className="form-control"
						ref={urlInput}
						defaultValue={ad.imageUrl}
					/>
					<div className="form-text">
						Whatever you put in here with be a link.
					</div>
				</div>
				<div className="d-inline">
					<input
						className="btn btn-primary"
						type="submit"
						value="Update Ad"
					/>
				</div>
				<div className="d-inline p-2">
					<button
						className="btn btn-danger"
						onClick={handleDelete}
						type="button"
					>
						DELETE ME
					</button>
				</div>
			</form>
		</div>
	);
}
