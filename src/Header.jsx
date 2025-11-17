import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <h1>Salty Data</h1>
      <nav>
        <a href="#services">Serviços</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
}
