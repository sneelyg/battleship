import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from '../component/card.jsx';
import { Navbar } from '../component/navbar.js'
import { Jumbotron } from '../component/jumbotron.jsx'
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">

		<h1>¡¡Wubba Lubba Dub Dub!!</h1>
	
			<Jumbotron title="Personajes" ruta = "/characters" />
		
		<Jumbotron title="Episodios" />


	</div>
);
/**<Card title="Rick Sanchez"
			description="Rick es el hombre más intelignete del universo, y el protagonista de la serie."
			url="https://i.pinimg.com/280x280_RS/d1/4c/d1/d14cd1950171b9b097fb149c67f1abc3.jpg" />
 */