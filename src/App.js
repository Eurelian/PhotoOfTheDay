import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import NasaPhoto from "./components/photo";

import "./App.css";
const apiKey = process.env.REACT_APP_NASA_KEY;
function App() {
	const [data, setData] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(
				`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
			)
				.then((res) => res.json())
				.then((res) => setData(res))
				.catch((err) => console.log(err, "error"));
			console.log(res);
		};
		fetchData();
	}, []);
	return (
		<div>
			<Switch>
				<Route
					path='/photo'
					render={(props) => <NasaPhoto data={data} {...props} />}
				/>
				<Route path='/' component={Home} />
			</Switch>
		</div>
	);
}

export default App;
