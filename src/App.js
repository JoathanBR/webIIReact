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

  criarFilme(titulo, genero, duracao, dataLancamento, avaliacao, status, texto){
    const novaFilme = {titulo, genero, duracao, dataLancamento, avaliacao, status, texto}
    const novoArrayFilmes = [...this.state.filmes, novaFilme]
    const novoEstado ={
      filmes: novoArrayFilmes
    }
    this.setState(novoEstado)
  }

  render() {
    return (
      <section className="conteudo">
        <CadastrarFilme criarFilme = {this.criarFilme.bind(this)} />
        <ListaDeFilmes filmes={this.state.filmes}/>
      </section>
    );
  }
}

export default App;
