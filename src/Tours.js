import React from "react";
import Tour from "./Tour";
const Tours = ({ tourData, remove }) => {
	return (
		<section>
			<div className="title">
				<h2> Jay Store</h2>
				<div className="underline"></div>

				{tourData.map((data) => {
					return <Tour key={data.id} {...data} onDelete={remove} />;
				})}
			</div>
		</section>
	);
};

export default Tours;
