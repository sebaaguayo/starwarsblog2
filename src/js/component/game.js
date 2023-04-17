import React from "react";
import "../../styles/navbar.css";
import "../../styles/footer.css";
import gamesImage from "../../img/videojuegos.png";
import { JumbotronVistas } from "./jumbotronvistas";


export const Game = () => {
    return (
        <div>
            <JumbotronVistas
            titulo1="Games"
            imagen1={gamesImage}
            />
        </div>
    )
}