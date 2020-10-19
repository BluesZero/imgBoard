import React from 'react';
import './HeaderUp.css'

export default function HeaderUp() {
    const float={
        float:'right',
        background: '#ff6ca5',
        color: '#574470'
    }

    return (
        <div>
            <ul className="hu-ul">
            <li className="hu-li"><a className="hu-li-a" href="#Home">Logo</a></li>
            <li className="hu-li" style={float}><a className="hu-li-a" href="#Login">Login/Register</a></li>
            </ul>
        </div>
    );  
  }
