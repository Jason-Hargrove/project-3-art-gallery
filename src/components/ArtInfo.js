import React from 'react';

const ArtInfo = props => {
	return (
		<div>
			<h1>Title: {props.art.title}</h1>
			<h2>Date: {props.art.objectEndDate}</h2>
			<img src={props.art.primaryImage} alt={props.art.title} />
			<h3>Dimensions: {props.art.dimensions}</h3>
			<h4>Object ID: {props.art.objectIDs}</h4>
		</div>
	);
};

export default ArtInfo;
