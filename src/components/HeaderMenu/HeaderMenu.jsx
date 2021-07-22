import React from "react";
import {Link} from "react-router-dom";
import {MenuItem, MenuList, Paper } from "@material-ui/core";
import "./estilo.css";

const HeaderMenu = () => {
    return (
        <header>
            <Paper className="paper">
            <MenuList className="lista">
                <MenuItem><Link to="/">Início</Link></MenuItem>
                <MenuItem><Link to="/catalogo">Catálogo</Link></MenuItem>
                <MenuItem><Link to="/cadastroUsuario">Cadastrar Usuário</Link></MenuItem>
                <MenuItem><Link to="/cadastroFilme">Cadastrar Filme</Link></MenuItem>
                <MenuItem><Link to="/login">Login</Link></MenuItem>
            </MenuList>
            </Paper>   
        </header>
    );
}

export default HeaderMenu;