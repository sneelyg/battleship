import React from "react";
import { BrowserRouter, Route, Switch, useContext } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Characters } from "./views/characters.jsx";
import { Episodes } from "./views/episodes.jsx";
import injectContext from "./store/appContext";
import {Context} from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { DetailEpisode } from "./views/detailepisode.jsx";
import { DetailChar } from "./views/detailchar.jsx";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/home">
							<Home />
						</Route>
						<Route exact path="/characters">
							<Characters />
						</Route>
						<Route exact path="/episodes">
							<Episodes />
						</Route>
						<Route exact path="/episodes/:epnumber">
							<DetailEpisode />
						</Route>
						<Route exact path="/characters/:charnumber">
							<DetailChar />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
