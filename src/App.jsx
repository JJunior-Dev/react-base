import React from 'react';
import TextoMaiusculoColorido from './components/StyledText';
import Button from './components/AlertButton';
import './index.css';

function App() {
  return (
    <>
      <TextoMaiusculoColorido texto="Olá, mundo!" cor="red" />
      <TextoMaiusculoColorido texto="Este é um texto em maiúsculo." cor="blue" />

      <Button label="Baixar CV" />
      <Button label="Enviar Formulário" />
    </>
  );
}

export default App;