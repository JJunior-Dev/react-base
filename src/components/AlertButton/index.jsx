import React from 'react';
import './index.css';

function Button({ label }) {
  return <button className="button" onClick={() => alert(`A label desse botão é: ${label}`)}>{label}</button>
}

// const cliqueNoBotao = () => {
//   alert(`A label desse botão é: ${label}`);
// };

// return <button className="button" onClick={cliqueNoBotao}>{label}</button>
// }

export default Button;