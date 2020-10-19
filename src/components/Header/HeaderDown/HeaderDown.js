import React from 'react';
import './HeaderDown.css'

export default function HeaderDown() {

    return (
        <div>
            <div className="hd-ul">
                <li className="hd-li">

                    <div className="search-container">
                        <form >
                        <input type="text" placeholder="Search.." name="search"></input>
                        </form>
                    </div>

                </li>
                <li className="hd-li"><a className="hd-li-a" href="#Home">Posts</a></li>
                <li className="hd-li"><a className="hd-li-a" href="#Login">Ranking</a></li>
                <li className="hd-li"><a className="hd-li-a" href="#Login">Upload</a></li>
                <li className="hd-li"><a className="hd-li-a" href="#Login">Contact</a></li>
            </div>
        </div>
    );  

  }