import React from "react";
import jumbotromHomeImage from "../../img/home.png";
import "../../styles/home.css";
import Personaje from "../../img/personajes.png";
import Naves from "../../img/naves.png";
import Planetas from "../../img/planetas.png";
import Videojuegos from "../../img/videojuegos.png";
import Filosofia from "../../img/filosofia.png";
import PeliculasSeries from "../../img/peliculas-series.png";
import { Jumbotron } from "../component/jumbotrom";
import { Homecard } from "../component/homecard";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<Jumbotron
		    titulo1="Bienvenido, "
			titulo2="Joven Padawan"
			parrafo1="Lorem ipsum is simply dummy text of the printing and typesetting industry."
			imagen1={jumbotromHomeImage}
		/>
		<>
			<div className="container">
				<div className="row">
					<div className="col-md-6 mt-3">
						<Link to="/characters/all" style={{textDecoration:"none"}}>
						    <Homecard
							image1={Personaje}
							titulo1="Personajes"
						    />
						</Link>
					</div>
					<div className="col-md-6 mt-3">
					    <Link to="/starships/all" style={{textDecoration:"none"}}>
						<Homecard
							image1={Naves}
							titulo1="Naves"
						/>
						</Link>
					</div>
					<div className="col-md-6 mt-3">
					    <Link to="/planets/all" style={{textDecoration:"none"}}>
						<Homecard
							image1={Planetas}
							titulo1="Planetas"
						/>
						</Link>
					</div>
					<div className="col-md-6 mt-3">
					    <Link to="/games" style={{textDecoration:"none"}}>
						<Homecard
							image1={Videojuegos}
							titulo1="Videojuegos"
						/>
						</Link>
					</div>
					<div className="col-md-6 mt-3">
					    <Link to="/philosophy" style={{textDecoration:"none"}}>
						<Homecard
							image1={Filosofia}
							titulo1="Filosofia"
						/>
						</Link>
					</div>
					<div className="col-md-6 mt-3">
					    <Link to="/films/all" style={{textDecoration:"none"}}>
						<Homecard
							image1={PeliculasSeries}
							titulo1="Peliculasyseries"
						/>
						</Link>
					</div>
				</div>

			</div>
		</>		
	</div>
);