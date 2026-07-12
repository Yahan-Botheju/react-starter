const Model = (isOpen, onClose, rating) => {
	if (!isOpen) return null;

	return (
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
						onClick={onClose}>
						close
					</button>
				</div>
			</div>
		</div>
	);
};

export default Model;
