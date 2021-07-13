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
            <CadastrarUsuario  aoEnviarForm={aoEnviarForm} validarCPF={validarCPF} validarSenha={validarSenha} validarNome={validarNome} validarSobrenome={validarSobrenome} validarEmail={validarEmail} />
             </Container>
      </section>
    );
  }
}

function aoEnviarForm(dados){
  if(validarCPF(dados.cpf).valido === true && validarSenha(dados.senha['password']).valido === true && validarNome(dados).valido === true && validarSobrenome(dados).valido === true && validarEmail(dados).valido === true){
    return console.log(dados)
  } else{
    return console.log("Dados não preenchidos corretamente")
  }
}

function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:"CPF deve ter 11 dígitos"}
  } else{
    return {valido:true, texto:""}
  }
}

function validarSenha(senha){
  if(senha.length < 6){
    return {valido:false, texto:"Senha deve ter mais de 5 caracteres"}

  } else{
    return {valido:true, texto:""}
  }
}

function validarNome(nome){
  if(nome.length <= 0){
    return {valido:false, texto:"Nome Obrigatório"}
  } else{
    return {valido:true, texto:""}
  }
}

function validarSobrenome(sobrenome){
  if(sobrenome.length <= 0){
    return {valido:false, texto:"Sobrenome Obrigatório"}
  } else{
    return {valido:true, texto:""}
  }
}

function validarEmail(email){
  if(email.length <= 0){
    return {valido:false, texto:"Email Obrigatório"}
  } else{
    return {valido:true, texto:""}
  }
}

export default App;
