import { Link } from "react-router-dom";

export default function Tarefas() {
    return(
        <>
            <h1>Tarefas sobre de Casa</h1>
            <p>
            <h2>Definição de Objetivos:</h2>
            <br/>
            Estabelecer Parcerias: Identificar e estabelecer parcerias com escolas locais, 
            organizações da sociedade civil e agências governamentais para colaborar na implementação do projeto.
            <br/>
            Recrutamento de Educadores: Recrutar educadores qualificados e comprometidos com a missão do projeto.
            <br/>
            Desenvolvimento Curricular: Desenvolver um currículo de alta qualidade que atenda às necessidades de desenvolvimento das crianças e promova uma educação inclusiva.
            <br/>
            Infraestrutura: Melhorar a infraestrutura das escolas e locais de aprendizado, garantindo um ambiente seguro e adequado.
            <br/>
            Capacitação de Professores: Realizar workshops e programas de formação para educadores, focando em pedagogias modernas e práticas de ensino eficazes.
            <br/>
            Atividades de Engajamento dos Pais: Organizar oficinas e reuniões para os pais, incentivando-os a se envolverem na educação de seus filhos.
            <br/>
            Avaliação e Monitoramento: Estabelecer indicadores de sucesso e implementar sistemas de avaliação contínua para medir o progresso do projeto.
            <br/>
            Divulgação e Sensibilização: Promover o projeto na comunidade e sensibilizar os pais e cuidadores sobre a importância da educação infantil.
            <br/>
            Expansão Gradual: Planejar e implementar a expansão gradual do projeto para atender a um número crescente de crianças ao longo do tempo.
            <br/>
            Avaliação de Impacto: Conduzir avaliações de impacto para medir o sucesso do projeto e fazer ajustes conforme necessário para alcançar os objetivos estabelecidos.
            </p>
            <hr/>
            <Link to='/'>Página inicial</Link><br/>
            <Link to='/contato'>Contato</Link><br/>
            <Link to='/sobre'>Sobre</Link>
        </>
    )
}