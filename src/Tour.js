import React, { useState } from "react";

const Tour = ({ id, name, image, price, info, onDelete }) => {
	const [readMore, setreadMore] = useState(true);

	return (
		<article className="single-tour">
			<img src={image} alt={name} />
			<footer>
				<div className="tour-info">
					<h4>{name}</h4>
					<h4 className="tour-price">${price}</h4>
				</div>
				<p>
					{readMore ? info : `${info.substring(0, 200)}...`}
					<button
						onClick={() => {
							setreadMore(!readMore);
						}}>
						{readMore ? "Read Less" : "Read More"}
					</button>
				</p>
				<button className="delete-btn" onClick={() => onDelete(id)}>
					{" "}
					Not Interested
				</button>
			</footer>
		</article>
	);
};

export default Tour;
