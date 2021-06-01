import React, { Component } from 'react';
import me from '../images/me.png'
import './about.css';

export default class About extends Component {
    render() {
        return(
            <div className="col-xs-12 col-xl-8 offset-xl-2">
                <div className="pagebox pt-4 pb-4 shadow-lg">
                    <div className="row justify-content-center col-12 text-white pr-0 pl-0 ml-0 mr-0">
                        <div className="col-12 col-md-10 col-lg-6 pt-3 pl-0 pr-0">
                            <div className="row justify-content-center">
                                <div className="pb-3">
                                    <img src={me} className="biopicture" alt="bio-pic" />
                                </div>

                                <div className="pl-3">
                                    <h3 className="textyellow textspaced"><u>informations</u></h3>
                                    <ul className="no-bullets raleway pl-0">
                                        <li>
                                            <b>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="iconabout" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </b> Thomas Fritschy
                                        </li>
                                        <li>
                                            <b>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="iconabout" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                             </b> Strasbourg, FR
                                        </li>
                                        <li>
                                            <b>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="iconabout" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </b> Web Developer
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <p className="raleway text-center col-xs-12 col-xl-10 offset-xl-1 pt-2 pl-1 pr-1">
                                Bonjour ! Je m'appel Thomas Fritschy. Je suis un développeur Front-End français de Strasbourg, en Alsace.
                                Je suis  à l'aise avec React, React-Native, Next.js, Javascript ainsi que des langages web traditionnels tels que CSS et HTML.
                                J'adore faire de nouvelles expériences et acquérir de nouvelles capacitées. <br /> <br />
                                Issu du monde de l'autodidacte, je me forme au fur et à mesure des projets que j'entreprend. 
                            </p>
                        </div>


                        <div className="col-12 col-md-10 col-lg-6 pt-3 pl-2 pr-2">
                            <h3 className="textblue textspaced"><u>Caracteristiques</u></h3>
                            <ul className="raleway pb-2">
                                <li className="brief-item">Curieux</li>
                                <li className="brief-item">Autonnome</li>           
                                <li className="brief-item">Motivé</li>      
                                <li className="brief-item">Travail d'équipe</li> 
                                <li className="brief-item">Organisé</li>          
                            </ul>
                            <div className="row pr-0 ml-0 pt-2">
                                <h4 className="textpink textspaced pr-2">Power Ups: </h4>
                                <h5 className="text-white raleway smallheader pt-1">Ski, Musique, Voyages</h5>
                            </div>
                            <div className="row pr-0 ml-0 pt-2">
                                <h4 className="textpink textspaced pr-2">Skills: </h4>
                                <h5 className="text-white raleway smallheader pt-1">Developpement, Musique, Gestion d'infrastucture</h5>
                            </div> 
                        </div>                        
                    </div>

                    
                    
                </div>
            </div>
        )
    }
}