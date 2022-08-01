import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Reserva({nomeSelecionados, idSelecionados, title, data, horario}) {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    
    function fazerReserva () {
        const infosAPI = {
            ids: idSelecionados,
            name: nome,
            cpf: cpf
        }
        const infosSucesso = {
            title,
            data,
            horario,
            nomeSelecionados,
            nome,
            cpf
        }
        
        const promise = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", infosAPI);
            promise.then(navigate("/sucesso", {replace: false, state: infosSucesso} ));
    }

    return (
        <form onSubmit={fazerReserva}>
            <p>Nome do comprador:</p>
                <input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="Digite seu nome completo" required />
            <p>CPF do comprador:</p>
                <input type="number" value={cpf} onChange={e => setCpf(e.target.value)} placeholder="Digite seu CPF (somente números)" required />
            
            <div className="button"><button type="submit">Reservar assento(s)</button></div>
        </form>
    )
}