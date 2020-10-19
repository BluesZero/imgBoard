//Header principal que manda a llamar los 2 headers
import React from 'react';
import HeaderUp from './HeaderUp/HeaderUp';
import HeaderDown from './HeaderDown/HeaderDown';


export default function Header() {

  return (
    <div>
    <HeaderUp/>
    <HeaderDown/>  
    </div>
  );
}


