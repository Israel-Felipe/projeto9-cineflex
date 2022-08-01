import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./telas/HomePage";
import AssentosPage from "./telas/AssentosPage"
import SessoesPage from "./telas/SessoesPage";
import SucessoPage from "./telas/SucessoPage";


export default function App() {

    return (
        <>
        <BrowserRouter>
            <div className="head">
                <h1>CINEFLEX</h1>
            </div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sessoes/:idFilme" element={<SessoesPage />} />
                    <Route path="/assentos/:idSessao" element={<AssentosPage />} />
                    <Route path="/sucesso" element={<SucessoPage />} />
                </Routes>
        </BrowserRouter>
        </>
    )
}   