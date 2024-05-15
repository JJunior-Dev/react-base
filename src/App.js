import React from 'react';
import TextoMaiusculoColorido from './components/TextoMaiusculoColorido/TextoMaiusculoColorido';
import Button from './components/button/button';
import './App.css';

function App() {
  return (
    <main className='page-container'>
      <TextoMaiusculoColorido texto="Olá, mundo!" cor="red" />
      <TextoMaiusculoColorido texto="Este é um texto em maiúsculo." cor="blue" />

      <Button label="Baixar CV" />
      <Button label="Enviar Formulário" />
    </main>
  );
}

export default App;