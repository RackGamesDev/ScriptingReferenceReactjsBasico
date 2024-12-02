import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';//El css se importa como si fuese un js o un jsx, si el css tieme @import-normalize se le pondra los estilos globales a la etiqueta style
//Si el css termina en .module.css luego en javascript se puede importar como moduleStyles para ponerselo a un elemento concreto como {moduleStyles.x}
import Componente from './components/Componente.jsx';//Importando el componente ya creado en la carpeta
import ComponenteFuncion from './components/ComponenteFuncion.jsx';//Cada componetne en un archivo distinto
import Propiedades from './components/Propiedades.jsx';
import Estado from './components/Estado.jsx';
import RenderizadoCondicional from './components/RenderizadoCondicional.jsx';
import RenderizadoElementos from './components/RenderizadoElementos.jsx';
import {EventosES6, EventosES7, MasEventos} from './components/Eventos.jsx';
import Padre from './components/ComunicacionComponentes.jsx';
import CicloVida from './components/CicloVida.jsx';
import AjaxApis from './components/AjaxApis.jsx';
import ContadorHooks from './componentsHooks/ContadorHooks.jsx';//Los hooks son nuevos e innecesarios pero pueden venir bien, proyectos antiguos de react no lo soportarian y tienen retrocompatibilidad
import ScrollHooks from './componentsHooks/ScrollHooks.jsx';
import RelojHooks from './componentsHooks/RelojHooks.jsx';
import AjaxHooks from './componentsHooks/AjaxHooks.jsx';
import HooksPersonalizados from './componentsHooks/HooksPersonalizados.jsx';
import Referencias from './componentsHooks/Referencias.jsx';
import {Formularios, FormulariosAvanzados} from './componentsHooks/Formularios.jsx';
import Portal from './components/Portal.jsx';
import Basicos from './componentsRouter/Basicos.jsx';//Los routers tambien son algo nuevo y se usa npm install react-router-dom
import Memorizacion from './componentsHooks/Memorizacion.jsx';
import MyPage from './componentsContextApi/MyPage.jsx';
import Contador from './componentsHooks/Reducer.jsx';
import LibRedux from './componentsReduxExterno/LibRedux.jsx';
//import React from 'React'
//Se importan las cosas necesarias para la pagina como el css o recursos

//Se inicia con npm run dev una vez hecho todo lo de vite, para distribuirlo es con la carpeta dist una vez hecho el npm run build
function App() {//Lo que haya aqui dentro sera lo que aparezca en esa pagina
  const [count, setCount] = useState(0);//Aqui se puede hacer codigo javascript como hacer variables, etc...
  let variable = 2;
  if(variable == 2){
    variable = 3;
  }
  //La sintaxis es similar a html, todo va dentro de la mimsa etiqueta y las etiquetas sin cierre terminan en /
  return (

    <>
    {/*Comentarios*/}
      <div>
        <h2>{variable}</h2>
        <a rel="noreferrer" href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a rel="noreferrer" href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR<br/>
          {//Para pintar algo segun logica se pone entre {} y que devuelva algo
            1+1
          }
        </p>
        {()=> console.log("hola")}{/*Se puede incluso ejecutar codigo (va raro)*/}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <section>
        <Componente propiedad="33"/>{/*Aqui aparecera todo lo que haya en el componente importado, como este tiene una propiedad tambien se pone las cuales pueden ser de variables*/}
        <ComponenteFuncion propiedad="33"/>
        <Propiedades otraVariable={1}/>{/*Este componente usa propiedades pero usando las pordefecto se usan esas*/}
        <Estado/>
        <RenderizadoCondicional/>
        <RenderizadoElementos/>
        <EventosES6/>
        <EventosES7/>
        <MasEventos/>
        <Padre/>
        <CicloVida/>
        <AjaxApis/>
        <Portal/>
      </section>
      <hr /><hr /><h1>HOOKS nuevo</h1><br />
      <section>
          <ContadorHooks/>
          <ScrollHooks/>
          <RelojHooks/>
          <AjaxHooks/>
          {/*<HooksPersonalizados/>*/}
          <Referencias/>
          <Formularios/><FormulariosAvanzados/>
          <h2>memorizacion:</h2>
          <Memorizacion/>
          <h2>reducers:</h2>
          <Contador />{/*Esto tambien cuenta como hook, dentro son incompatibles el useState, useEffect y las async*/}
      </section>
      <hr /><hr /><h1>ROUTER + react-router-dom</h1><br />{/*Para las rutas se suele instalar una libreria con npm install react-router-dom*/}
      <section>
        <Basicos/>
      </section>
      <hr /><hr /><h1>context api integra nuevo</h1>{/*Esto es casi tan nuevo como los hooks, es una api integrada para variables globales, esto puede ir bien con lo de memo/memorizacion*/}
      <section>
          <MyPage />
      </section>
      <hr /><hr /><h1>redux externo</h1>{/*redux es una libreria externa que hace cosas similares a los reducts*/}
      <section>
          <LibRedux />
      </section>
      <hr />
    </>
  );
}

export default App;
