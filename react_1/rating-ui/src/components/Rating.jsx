import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Rating = () => {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);

	const stars = Array.from({ length: 5 }, (_, i) => i + 1);
	const feedbackMessages = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent'];

	return (
		<>
			<div className="container-main">
				<div className="rating-container">
					<h2>Rate Your Experience</h2>
					<div className="stars-container">
						{stars.map((starValue) => (
							<div
								onClick={() => setRating(starValue)}
								onMouseEnter={() => setHover(starValue)}
								onMouseLeave={() => setHover(0)}
								className="star"
								key={starValue}>
								<FontAwesomeIcon
									icon={faSolidStar}
									className={`starValue ${starValue <= (hover || rating) ? 'active' : ''}`}
								/>
							</div>
						))}
					</div>
					<div className="feedback">
						{rating > 0 && <p>{feedbackMessages[rating - 1]}</p>}
					</div>
				</div>
			</div>
		</>
	);
};

export default Rating;
