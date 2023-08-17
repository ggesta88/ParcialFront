import React from "react";

const Card = ({futbolista, setRegistro}) => {

    return (
        <div>
            <h3>{futbolista.nombre}</h3>
            <h3>{futbolista.cuadro}</h3>
            <button onClick={() => setRegistro(true)}> Registrar Futbolista</button>
        </div>
    )
}
export default Card