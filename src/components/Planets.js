import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router'
import Jumbotron from 'react-bootstrap/Jumbotron';

function Planets({ id }) {
	const [ planets, setPlanets ] = useState(null);

	useEffect(
		() => {
			axios
				.get('https://swapi.dev/api/planets/' + id + '/')
				.then((response) => {
					setPlanets(response.data);
				})
				.catch(() => navigate("/error"));
		},
		[ id ]
	);

	if (planets == null) {
		return 'loading ...';
	}

	return (
		<Jumbotron>
			<h1>{planets.name}</h1>
			<p>Climate: {planets.climate}</p>
			<p>Terrain: {planets.terrain}</p>
			<p>Surface Water: {planets.surface_water}</p>
			<p>Population: {planets.population}</p>
			<p>Gravity: {planets.gravity}</p>
		</Jumbotron>
	);
}
export default Planets;
