import { useParams } from "react-router-dom";
 

export default function AssentosPage () {
    const { idSessao } = useParams();
    console.log(idSessao) 
    
    return (
        <>
         <h1> 
            AssentosPage
         </h1>
        </>
    )
}