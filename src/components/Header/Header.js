import React from 'react';


export default function Header() {
  const HeaderStyle = {
  color: 'pink'
  };
  const DottetBox = {
  margin: '1px',
  border: '3px solid pink'
  };
  return (
  <div >
    <div style= {HeaderStyle, DottetBox} >
      <h3>Demo Web Page - Division 1</h3>
    </div>
    
    <div style= {HeaderStyle, DottetBox}>
      <h3>Demo Web Page - Division 2</h3>
    </div>
      <br></br>
   </div>
   
  );
}


