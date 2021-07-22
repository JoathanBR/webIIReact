import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import { busca } from '../../Api/Api';
import "./estilo.css";

const ListaPost = ({url}) => { 
    const [post, setPosts] = useState([])
  
    useEffect(() => {
      busca(url, setPosts)    
    }, [url]);
  
    return(
      <section className="section-posts">
        {
          post.map((post)=>(
            <div className="posts">
            <Link className={`${post.genero}`} to={`/posts/${post.id}`}>
              <article key={post.id}>
                <h3 className="post-titulo">
                  {post.titulo}
                </h3>
              </article>
            </Link>
            </div>
          ))
        }
      </section>
    )
  }
  
  export default ListaPost;

