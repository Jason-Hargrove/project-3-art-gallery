import React from 'react';

const Button = ({ color, text, onClick }) => {
	return (
		<button
			onClick={onClick}
			style={{ backgroundColor: color }}
			className="btn mb-3 add-btn"
		>
			{text}
		</button>
	);
};

export default Button;
