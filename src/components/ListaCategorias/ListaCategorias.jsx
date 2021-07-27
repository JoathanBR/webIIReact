import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { busca } from '../../Api/Api';
import "./estilo.css";

const ListaCategorias = () => {
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        busca(`/categorias`, setCategorias)    
    }, []);

    return(
        <ul className="lista-categorias">
            {
                categorias.map((genero) => (
                    <Link to={`/categoria/${genero.id}`}>
                        <li className={`${genero.id}`}>
                            {genero.nome}
                        </li>
                    </Link>
                ))
            }
        </ul>
    )
}

export default ListaCategorias