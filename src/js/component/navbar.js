import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
				<Link to ="/">
				<a class="navbar-brand" href="#">Rick and Morty </a>		</Link>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
	
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item">
						<Link to="/">
							< a class="nav-link active" aria-current="page" href="#">Home</a>
						</Link>
					</li>
					<li class="nav-item">
						<Link to="/characters">
							< a class="nav-link active" aria-current="page" href="#">Caracteres</a>
						</Link>
					</li>
					<li class="nav-item">
						<Link to="/episodes">
							< a class="nav-link active" aria-current="page" href="#">Episodios</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
		</nav >
	);
};
