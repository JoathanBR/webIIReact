import React from "react";
import "./estilo.css";
import loboPau from "../../assets/imagens/loboPau.jpg";

const Pagina404 = () => {
    return (
        <main>
            <div className="div-loboPau">
                <img className="loboPau" style={{alignContent: "center"}} src={loboPau} alt="Lobo para página não encontrada"/>
            </div>
            <h1 className="texto-no-pagina">
                Eu desconfio que você tentou entrar na página errada!
            </h1>
        </main>
    );
}

export default Pagina404;