const Tour = ( image, date, info, title, location, cost, duration, removeTour ) => {
	const handleRemoveTour = () => {
		onDelete(tour.id);
	};
	return (
		<article className="tour-card">
			<div className="tour-img-container">
				<img src={image} className="tour-img" alt="Tibet Adventure" />
				<p className="tour-date">{date}</p>
			</div>
			<button className="delete-btn" onClick={handleRemoveTour}>Remove</button>
			<div className="tour-info">
				<div className="tour-title">
					<h4>{title}</h4>
				</div>
				<p>{info}</p>
				<div className="tour-footer">
					<p>
						<span>
							<i className="fas fa-map"></i>
						</span>
						{location}
					</p>
					<p>from ${cost}</p>
					<p>{duration} days</p>
				</div>
			</div>
		</article>
	);
}

export default Tour;
