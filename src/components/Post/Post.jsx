import React, {useState ,useEffect} from 'react';
import { busca } from '../../Api/Api';
import { useParams, useHistory } from 'react-router-dom';
import "./estilo.css";

const Post = () => {
    let history = useHistory()
    const {id} = useParams()
    const[post, setPost] = useState({})

    useEffect(() => {
        busca(`/posts/${id}`, setPost)
        .catch(() =>{
            history.push('/404')
        })    
    }, [id]);

    return(
        <main className="container flex flex--centro">
            <article className="post">
                <h2 className="titulo-filme"><span className="atributos">Título: </span>{post.titulo}</h2>
                <h2 className="titulo-filme"><span className="atributos">Descrição: </span>{post.descricao}</h2>
                <h2 className="titulo-filme"><span className="atributos">Gênero: </span>{post.genero}</h2>
                <h2 className="titulo-filme"><span className="atributos">Duração: </span>{post.duracao} minutos</h2>
                <h2 className="titulo-filme"><span className="atributos">Data de Lançamento: </span>{post.dataLancamento}</h2>
                <h2 className="titulo-filme"><span className="atributos">Avaliação: </span>{post.avaliacao}</h2>
            </article>
        </main>
    )
}

export default Post