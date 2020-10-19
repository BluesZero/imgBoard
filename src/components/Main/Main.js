import React from 'react';
import './Main.css'

export default function Main() {
  //Estilos que se usaran en el Main, falta acomodarlos en su hoja de estilos, puede encargarse Sam o Jasso
  const content = {
    marginLeft: '200px',
    padding: "1px 16px",
    height: '1000px'
  }
  const CenterPopular = {
    center: {
      margin: 'auto',
      width: '50%',
      border: '1px solid white',
      borderRadius:'10px',
      overflow: 'hidden'
    }
  }

  const center = {
    textAlign: 'center',
    margin: '0',
    background: '#301654',
    borderBottom: '1px solid black'
  }
  

  const popularContent = {
    textAlign: 'center',
    padding: '0',
    margin: '0',
    background: '#574470'
  }

  return (
    <div style = {content} className="content">
      <div style = {CenterPopular.center} >
        <h3 style = {center}>Popular</h3>
        <div style={popularContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eveniet doloribus incidunt labore repellendus tempore cumque vero 
          ipsa hic non neque quis odit aut et, voluptatum at adipisci quisquam atque!
          <br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eveniet doloribus incidunt labore repellendus tempore cumque vero 
          ipsa hic non neque quis odit aut et, voluptatum at adipisci quisquam atque!
        </div>
        
      </div>

      <div>  
        <h3>New Entries</h3>
      </div>
    <br></br>
    </div>
  );
}


