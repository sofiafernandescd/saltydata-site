import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      
      {/* Top Bar */}
      <div className="top-bar">
        <span>Agende uma Sessão Estratégica de Dados Gratuita</span>
        <span>📧 comercial.saltydata@gmail.com | 📞 +351 917 706 689</span>
      </div>

      {/* Navbar */}
      <header className="navbar">
        <div className="logo-container">
          <img src="/logo_salty1.png" alt="SaltyData Logo" className="navbar-logo" />
        </div>
        <nav>
          <a href="#servicos">Serviços</a>
          <a href="#beneficios">Impacto</a>
          <a href="#contacto">Contacto</a>
          <a href="#formulario" className="btn-nav">Solicitar Proposta</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Transformamos Dados em Vantagem Competitiva</h1>
          <p>Consultoria especializada em Inteligência Artificial, Investigação Avançada e Modelos Preditivos de Tráfego para impulsionar o seu negócio.</p>
          <a href="#formulario" className="btn-primary">Falar com Especialistas</a>
        </div>
      </section>

      {/* Services images */}
      <section className="logos">
        <div className="logos-grid">
          <img src="/img1.webp" alt="Destaque 1" />
          <img src="/img4.webp" alt="Destaque 2" />
        </div>
      </section>

      {/* Services description */}
      <section id="servicos" className="services">
        <h2>As Nossas Soluções de Engenharia e Inteligência de Dados</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="icon">🔬</div>
            <h3>Investigação & Desenho de Datasets</h3>
            <p>Desenho de bases de dados (datasets) personalizadas, revisão científica e técnica de investigações, estudos de tráfego e previsão de procura.</p>
          </div>
          
          <div className="service-card">
            <div className="icon">🧠</div>
            <h3>Consultoria Estratégica & IA</h3>
            <p>Modelos de Machine Learning customizados, otimização de operações complexas e tomadas de decisão baseadas puramente em dados.</p>
          </div>

          <div className="service-card">
            <div className="icon">🎯</div>
            <h3>Ativação & Inquéritos</h3>
            <p>Desenho de inquéritos de satisfação, estudos de preferência declarada e ações de marketing estratégico no terreno.</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="beneficios" className="benefits">
        <h2>Porquê a SaltyData?</h2>
        <div className="benefits-container">
          <div className="benefit-item"><strong>Decisões Assertivas:</strong> Substitua o "ponto de vista" por métricas estatísticas exatas.</div>
          <div className="benefit-item"><strong>Eficiência Operacional:</strong> Redução drástica de custos operacionais através de automação com IA.</div>
          <div className="benefit-item"><strong>Visão de Futuro:</strong> Antecipe os movimentos do mercado com os nossos modelos preditivos.</div>
        </div>
      </section>

      {/* Call to action */}
      <div className="forms-wrapper">
        <section id="contacto" className="contact-form">
          <h2>Fale Connosco</h2>
          <p>Desenhamos datasets personalizados e fazemos a revisão técnica da sua investigação científica ou de mercado.</p>
          <form>
            <input type="text" placeholder="Seu Nome" required />
            <input type="email" placeholder="E-mail Corporativo" required />
            <textarea placeholder="Como podemos ajudar a sua empresa?" required></textarea>
            <button type="submit">Enviar Mensagem</button>
          </form>
        </section>

        <section id="formulario" className="service-form">
          <h2>Solicitar Projeto</h2>
          <p>Selecione o serviço que a sua operation necessita no momento.</p>
          <form>
            <input type="text" placeholder="Nome do Responsável" required />
            <input type="email" placeholder="E-mail de Contacto" required />

            <select required>
              <option value="">Selecione o Serviço Necessário...</option>
              <option>Desenho de Datasets e Revisão de Investigação</option>
              <option>Serviço de contagem de veículos ou peões</option>
              <option>Inquéritos de satisfação / Preferência Declarada</option>
              <option>Ações de activação de marca</option>
              <option>Consultoria Geral em IA e Gestão de Informação</option>
            </select>

            <textarea placeholder="Detalhes adicionais do projeto (opcional)"></textarea>
            <button type="submit" className="btn-accent">Solicitar Orçamento</button>
          </form>
        </section>
      </div>

      {/* Footer */}  
      <footer>
        <div className="footer-content">
          <div className="footer-brand">
            <h4>SaltyData</h4>
            <p>Transformando dados brutos em inteligência corporativa.</p>
          </div>
          <div className="footer-team">
            <h4>Equipa Especialista</h4>
            <p><strong>Miguel</strong> – Gestor de Trabalho de Campo | 📞 +351 913 133 842</p>
            <p><strong>Sofia</strong> – Especialista em Machine Learning | 📞 +351 917 706 689</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 SaltyData. Todos os direitos reservados. | 📧 comercial.saltydata@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}
