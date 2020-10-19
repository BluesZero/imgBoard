import React from 'react';
import './Main.css'

export default function Main() {
  
  const content = {
    marginLeft: '200px',
    padding: "1px 16px",
    height: '1000px'
  }
  const CenterPopular = {
    center: {
      margin: 'auto',
      width: '50%',
      border: '3px solid green',
      borderRadius:'10px'
    }
  }

  const center = {
    textAlign: 'center',
    margin: '0',
    borderBottom: '1px solid black'
  }

  return (
    <div style = {content} className="content">
      <div style = {CenterPopular.center} >
        <h3 style = {center}>Popular</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto iure, quo suscipit voluptatum dignissimos tenetur consequuntur mollitia, minus, unde quae maiores. Voluptas, nam! Iure sit impedit perspiciatis aspernatur labore expedita.</p>
      </div>

      <div>  
        <h3>New Entries</h3>
      </div>
    <br></br>
    </div>
  );
}


