export default function Legenda () {
    function Modelo ({status, name}) {
        return (
        <div className="legenda">
            <div className={status}></div>
            <p>{name}</p>
        </div>
        )
    }
    
    return (
        <div className="legendas">
            <Modelo status={"selecionado"} name={"Selecionado"}/>
            <Modelo status={"disponivel"} name={"Disponivel"}/>
            <Modelo status={"indisponivel"} name={"Indisponivel"}/>
        </div>  
    )
}

