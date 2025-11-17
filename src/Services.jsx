import React from 'react';
import './Services.css';

export default function Services() {
  return (
    <section id="services" className="services">
      <h2>Nossos Serviços</h2>
      <div className="service-cards">
        <div className="card">
          <h3>Estudos de Tráfego</h3>
          <p>Contagens viárias e pedonais, análise de fluxos, otimização de rotas.</p>
        </div>
        <div className="card">
          <h3>Estudos de Mercado</h3>
          <p>Análise de comportamento do consumidor, segmentação e previsão de procura.</p>
        </div>
        <div className="card">
          <h3>Inteligência Artificial</h3>
          <p>Modelação de dados, dashboards interativos e soluções personalizadas.</p>
        </div>
      </div>
    </section>
  );
}
