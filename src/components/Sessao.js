
import { Link } from "react-router-dom";

export default function Sessao({data, weekday, horarios}) {

    function Horario ({name, idSessao}) {
        return (
            <Link to={`/assentos/${idSessao}`}>
                <div className="horario"> {name} </div>
            </Link>
        )
    }
    return (
        <div className="sessao">
            <div className="data"><h1>{weekday} - {data}</h1></div>
            <div className="horarios">
                {horarios.map((horario, index) => 
                <Horario key={index} name={horario.name} idSessao={horario.id}/>
                )}
            </div>
        </div>
    )
}