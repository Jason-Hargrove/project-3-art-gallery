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
			<section>
				<p>
					<label htmlFor="name" />
					<span>Name</span>
					<input
						type="text"
						id="name"
						placeholder="Add a title."
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				</p>
				<p>
					<label htmlFor="image" />
					<span>Image URL</span>
					<input
						type="text"
						id="image"
						placeholder="Add an image URL."
						value={imageUrl}
						onChange={e => setImageUrl(e.target.value)}
					/>
				</p>
				<p>
					<label htmlFor="description" />
					<span>Description</span>
					<input
						type="text"
						id="description"
						placeholder="Add a description."
						value={description}
						onChange={e => setDescription(e.target.value)}
					/>
				</p>
				<p>
					<input
						className="standard-button savead-button"
						type="submit"
						value="Save Ad"
					/>
				</p>
			</section>
		</form>
	);
};

export default AddAd;
