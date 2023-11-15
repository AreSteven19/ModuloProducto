import React from 'react';
import './index.css';
import imagen_frutas from './frutas_modulo_producto_sinfondo.png';
import logos from './logos.png';
import flecha from './FLECHA_NOFONDO.png';
function App() {
  return (
    <div className="contenedor">
      <div className="izquierda">

      <img id='logos' src={logos} alt="logo" />

      <div className="botones">

      <div className="boton">
        <button className='botonp'>Agregar Producto</button>
        <div className="triangulo"></div>
      </div>
      <div className="boton">
      <button className='botonp'>Modificar Producto</button>
        <div className="triangulo"></div>
      </div>
      <div className="boton">
      <button className='botonp'>Buscar Producto</button>
        <div className="triangulo"></div>
      </div>
      <div className="boton">
      <button className='botonp'>Eliminar Producto</button>
        <div className="triangulo"></div>
      </div>

<div>
<img id='flecha' src={flecha} alt="logo" />
</div>


      </div>

      </div>
      
      <div className="derecha">

         <div className='fecha'>
          <h1>12/20/2023</h1>
       </div>

      


        <div className='titulo'>
        <h1>Módulo </h1>
        <h1 id='de'>de</h1>
        <h1>producto</h1>
        </div>

        <br />

        <img id='imagen_fruta' src={imagen_frutas} alt="Ejemplo" />
        
      </div>

      
    </div>
  );
}

export default App;
