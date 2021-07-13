import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel, IconButton, InputAdornment, FormControl, InputLabel, OutlinedInput } from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import "./estilo.css";

function CadastrarUsuario({aoEnviarForm, validarCPF, validarSenha, validarNome, validarSobrenome, validarEmail}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [novidades, setNovidades] = useState(true);
  const [errosCpf, setErrosCpf] = useState({cpf:{valido:true, texto:""}});
  const [errosSenha, setErrosSenha] = useState({senha:{valido:true, texto:""}});
  const [errosEmail, setErrosEmail] = useState({campo:{valido:true, texto:""}});
  const [errosNome, setErrosNome] = useState({campo:{valido:true, texto:""}});
  const [errosSobrenome, setErrosSobrenome] = useState({campo:{valido:true, texto:""}});

  const [senha, setSenha] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setSenha({ ...senha, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setSenha({ ...senha, showPassword: !senha.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviarForm({nome, sobrenome, cpf, email, senha, novidades})
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}

        onBlur={(event) =>{
          const ehValido = validarNome(event.target.value)
          setErrosNome({campo:ehValido})
        }}
        error={!errosNome.campo.valido}
        helperText={errosNome.campo.texto}

        id="Nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
        className = 'label'
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}

        onBlur={(event) =>{
          const ehValido = validarSobrenome(event.target.value)
          setErrosSobrenome({campo:ehValido})
        }}
        error={!errosSobrenome.campo.valido}
        helperText={errosSobrenome.campo.texto}

        id="Sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
        className = 'label'
      />

      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}

        onBlur={(event) =>{
          const ehValido = validarCPF(event.target.value)
          setErrosCpf({cpf:ehValido})
        }}

        error={!errosCpf.cpf.valido}
        helperText={errosCpf.cpf.texto}
        id="CPF"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
        className = 'label'
      />

      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}

        onBlur={(event) =>{
          const ehValido = validarEmail(event.target.value)
          setErrosEmail({campo:ehValido})
        }}
        error={!errosEmail.campo.valido}
        helperText={errosEmail.campo.texto}

        id="Email"
        label="Email"
        variant="outlined"
        margin="normal"
        fullWidth
        className = 'label'
      />
      
      <FormControl
            id="Senha"
            label="Senha"
            className = 'label'
            fullWidth
            margin="normal"
            variant="outlined"

            onBlur={(event) =>{
              const ehValido = validarSenha(event.target.value)
              setErrosSenha({senha:ehValido})
            }}
            error={!errosSenha.senha.valido}
            helpertext={errosSenha.senha.texto}
      >
      <InputLabel>Senha</InputLabel>
          <OutlinedInput
            id="senha"
            type={senha.showPassword ? 'text' : 'password'}
            value={senha.password}
            onChange={handleChange('password')}
            
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {senha.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
              }
              />  
        </FormControl>

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked= {novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="novidades"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" className="botao">
        Cadastrar
      </Button>
    </form>
  );
}

export default CadastrarUsuario;
