import React from 'react';

const ArtInfo = props => {
	return (
		<div>
			<h1>{props.art.title}</h1>
			<img src={props.art.primaryImage} alt={props.art.title} />
			<h4>{props.art.artistDisplayName}</h4>
			<p>
				{props.art.objectEndDate}; {props.art.medium}; Dimensions:{' '}
				{props.art.dimensions}
			</p>
		</div>
	);
};

export default ArtInfo;
