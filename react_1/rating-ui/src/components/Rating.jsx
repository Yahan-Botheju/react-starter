import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Star from './Star';

const Rating = ({ color = '#ffcc00' }) => {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);
	const [submit, setSubmitted] = useState(false);

	const stars = Array.from({ length: 5 }, (_, i) => i + 1);
	const feedbackMessages = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent'];
	const handleSubmit = () => {
		if (rating > 0) {
			setSubmitted(true);
		}
	};
	const closeModel = () => {
		setSubmitted(false);
		setRating(0);
		setHover(0);
	};

	return (
		<>
			<div className="container-main">
				<div className="rating-container">
					<h2>Rate Your Experience</h2>
					<div className="stars-container">
						{stars.map((starValue) => (
							<Star
								key={starValue}
								starValue={starValue}
								rating={rating}
								hover={hover}
								color={color}
								ratingClick={setRating}
								hoverEnter={setHover}
								hoverLeave={() => setHover(0)}
							/>

							// <div
							// 	onClick={() => setRating(starValue)}
							// 	onMouseEnter={() => setHover(starValue)}
							// 	onMouseLeave={() => setHover(0)}
							// 	className="star"
							// 	key={starValue}>
							// 	<FontAwesomeIcon
							// 		icon={faSolidStar}
							// 		className={`starValue ${starValue <= (hover || rating) ? 'active' : ''}`}
							// 	/>
							// </div>
						))}
					</div>
					<div className="feedback">
						{rating > 0 && <p>{feedbackMessages[rating - 1]}</p>}
					</div>
					<div className="submit-container">
						<button
							className="submit-btn"
							onClick={handleSubmit}
							disabled={rating === 0}>
							submit
						</button>
					</div>
				</div>

				{/* Model */}

				{submit && (
					<div className="model-overlay">
						<div className="model-container">
							<div className="words-container">
								<h3>Thanks You</h3>
								<p>
									You Rated us {rating} star{rating > 1 ? 's' : ''}
								</p>
							</div>
							<div className="close-container">
								<button
									className="close-btn"
									onClick={closeModel}>
									close
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Rating;
