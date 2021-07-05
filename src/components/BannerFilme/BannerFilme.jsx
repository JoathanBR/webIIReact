import React, { Component } from "react";
import "./estilo.css";

class BannerFilme extends Component {
  render() {
    return (
      <section className="banner-filme">
        <header className="banner-filme_cabecalho">
          <h3 className="banner-filme_titulo">{this.props.titulo}</h3>
        </header>
        <p className="banner-filme_texto">{this.props.genero}</p>
        <p className="banner-filme_texto">{this.props.duracao}</p>
        <p className="banner-filme_texto">{this.props.dataLancamento}</p>
        <p className="banner-filme_texto">{this.props.avaliacao}</p>
        <p className="banner-filme_texto">{this.props.status}</p>
        <p className="banner-filme_texto">{this.props.texto}</p>
        <p className="banner-filme_texto">{this.props.imagem}</p>
      </section>
    );
  }
}

export default BannerFilme;
