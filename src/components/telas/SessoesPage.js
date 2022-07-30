import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Sessao from "../Sessao";
import Footer from "../Footer"

export default function SessoesPage () {
    const { idFilme } = useParams();
    const [sessoes, setSessoes] = useState([]);
    const [infos, setInfos] = useState([]);

    useEffect (() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`);

        promise.then((res) => 
        {setSessoes(res.data.days); setInfos(res.data)}
        )

    },[]);

    return (
        <>
        <div className="body">
        <div className="title"><h2>Selecione o horário</h2></div>
            
            {sessoes.map((sessao, index) => 
            <Sessao key={index} data={sessao.date} weekday={sessao.weekday} horarios={sessao.showtimes}/>)}
        </div>
        <Footer footerImg={infos.posterURL} footerTitle={infos.title}/>
        </>
    )
}