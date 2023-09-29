import { Link } from "react-router-dom";

export default function Sobre(){
    return(
        <>
        <h1>Sobre</h1>
        <p>
            Um projeto desenvolvido por Pedro Coelho
        </p>
        <hr/>
        <Link to='/'>Página inicial</Link><br/>
        <Link to='/contato'>Contato</Link><br/>
        <Link to='/tarefas'>Tarefas</Link>
        </>
    )
}