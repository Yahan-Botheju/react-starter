import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';

const Rating = () => {
	const stars = Array.from({ length: 5 }, (_, i) => i + 1);

	const clicked = (index) => console.log('clicked', index);
	const hovered = (direction) => console.log('hovered', direction);

	return (
		<>
			<div className="container-main">
				<div className="rating-container">
					<h2>Rate Your Experience</h2>
					<div className="stars-container">
						{stars.map((starValue, index) => (
							<div
								className="star"
								onMouseEnter={() => hovered('enter')}
								onMouseLeave={() => hovered('leave')}
								onClick={() => clicked(index)}
								key={starValue}>
								<FontAwesomeIcon
									icon={faSolidStar}
									className="rating-color-none"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Rating;
