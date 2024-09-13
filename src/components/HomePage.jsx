// components/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="max-w-[560px] text-center">
      <h1 className="text-4xl font-bold">Bem-vindo ao Comparador de Preços</h1>
      <p className="text-azul-escuro">
        Clique no botão abaixo para começar a comparar preços de importação com nosso formulário.
      </p>
      <Link to="/comparacao" className="text-blue-500 hover:underline mt-4 inline-block">
        Ir para o formulário de comparação
      </Link>
    </div>
  );
};

export default HomePage;
