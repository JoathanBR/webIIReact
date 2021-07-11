import React, { Component } from "react";
import "./estilo.css";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

class CadastrarFilme extends Component {

  constructor(props){
    super(props)
    this.titulo=""
    this.genero=""
    this.duracao=""
    this.dataLancamento=""
    this.avaliacao=""
    this.status=""
    this.texto=""
    this.imagem=""
  }

  _handlerMudancaTitulo(evento){
    evento.stopPropagation()
    this.titulo = evento.target.value
  }

  _handlerMudancaTexto(evento){
    evento.stopPropagation()
    this.texto = evento.target.value
  }

  _handlerMudancaGenero(evento){
    evento.stopPropagation()
    this.genero = evento.target.value
  }

  _handlerMudancaDuracao(evento){
    evento.stopPropagation()
    this.duracao = evento.target.value
  }

  _handlerMudancaDataLancamento(evento){
    evento.stopPropagation()
    this.dataLancamento = evento.target.value
  }

  _handlerMudancaAvaliacao(evento){
    evento.stopPropagation()
    this.avaliacao = evento.target.value
  }

  _handlerMudancaStatus(evento){
    evento.stopPropagation()
    this.status = evento.target.value
  }

  _handlerMudancaImagem(evento){
    evento.stopPropagation()
    this.imagem = evento.target.value
  }

  _criarFilme(evento){
    evento.preventDefault()
    evento.stopPropagation()
    this.props.criarFilme(this.titulo, this.genero, this.duracao, this.dataLancamento, this.avaliacao, this.status, this.texto, this.imagem)
  }

  render() {
    return (
      <form className="cadastrar-filme"
        onSubmit = {this._criarFilme.bind(this)}
      >
        <input
          type="text"
          placeholder="Título do filme"
          className="cadastrar-filme_input"
          onChange = {this._handlerMudancaTitulo.bind(this)}
        />

          <input
          type="text"
          placeholder="Gênero do filme"
          className="cadastrar-filme_input"
          onChange = {this._handlerMudancaGenero.bind(this)}
        />

        <input
          type="number"
          placeholder="Duração do filme (minutos)"
          className="cadastrar-filme_input"
          onChange = {this._handlerMudancaDuracao.bind(this)}
        />

        <input
          type="text"
          placeholder="Data de lançamento do filme"
          className="cadastrar-filme_input"
          onChange = {this._handlerMudancaDataLancamento.bind(this)}
        />
        
        <input
          type="text"
          placeholder="Avaliação do filme"
          className="cadastrar-filme_input"
          onChange = {this._handlerMudancaAvaliacao.bind(this)}
        />

        <input
          type="text"
          placeholder="Status do filme"
          className="cadastrar-filme_input"
          onChange = {this._handlerMudancaStatus.bind(this)}
        />

        <textarea
          rows={15}
          placeholder="Descrição do filme"
          className="cadastrar-filme_input"
          onChange = {this._handlerMudancaTexto.bind(this)}
        />

        <input
          type="file"
          placeholder="Capa do Filme"
          className="cadastrar-filme_input"
          onChange = {this._handlerMudancaImagem.bind(this)}
        />

        <Button type="submit" variant="contained" className="botao" size="small">
          Adicionar Filme
        </Button>
      </form>
    );
  }
}

export default CadastrarFilme;
