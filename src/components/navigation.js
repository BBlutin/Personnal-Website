import React, { Component } from 'react';
import './navigation.css';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const page = e.target.id;
        this.props.onClick(page);
    }

    render() {
        return(
            <div className="col-xs-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                <div className="menubox justify-content-center shadow-lg mb-5">
                    <h2 class="textyellow textspaced"><u>Choix du niveau</u></h2>

                    <ul className="navbar-nav">
                        <li className="nav-item textspaced" id="ABOUT" onClick={this.handleClick}>A propos</li>
                        <li className="nav-item textspaced" id="PROJECTS" onClick={this.handleClick}>Projets</li>
                        <li className="nav-item textspaced" id="CONNECT" onClick={this.handleClick}>Mes reseaux</li>
                        {/* <li className="nav-item textspaced" id="BONUS" onClick={this.handleClick}>Bonus</li> */}
                        <hr className="navbreak"/>
                        <li className="nav-item textspaced" id="START" onClick={this.handleClick}>Redemarer</li>
                    </ul>
                </div>
            </div>
        )
    }
}