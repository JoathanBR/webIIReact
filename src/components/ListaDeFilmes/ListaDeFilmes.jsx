import React, { Component } from "react";
import BannerFilme from "../BannerFilme";
import "./estilo.css";

class ListaDeFilmes extends Component {
  render() {
    return (
      <ul className="lista-filmes">
        {this.props.filmes.map((filme, index) => {
          return (
            <li className="lista-filmes_item" key={index}>
              <BannerFilme titulo={filme.titulo} genero={filme.genero} duracao={filme.duracao} dataLancamento={filme.dataLancamento} avaliacao={filme.avaliacao} status={filme.status} texto={filme.texto} imagem={filme.imagem}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeFilmes;
