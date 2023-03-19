import React from "react";
import { BrowserRouter, Route, Switch, useContext } from "react-router-dom";


import { Home } from "./views/home";

import { Tablero } from "./views/tablero.jsx";

import injectContext from "./store/appContext";
import { Context } from "./store/appContext";
import { Footer } from "./component/footer";
import { Cell } from "./component/cell_comp.jsx";
import { Fila } from "./views/fila.jsx";
import { Fila_comp } from "./views/fila_comp.jsx";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="p-5  row justify-content-around">
			<div className="text-center">
				<h1 className="display-5">Trafalgar Battle</h1>
			</div>
			<div className="col d-flex flex-column">
				<h1 className="ml-5">Tu Oponente</h1>
				<p>Dispara acá</p>
				<Tablero />
				<Fila num={0} />
				<Fila num={1} />
				<Fila num={2} />
				<Fila num={3} />
				<Fila num={4} />
				<Fila num={5} />
				<Fila num={6} />
				<Fila num={7} />
				<Fila num={8} />
				<Fila num={9} />
			</div>
			<div className="col d-flex flex-column">
				<h1 className="ml-5">Tu Tablero</h1>
				<p>Estos son los disparos de tu oponente</p>
				<Tablero />
				<Fila_comp num={0} />
				<Fila_comp num={1} />
				<Fila_comp num={2} />
				<Fila_comp num={3} />
				<Fila_comp num={4} />
				<Fila_comp num={5} />
				<Fila_comp num={6} />
				<Fila_comp num={7} />
				<Fila_comp num={8} />
				<Fila_comp num={9} />
			</div>

			<Footer />

		</div >
	);
};

export default injectContext(Layout);
