import React from "react";
import ListaPost from '../../components/ListaPost/ListaPost';

const Catalago = () => {
    return (
        <section>
            <ListaPost url={'/posts'} />
        </section>
    );
}

export default Catalago;