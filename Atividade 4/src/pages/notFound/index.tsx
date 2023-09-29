import { Link } from 'react-router-dom'

export default function NotFound() {
    return(
        <>
            <h1>Página não encontrada</h1>
            <p>
                A pagina que você está tentando acessar não existe
            </p>
            <Link to='/'>Página inicial</Link>
        </>
    )

}