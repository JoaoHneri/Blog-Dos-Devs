
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="ContainerAbout">
        <section className="about">
        <h2>Explorando o Blog dos Devs:</h2>

        <h3>Artigos Inovadores:</h3>
        <p>Descubra uma vasta coleção de artigos escritos por desenvolvedores experientes e entusiastas. De tutoriais práticos a reflexões sobre as últimas tendências tecnológicas, nosso blog é um repositório de conhecimento valioso.</p>

        <h3>Fóruns Interativos:</h3>
        <p>Junte-se a discussões animadas e tire suas dúvidas em nossos fóruns interativos. Aqui, você encontrará uma comunidade acolhedora pronta para compartilhar insights, oferecer soluções e trocar experiências únicas.</p>

        <h3>Projetos Colaborativos:</h3>
        <p>Quer trabalhar em equipe? Nossos espaços dedicados a projetos colaborativos são o lugar perfeito para encontrar parceiros, compartilhar ideias e transformar conceitos inovadores em realidade.</p>

        <h3>Eventos Virtuais:</h3>
        <p>Fique por dentro dos últimos eventos, webinars e workshops conduzidos por especialistas do setor. O Blog dos Devs é uma fonte central para informações sobre oportunidades de aprendizado e networking.</p>

        <h3>Perfil do Desenvolvedor:</h3>
        <p>Crie seu perfil personalizado e destaque suas habilidades, projetos e contribuições para a comunidade. Conectar-se com outros desenvolvedores nunca foi tão fácil.</p>
    </section>

    <section className="about">
        <h2>Por que escolher o Blog dos Devs:</h2>

        <h3>Comunidade Vibrante:</h3>
        <p>Faça parte de uma comunidade apaixonada por tecnologia, onde as fronteiras entre aprendizado e diversão se tornam imperceptíveis.</p>

        <h3>Acesso a Recursos Exclusivos:</h3>
        <p>Beneficie-se de recursos exclusivos, desde downloads gratuitos a descontos em cursos online e ferramentas de desenvolvimento.</p>

        <h3>Networking Poderoso:</h3>
        <p>Amplie sua rede profissional, conectando-se com desenvolvedores de todo o mundo. Colabore em projetos empolgantes e enriqueça sua jornada de desenvolvimento.</p>
        <div className="btnAbout">
        <Link to="/posts/create" className="btn">
          Faça uma publicação
        </Link>
        </div>
    </section>
    
    </div>
  )
}

export default About
