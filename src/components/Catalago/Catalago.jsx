import React from "react";
import ListaPost from '../../components/ListaPost/ListaPost';
import ListaCategorias from '../ListaCategorias/ListaCategorias';
import "./estilo.css";

const Catalago = () => {
    return (
        <section>
            <div className="categorias">
                <ListaCategorias />
            </div>
                <ListaPost url={'/posts'} />
        </section>
    );
}

export default Catalago;