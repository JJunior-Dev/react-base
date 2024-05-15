import React from 'react';
import './button.css';

function Button({ label }) {
  const cliqueNoBotao = () => {
    alert(`A label desse botão é: ${label}`);
  };

  return (
    <button className="button" onClick={cliqueNoBotao}>
      {label}
    </button>
  );
}

export default Button;