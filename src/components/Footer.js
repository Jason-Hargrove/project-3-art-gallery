import React from 'react';
import Button from './Button';

const Footer = ({ title, onAdd, showAdd }) => {
	return (
		<>
			<h1 className="mt-4 mb-4">{title}</h1>
			<Button
				color={showAdd ? 'red' : 'green'}
				text={showAdd ? 'Close' : 'Add a Bookmark'}
				onClick={onAdd}
			/>
		</>
	);
};

export default Footer;
