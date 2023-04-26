import React , {useContext} from "react";
import { Link } from "react-router-dom";
import botonprincipal from "../../img/maytheforce.png";
import { Context } from "../store/appContext";



export const Navbar = () => {
	const {store,actions} = useContext(Context) 
	return (
		<nav className="navbar navbar-expand-lg mb-4 pe-5">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img id="logomaytheforce" src={botonprincipal}/>
				</span>
			</Link>
			<button className="navbar-toggler text-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end me-5 " id="navbarNav">
                <ul className="navbar-nav me-5">
                    <Link to="/" style={{textDecoration:"none"}}>
					    <li className="nav-item ">
                            <p className="nav-link active text-secondary" style={{fontSize: "1.1rem", transition: "background-color 0.3s ease"}} aria-current="page" 
							onMouseEnter={(e) => {e.target.style.backgroundColor = "gray"}}
       						 onMouseLeave={(e) => {e.target.style.backgroundColor = "transparent"}} >Inicio</p>
						</li>
					</Link>
					<Link to="/characters/all" style={{textDecoration:"none"}}>
                        <li className="nav-item">
                              <p className="nav-link active text-secondary" style={{fontSize: "1.1rem", transition: "background-color 0.3s ease"}} aria-current="page" 
							onMouseEnter={(e) => {e.target.style.backgroundColor = "gray"}}
       						 onMouseLeave={(e) => {e.target.style.backgroundColor = "transparent"}} >Personajes</p>
                        </li>
					</Link>
					<Link to="/planets/all" style={{textDecoration:"none"}}>
                        <li className="nav-item">
						<p className="nav-link active text-secondary" style={{fontSize: "1.1rem", transition: "background-color 0.3s ease"}} aria-current="page" 
							onMouseEnter={(e) => {e.target.style.backgroundColor = "gray"}}
       						 onMouseLeave={(e) => {e.target.style.backgroundColor = "transparent"}} >Planetas</p>
                        </li>
					</Link>
					<Link to="/starships/all" style={{textDecoration:"none"}}>
					    <li className="nav-item">
						<p className="nav-link active text-secondary" style={{fontSize: "1.1rem", transition: "background-color 0.3s ease"}} aria-current="page" 
							onMouseEnter={(e) => {e.target.style.backgroundColor = "gray"}}
       						 onMouseLeave={(e) => {e.target.style.backgroundColor = "transparent"}} >Naves</p>
                        </li>
					</Link>
					<Link to="/games" style={{textDecoration:"none"}}>
					    <li className="nav-item">
						<p className="nav-link active text-secondary" style={{fontSize: "1.1rem", transition: "background-color 0.3s ease"}} aria-current="page" 
							onMouseEnter={(e) => {e.target.style.backgroundColor = "gray"}}
       						 onMouseLeave={(e) => {e.target.style.backgroundColor = "transparent"}} >Videojuegos</p>
                        </li>
					</Link>
					<Link to="/films/all" style={{textDecoration:"none"}}>
					    <li className="nav-item">
						<p className="nav-link active text-secondary" style={{fontSize: "1.1rem", transition: "background-color 0.3s ease"}} aria-current="page" 
							onMouseEnter={(e) => {e.target.style.backgroundColor = "gray"}}
       						 onMouseLeave={(e) => {e.target.style.backgroundColor = "transparent"}} >Peliculas y Series</p>
                        </li>
					</Link>
					<Link to="/philosophy" style={{textDecoration:"none"}}>
					    <li className="nav-item">
						<p className="nav-link active text-secondary" style={{fontSize: "1.1rem", transition: "background-color 0.3s ease"}} aria-current="page" 
							onMouseEnter={(e) => {e.target.style.backgroundColor = "gray"}}
       						 onMouseLeave={(e) => {e.target.style.backgroundColor = "transparent"}} >Filosofia</p>
                        </li>
					</Link>
					<li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-secondary" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"> <i className="far fa-heart"></i>  { store.favorites.length}</a>
                        <ul className="dropdown-menu">
                            {store.favorites.length == 0 ? (
								<li className="dropdown-item">Vacio</li>
							) :
							(
								store.favorites.map((favorite,i) => {
									return (
										<li className="dropdown-item d-flex justify-content-between">
											{favorite.name}
											<i className="far fa-trash-alt text-black bg-transparent" onClick={()=>actions.deleteFavorite(i)} />
										</li>
										
									)
								})
							)
							}
							<li className="dropdown-item"></li>
                        </ul>
                    </li>
        
                </ul>
            </div>

		</nav>
	);
};



