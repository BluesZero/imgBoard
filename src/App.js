import React from 'react';
//Importamos los componentes principales de nuestra pagina principal
import Header from './components/Header/Header';
import TagSelection from './components/TagSection/TagSelection';
import Main from './components/Main/Main';



export default function App() {
  return (
  <div>
    <Header />
    <TagSelection />
    <Main />  
  </div>
  );
}


