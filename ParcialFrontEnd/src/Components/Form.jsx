import { useState } from "react";

const Form = () => {
    const [Jugador, setJugador] = useState({
        nombre: '',
        equipo: ''
    })
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = () => {
        if(Jugador.nombre.length > 3 && !Jugador.nombre.startsWith(' ') && Jugador.equipo.length > 6){
            setShow(true)
            setError(false)
        } else {
            setError(true)
        }
    }
    console.log(Jugador)

    return (
        <div>
            <label>Nombre del Futbolista </label>
            <input type = "text" placeholder="Ingrese un nombre" value = {Jugador.nombre} onChange = {(event) => setJugador({...Jugador, nombre: event.target.value})}/>
            <br></br>
            <label>Pertenece al Equipo </label>
            <input type = "text" placeholder="Ingrese un equipo" value = {Jugador.equipo} onChange={(event) => setJugador({...Jugador, equipo: event.target.value})}/>
            <br></br><button onClick={handleSubmit}>Enviar</button>
            {show && <h3>REGISTRADO CORRECTAMENTE !!!</h3>}
            {error && <h4 style={{color: 'red'}}>Por favor verifique los campos</h4>}
        </div>
    )
}
export default Form