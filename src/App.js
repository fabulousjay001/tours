import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
	const [loading, setLoading] = useState(true);
	const [tours, setTours] = useState([]);

	const removeTours = (id) => {
		const newTours = tours.filter((tour) => tour.id !== id);
		setTours(newTours);
	};

	const fetchTours = async () => {
		setLoading(true);

		try {
			const resp = await fetch(url);
			const tours = await resp.json();

			setLoading(false);
			setTours(tours);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};

	useEffect(() => {
		fetchTours();
	}, []);

	if (tours.length === 0) {
		return (
			<div className="title">
				<h1>No tours left</h1>
				<button className="btn" onClick={fetchTours}>
					refresh
				</button>
			</div>
		);
	}

	return loading ? (
		<Loading />
	) : (
		<Tours tourData={tours} remove={removeTours} />
	);

	// tours is a state variable that holds an array of tour data fetched from an API.
}

export default App;
