
import { Link } from "react-router-dom";

export default function Film ({imgFilm, titleFilm, idFilm}) {
    return (
        <div className="filmeCard">
            <Link to={`/sessoes/${idFilm}`}>
                <img src={imgFilm} alt={titleFilm}></img> 
            </Link>
        </div> 
    )
}

