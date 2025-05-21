
import React from 'react';
import ReactDOM from 'react-dom/client';

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css
import '../styles/index.css';

// Components
import Counter from './components/Contador';

let sumatoria = 0;


function sumarSegundos() {
  
  setInterval(() => {
    
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <h1>Contador Automático</h1>
        <Counter seconds={sumatoria} />
      </React.StrictMode>
    );
    sumatoria++;
  }, 1000);
}

sumarSegundos();
