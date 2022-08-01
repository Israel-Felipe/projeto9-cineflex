import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SucessoPage() {
    const { state } = useLocation();
    const assentos = state.nomeSelecionados;
    const cpf = state.cpf
    console.log(cpf)
    return (
        <div className="body">
            <div className="titleSucesso"><h2>Pedido feito<br/>com sucesso!</h2></div>

            <div className="infosReserva">
                <h1>Filme e sessão</h1>
                    <h2>{state.title}</h2>
                    <h2>{state.data} {state.horario}</h2>
            </div>

            <div className="infosReserva">
                <h1>Ingressos</h1>
                {assentos.map((value) => <h2>Assento {value}</h2>)}
            </div>

            <div className="infosReserva">
                <h1>Comprador</h1>
                    <h2>Nome: {state.nome}</h2>
                    <h2>CPF: {cpf[0]}{cpf[1]}{cpf[2]}.{cpf[3]}{cpf[4]}{cpf[5]}.{cpf[6]}{cpf[7]}{cpf[8]}-{cpf[9]}{cpf[10]}</h2>
            </div>
            
            <div className="button2">
                <Link to={"/"}>
                    <button>Voltar pra Home</button>
                </Link>
            </div>
        </div>
    )
}   