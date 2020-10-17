import React from 'react';


export default function Main() {
  const content = {
    marginLeft: '200px',
    padding: "1px 16px",
    height: '1000px'
  }
  const CenterPopular = {
    center: {
      marginLeft: "auto",
      marginRight: "auto",
    }
  }
  return (
    <div style = {content}>
      <div className ={CenterPopular.center}>
        <h3>Popular</h3>
      </div>

      <div>  
        <h3>New Entries</h3>
      </div>
    <br></br>
    </div>
  );
}


