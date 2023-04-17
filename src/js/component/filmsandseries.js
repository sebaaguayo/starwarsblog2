import React from "react";
import "../../styles/navbar.css";
import "../../styles/footer.css";
import filmsImage from "../../img/peliculas-series.png";
import { JumbotronVistas } from "./jumbotronvistas";


export const FilmAndSerie = () => {
    return (
        <div>
            <JumbotronVistas
            titulo1="Films and Series"
            imagen1={filmsImage}
            />
        </div>
    )
}