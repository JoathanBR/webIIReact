import React from "react";
import "./estilo.css";

function BannerFilme(titulo, genero, duracao, dataLan, avaliacao, status, descricao, imagem){
    return (
      <section className="banner-filme">
        <header className="banner-filme_cabecalho">
          <h3 className="banner-filme_titulo">{titulo}</h3>
        </header>
        <p className="banner-filme_texto">{genero}</p>
        <p className="banner-filme_texto">{duracao}</p>
        <p className="banner-filme_texto">{dataLan}</p>
        <p className="banner-filme_texto">{avaliacao}</p>
        <p className="banner-filme_texto">{status}</p>
        <p className="banner-filme_texto">{descricao}</p>
        <p className="banner-filme_texto">{imagem}</p>
      </section>
    );
  }


export default BannerFilme;
