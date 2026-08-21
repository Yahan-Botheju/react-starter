import { useState } from 'react';
import Increment from './Increment';
import Decrement from './Decrement';
import Rest from './Rest';

const Counter = () => {
	const [count, setValue] = useState(0);

	return (
		<>
			<div className="container-main">
				<div className="container-sub">
					<div className="container-counter">
						<h1>Count: {count}</h1>
					</div>
					<div className="container-btns-top">
						<Increment
							count={count}
							setValue={setValue}
						/>
						<Decrement
							count={count}
							setValue={setValue}
						/>
					</div>
					<div className="container-btns-bottom">
						<Rest setValue={setValue} />
					</div>
					<div className="container-warning">
						<p>{count === 10 && 'Maximum Limit is reached..!!'}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Counter;
