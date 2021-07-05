import React, { Component } from "react";
import ListaDeFilmes from "./components/ListaDeFilmes";
import CadastrarFilme from "./components/CadastrarFilme";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {

  constructor(){
    super()
    this.state = {
      filmes:[]
    }
  }

  criarFilme(titulo, genero, duracao, dataLancamento, avaliacao, status, texto, imagem){
    const novaFilme = {titulo, genero, duracao, dataLancamento, avaliacao, status, texto, imagem}
    const novoArrayFilmes = [...this.state.filmes, novaFilme]
    const novoEstado ={
      filmes: novoArrayFilmes
    }
    this.setState(novoEstado)
  }

  render() {
    return (
      <section>
        <p className="titulo">Metflix</p>
          <section className="conteudo">
            <CadastrarFilme criarFilme = {this.criarFilme.bind(this)} />
            <ListaDeFilmes filmes={this.state.filmes}/>
          </section>
      </section>
    );
  }
}

export default App;
