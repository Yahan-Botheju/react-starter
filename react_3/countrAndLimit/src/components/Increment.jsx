import React from 'react';

const Increment = ({ count, setValue }) => {
	return (
		<>
			<button onClick={() => count < 10 && setValue(count + 1)}>
				Increment
			</button>
		</>
	);
};

export default Increment;
