import React from 'react';
import { useState } from 'react';

const AddAd = ({ onAdd }) => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [imageUrl, setImageUrl] = useState('');

	const onSubmit = e => {
		e.preventDefault();

		if (!name || !description || !imageUrl) {
			alert('Please add an Ad');
			return;
		}
		onAdd({ name, description, imageUrl });
		setName('');
		setDescription('');
		setImageUrl('');
	};

	return (
		<form onSubmit={onSubmit}>
			<div className="mb-3">
				<label className="form-label">Name</label>
				<input
					className="form-control"
					type="text"
					placeholder="Add Ad"
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<div className="form-text">
					We'll always share your email with everyone.
				</div>
			</div>
			<div className="mb-3">
				<label className="form-label">Image URL</label>
				<input
					className="form-control"
					type="text"
					placeholder="Add Image URL"
					value={imageUrl}
					onChange={e => setImageUrl(e.target.value)}
				/>
			</div>
			<div className="mb-3">
				<label className="form-label">Description</label>
				<input
					className="form-control"
					type="text"
					placeholder="Add Description"
					value={description}
					onChange={e => setDescription(e.target.value)}
				/>
			</div>

			<input type="submit" value="Save Ad" className="btn btn-primary mb-3" />
		</form>
	);
};

export default AddAd;
