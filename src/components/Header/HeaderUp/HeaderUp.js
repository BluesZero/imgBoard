import React from 'react';
import './HeaderUp.css'

export default function HeaderUp() {
    const float={
        float:'right'
    }

    return (
        <div>
            <ul class="hu-ul">
            <li class="hu-li"><a class="hu-li-a" href="#Home">Logo</a></li>
            <li class="hu-li" style={float}><a class="hu-li-a" href="#Login">Login/Register</a></li>
            </ul>
        </div>
    );  
  }
