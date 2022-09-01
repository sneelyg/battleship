import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link to="/">
					<a className="navbar-brand" href="#">Rick and Morty </a>		
					</Link>
				

				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link to="/">
								<a className="nav-link active" aria-current="page" >Home</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/characters">
								<a className="nav-link active" aria-current="page" >Caracteres</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/episodes">
								<a className="nav-link active" aria-current="page" >Episodios</a>
							</Link>
						</li>
						<li className="nav-item ">
							<Link to="/favoritos">
								<a className="nav-link active" aria-current="page" >Favoritos</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav >
	);
};
