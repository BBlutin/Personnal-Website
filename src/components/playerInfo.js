import React, { Component } from 'react';
import './playerInfo.css';

export default class PlayerInfo extends Component {
    render() {
        return(
            <div>
                <h2 className="playername textyellow textspaced">Thomas Fritschy</h2>
                <hr className="horizontalbreak mt-0 mb-2 mr-0 ml-0"/>                        
                <h5 className="playerbio textblue textspaced">FrontEnd Developer</h5>
                <h5 className="playerbio textblue textspaced">Joueur 1</h5>  
            </div>
        )
    }
}

/* col-lg-9 col-md-10 col-sm-12 */