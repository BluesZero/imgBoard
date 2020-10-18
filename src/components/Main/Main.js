import React from 'react';


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
    }
  }

  return (
    <div style = {content}>
      <div style = {CenterPopular.center}>
        <h3>Popular</h3>
      </div>

      <div>  
        <h3>New Entries</h3>
      </div>
    <br></br>
    </div>
  );
}


