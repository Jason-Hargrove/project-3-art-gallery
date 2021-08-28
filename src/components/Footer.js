import React from 'react';
import Button from './Button';

const Footer = ({ onAdd, showAdd }) => {
	return (
		<>
			<Button
				color={showAdd ? 'red' : 'green'}
				text={showAdd ? 'Close' : 'Add an Ad'}
				onClick={onAdd}
			/>
		</>
	);
};

export default Footer;
