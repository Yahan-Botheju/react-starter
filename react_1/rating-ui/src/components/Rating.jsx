import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Star from './Star';
import Model from './Model';

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

	//close model and reset UI
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

				<Model
					isOpen={submit}
					onClose={closeModel}
					rating={rating}
				/>

			</div>
		</>
	);
};;

export default Rating;
