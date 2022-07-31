import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Footer2 from "../Footer";
 

export default function AssentosPage () {
    const { idSessao } = useParams();
    const [infos, setInfos] = useState([]);
    const [assentos, setAssentos] = useState([]);

    useEffect (() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);

        promise.then((res) => 
        {setAssentos(res.data.seats); setInfos(res.data)}
        )

    },[]);

    function Assento ({idAssento, nameAssento, disponivel}) {
        const [selecionado, setSelecionado] = useState(false);

        if (disponivel === true) {
            if (selecionado) {
            return (
                <div className="selecionado" onClick={() => 
                    {selecionado ? setSelecionado(false) : setSelecionado(true)}}> 
                    {nameAssento} 
                </div>
            )} else {
            return (
                <div className="disponivel" onClick={() => 
                    {selecionado ? setSelecionado(false) : setSelecionado(true)}}> 
                    {nameAssento} 
                </div>   
            )}
        } else {
            return (
            <div className="indisponivel" onClick={() => 
                alert("Esse assento não está disponível")}> {nameAssento}
            </div> 
            )}

    }

    return (
        <>
        <div className="body">
        <div className="title"><h2>Selecione o(s) assento(s)</h2></div>
        <div className="assentos">
            {assentos.map((assento, index) => 
            <Assento key={index} idAssento={assento.id} nameAssento={assento.name} disponivel={assento.isAvailable}/>)}
        </div>

        </div>
        {/* <Footer2 footerImg={assentos.movie.posterURL} footerTitle={assentos.movie.title}/> */}
        </>
    )
}