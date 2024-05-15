import React from 'react';
import './TextoMaiusculoColorido.css';

function TextoMaiusculoColorido(props) {
  const { texto, cor } = props;

  const estilo = {
    color: cor,
    textTransform: 'uppercase',
  };

  return <p className='texto' style={estilo}>{texto}</p>;
}

export default TextoMaiusculoColorido;