import React from "react";
import { Route, useParams, useRouteMatch } from "react-router-dom";
import ListaCategorias from "../ListaCategorias/ListaCategorias";
import ListaPost from "../ListaPost/ListaPost";
import "./estilo.css";

const Categoria = () => {
  const {id} = useParams()
  const {path} = useRouteMatch()

  return (
    <>
      <div className="categorias">
        <ListaCategorias />
      </div>
      <Route exact path={`${path}/`}>
        <ListaPost url={`/posts?genero=${id}`} />
      </Route>
    </>
  );
};

export default Categoria;
