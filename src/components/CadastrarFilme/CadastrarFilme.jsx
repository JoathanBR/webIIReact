import React, { useState } from "react";
import "./estilo.css";
import { Button, TextField} from "@material-ui/core";

function CadastrarFilme({aoEnviarFilme}){
  const [titulo, setTitulo] = useState("");
  const [genero, setGenero] = useState("");
  const [duracao, setDuracao] = useState("");
  const [dataLan, setDataLan] = useState("");
  const [avaliacao, setAvaliacao] = useState("");
  const [status, setStatus] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");
  //const [erros, setErros] = useState({cpf:{valido:true, texto:""}})

    return (
      <form 
        onSubmit={(event) => {
          event.preventDefault();
          aoEnviarFilme({titulo, genero, duracao, dataLan, avaliacao, status, descricao, imagem})
      }}
        className="cadastrar-filme"
      >
        
        <TextField
          value={titulo}
            onChange={(event) => {
              setTitulo(event.target.value);
          }}
          value={titulo}
          id="Titulo"
          label="Titulo"
          variant="outlined"
          margin="normal"
          fullWidth
          className = 'label'
        />

        <TextField
          value={genero}
            onChange={(event) => {
              setGenero(event.target.value);
          }}
          value={genero}
          id="Genero"
          label="Genero"
          variant="outlined"
          margin="normal"
          fullWidth
          className = 'label'
        />

        <TextField
          value={duracao}
            onChange={(event) => {
              setDuracao(event.target.value);
          }}
          value={duracao}
          id="Duracao"
          label="Duracao"
          variant="outlined"
          margin="normal"
          fullWidth
          className = 'label'
        />

        <TextField
          value={dataLan}
            onChange={(event) => {
              setDataLan(event.target.value);
          }}
          value={dataLan}
          id="DataLan"
          label="DataLan"
          variant="outlined"
          margin="normal"
          fullWidth
          className = 'label'
        />

        <TextField
          value={avaliacao}
            onChange={(event) => {
              setAvaliacao(event.target.value);
          }}
          value={avaliacao}
          id="Avaliacao"
          label="Avaliacao"
          variant="outlined"
          margin="normal"
          fullWidth
          className = 'label'
        />

        <TextField
          value={status}
            onChange={(event) => {
              setStatus(event.target.value);
          }}
          value={status}
          id="Status"
          label="Status"
          variant="outlined"
          margin="normal"
          fullWidth
          className = 'label'
        />

        <TextField
          value={descricao}
            onChange={(event) => {
              setDescricao(event.target.value);
          }}
          value={descricao}
          id="Descricao"
          label="Descricao"
          variant="outlined"
          margin="normal"
          fullWidth
          className = 'label'
        />

        <TextField
          value={imagem}
            onChange={(event) => {
              setImagem(event.target.value);
          }}
          value={imagem}
          id="Imagem"
          label="Imagem"
          variant="outlined"
          margin="normal"
          fullWidth
          className = 'label'
        />

        <Button type="submit" variant="contained" color="primary">
          Adicionar Filme
        </Button>
      </form>
    );
  }

export default CadastrarFilme;
