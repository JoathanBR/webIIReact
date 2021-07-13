import React, { useState } from "react";
import { Button, TextField, IconButton, InputAdornment, FormControl, InputLabel, OutlinedInput } from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import "./estilo.css";

function LoginUsuario({logar, validarSenha, validarEmail}) {
  const [email, setEmail] = useState("");
  const [errosSenha, setErrosSenha] = useState({senha:{valido:true, texto:""}});
  const [errosEmail, setErrosEmail] = useState({campo:{valido:true, texto:""}});

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
        logar({email, senha})
      }}
    >
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

        id="EmailLogin"
        label="EmailLogin"
        variant="outlined"
        margin="normal"
        fullWidth
        className = 'label'
      />
      
      <FormControl
            id="SenhaLogin"
            label="SenhaLogin"
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
            id="senhaLogin"
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

      <Button type="submit" variant="contained" className="botao">
        Entrar
      </Button>
    </form>
  );
}

export default LoginUsuario;
