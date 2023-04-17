import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import "../styles/home.css";
import "../styles/footer.css";


import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Characters } from "./views/characters";
import { Planets } from "./views/planets";
import { Starships } from "./views/starships";
import { FilmsAndSeries } from "./views/filmsandseries";
import { Games } from "./views/games";
import { Philosophy } from "./views/philosophy";
import { CharacterDetails } from "./views/characterdetails";
import injectContext from "./store/appContext";
import { PlanetsDetails } from "./views/planetsdetails";
import { FilmsDetails } from "./views/filmsdetails";
import { StarshipsDetails } from "./views/starshipsdetails";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div id="er">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/details/:id" element={<Single />} />
						<Route path="/planets/all" element={<Planets />} />
						<Route path="/planets/details/:id"  />
						<Route path="/characters/all" element={<Characters />} />
						<Route path="/characters/details/:id"   element={<CharacterDetails />}/>
						<Route path="/starships/all" element={<Starships />} />
						<Route path="/spaceships/details/:id"  />
						<Route path="/films/all" element={<FilmsAndSeries />} />
						<Route path="/films/details/:id"  />
						<Route path="/games" element={<Games />}  />
						<Route path="/philosophy" element={<Philosophy/>}  />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" />
		</div>
	);
};

export default injectContext(Layout);
