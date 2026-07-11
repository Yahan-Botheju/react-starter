import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';

const Star = ({
	starValue,
	rating,
	hover,
	color,
	ratingClick,
	hoverEnter,
	hoverLeave,
}) => {
	const isActive = starValue <= (hover || rating);

	return (
		<>
			<div
				onClick={() => ratingClick(starValue)}
				onMouseEnter={() => hoverEnter(starValue)}
				onMouseLeave={hoverLeave}
				className="star">
				<FontAwesomeIcon
					icon={faSolidStar}
					className={isActive ? 'active' : 'diactivate'}
				/>
			</div>
		</>
	);
};

export default Star;
