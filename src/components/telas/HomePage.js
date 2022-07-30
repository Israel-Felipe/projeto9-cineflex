

import { useState, useEffect } from "react";
import axios from "axios";
import Film from "../Film";


export default function HomePage () {

    const [listFilm, setListFilm] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");
    
        promise.then((res) => {
            setListFilm(res.data);
        });
      }, []);

    return (
        <>
        
            <div className="title"><h2>Selecione o filme</h2></div>
            

            <div className="listaFilmes">
                {listFilm.map((film, index) => <Film key={index} imgFilm={film.posterURL} titleFilm={film.title}/> )}
            </div>
        </>
    )
}
