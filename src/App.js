import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Container, Typography} from "@material-ui/core";
import ListaDeFilmes from "./components/ListaDeFilmes";
import CadastrarFilme from "./components/CadastrarFilme";
import CadastrarUsuario from './components/CadastrarUsuario/CadastrarUsuario';
import LoginUsuario from "./components/LoginUsuario/LoginUsuario";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import Home from "./components/Home/Home";
import Pagina404 from "./components/Pagina404/Página404";
import Post from "./components/Post/Post";
import Catalago from "./components/Catalago/Catalago";
import Categoria from "./components/Categoria/Categoria";
import "./assets/App.css";
import "./assets/index.css";

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
        <p className="titulo"><span className="m">M</span>etflix</p>
        <div className="corpo">
        <BrowserRouter>
          <HeaderMenu />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/catalogo">
              <Catalago />
            </Route>

            <Route path="/categoria/:id">
              <Categoria />
            </Route>

            <Route path="/posts/:id">
              <Post />
            </Route>

            <Route path="/cadastroUsuario">
              <Container component="article" maxWidth="sm" className="formulario">
                <Typography style={{ backgroundColor: 'rgb(48, 47, 47)', color: '#3cff00' }} variant="h3" component="h1" align="center">Cadastro de Usuário</Typography>
                <CadastrarUsuario aoEnviarForm={aoEnviarForm} validarCPF={validarCPF} validarSenha={validarSenha} validarNome={validarNome} validarSobrenome={validarSobrenome} validarEmail={validarEmail} />
              </Container>
            </Route>

            <Route path="/cadastroFilme">
              <section className="conteudo">
                <CadastrarFilme criarFilme={this.criarFilme.bind(this)} />
                <ListaDeFilmes filmes={this.state.filmes} />
              </section>
            </Route>

            <Route path="/login">
              <Container component="article" maxWidth="sm" className="formulario">
                <Typography style={{ backgroundColor: 'rgb(48, 47, 47)', color: '#3cff00' }} variant="h3" component="h1" align="center">Login</Typography>
                <LoginUsuario logar={logar} validarSenha={validarSenha} validarEmail={validarEmail} />
              </Container>
            </Route>

            <Route>
              <Pagina404 />
            </Route>
          </Switch>
        </BrowserRouter>
        </div>
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

function logar(dados){
  console.log("Email: " + dados.email + " / Senha: " + dados.senha['password'])
}
export default App;
