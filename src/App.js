import React, { Component } from "react";
import ListaDeFilmes from "./components/ListaDeFilmes";
import CadastrarFilme from "./components/CadastrarFilme";
import "./assets/App.css";
import './assets/index.css';
import CadastrarUsuario from './components/CadastrarUsuario/CadastrarUsuario';
import {Container, Typography} from "@material-ui/core"

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
      <section className="home">
        <p className="titulo">Metflix</p>
          <section className="conteudo">
            <CadastrarFilme criarFilme = {this.criarFilme.bind(this)} />
            <ListaDeFilmes filmes={this.state.filmes}/>
          </section>
              <Container component="article" maxWidth="sm">
              <Typography style={{ backgroundColor: 'rgb(48, 47, 47)', color: '#3cff00'}} variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
            <CadastrarUsuario aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
             </Container>
      </section>
    );
  }
}

function aoEnviarForm(dados){
  console.log(dados)
}

function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:"CPF deve ter 11 dígitos"}
  } else{
    return {valido:true, texto:""}
  }
}

export default App;
