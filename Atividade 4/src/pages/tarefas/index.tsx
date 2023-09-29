iimport { Link } from "react-router-dom";

export default function Tarefas() {
    return(
        <>
            <h1>Tarefas a se fazer em Casa</h1>
            <p>
                <h2>Lista de Tarefas:</h2>
                <br/>
                1. Limpar e organizar a casa.
                <br/>
                2. Preparar refeições saudáveis para a família.
                <br/>
                3. Estabelecer um cronograma de estudo ou trabalho em casa.
                <br/>
                4. Fazer exercícios físicos ou praticar yoga para manter-se ativo.
                <br/>
                5. Realizar atividades de aprendizado online ou cursos para desenvolvimento pessoal.
                <br/>
                6. Realizar tarefas de jardinagem ou cuidar das plantas em casa.
                <br/>
                7. Ler livros ou eBooks para expandir o conhecimento.
                <br/>
                8. Realizar videochamadas ou reuniões virtuais com amigos e familiares.
                <br/>
                9. Praticar hobbies como pintura, costura, ou tocar um instrumento musical.
                <br/>
                10. Manter um diário ou fazer meditação para cuidar da saúde mental.
            </p>
            <hr/>
            <Link to='/'>Página inicial</Link><br/>
            <Link to='/contato'>Contato</Link><br/>
            <Link to='/sobre'>Sobre</Link>
        </>
    )
}

}
