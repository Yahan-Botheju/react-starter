import React from 'react';

const Decrement = ({ count, setValue }) => {
	return (
		<>
			<button onClick={() => count > 0 && setValue(count - 1)}>
				Decrement
			</button>
		</>
	);
};

export default Decrement;
