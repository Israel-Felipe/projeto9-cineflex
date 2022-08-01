import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Footer2 from "../Footer2"
import Legenda from "../Legenda"
import Reserva from "../Reserva"

function Assento ({idAssento, nameAssento, disponivel, assSelecionados, setAssSelecionados}) {
    const [selecionado, setSelecionado] = useState(false);
    const [classColor, setClasscolor] = useState("disponivel")

    useEffect (() => {
        if (selecionado === true) {
            setAssSelecionados([...assSelecionados, {idAssento, nameAssento}]);
            setClasscolor("selecionado")
        } else {
            setAssSelecionados(assSelecionados.filter((value => value.idAssento !== idAssento)))
            setClasscolor("disponivel");
        }
    }, [selecionado]);

    if (disponivel === true) {

        return (
            <div className={classColor} onClick={() => 
                {selecionado ? setSelecionado(false) : setSelecionado(true)}}> 
                {nameAssento}
            </div>
        )
    } else {
        return (
        <div className="indisponivel" onClick={() => 
            alert("Esse assento não está disponível")}> {nameAssento}
        </div> 
        )}
}

export default function AssentosPage () {
    const { idSessao } = useParams();
    const [assentos, setAssentos] = useState([]);
    const [movie, setMovie] = useState([]);
    const [data, setData] = useState([]);
    const [info, setInfo] = useState([]);
    const [assSelecionados, setAssSelecionados] = useState([])

    console.log(assSelecionados)

    useEffect (() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);

        promise.then((res) => 
        {setAssentos(res.data.seats); setMovie(res.data.movie); setData(res.data.day); setInfo(res.data)}
        )
        
    },[]);

    return (
        <>
        <div className="body">
            <div className="title"><h2>Selecione o(s) assento(s)</h2></div>
            <div className="assentos">
                {assentos.map((assento, index) => 
                <Assento key={index} idAssento={assento.id} nameAssento={assento.name} disponivel={assento.isAvailable}
                assSelecionados={assSelecionados} setAssSelecionados={setAssSelecionados}/>)}
            </div>
            <Legenda />
            <Reserva assSelecionados={assSelecionados} title={movie.title} weekday={data.weekday}/>
        </div>
        
        <Footer2 footerImg={movie.posterURL} footerTitle={movie.title} footerWeek={data.weekday} footerHor={info.name}/>
        </>
    )
}