import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { use } from 'react';

const LightBulb = () => {
	const [current, switchOnOff] = useState(false);

	return (
		<>
			<div className="container-main">
				<div className="container-bulb">
					<div className="icon">
						<div className={`icon ${current ? 'active' : ''}`}>
							<FontAwesomeIcon
								icon={faLightbulb}
								className="bulb-top"
							/>
							<FontAwesomeIcon
								icon={faLightbulb}
								className="bulb-bottom"
							/>
						</div>
					</div>
				</div>
				<div className="container-button">
					<button onClick={() => switchOnOff(!current)}>
						{!current ? 'on' : 'off'}
					</button>
				</div>
			</div>
		</>
	);
};

export default LightBulb;
