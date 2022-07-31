import { useState } from "react";

export default function Usuario() {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    return (
        <form>
            <p>Nome do comprador:</p>
                <input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="Digite seu nome completo" required />
            <p>CPF do comprador:</p>
                <input type="number" value={cpf} onChange={e => setCpf(e.target.value)} placeholder="Digite seu CPF (somente números)" required />
        </form>
    )
}