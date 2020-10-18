import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import TagSelection from './components/TagSection/TagSelection';


export default function App() {
  return (
  <div>
    <Header />
    <TagSelection />
    <Main />  
  </div>
  );
}


