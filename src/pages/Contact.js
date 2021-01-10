import React from 'react';
import Navigation from '../components/Navigation';

const contact = () => {
    return (
        <div className="contact">
            <Navigation/>
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Paris</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <span className="clickInput">06 62 30 09 32</span>
                        </li>
                        <li>
                            <i className="far fa-envelope"></i>
                            <span className="clickInput">jorge.dasilva1@outlook.fr</span>
                        </li>
                    </ul>
                </div>
                    <div className="socialNetwork">
                        <ul>
                            <a href="https://fr.linkedin.com/" target ="_blanck"
                            rel="noopener norefermer">
                                <h4>LinkedIn</h4>
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/" target ="_blanck"
                            rel="noopener norefermer">
                                <h4>Github</h4>
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://twitter.com/home" target ="_blanck"
                            rel="noopener norefermer">
                                <h4>Twitter</h4>
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://codepen.io/" target ="_blanck"
                            rel="noopener norefermer">
                                <h4>Codepen</h4>
                                <i className="fab fa-codepen"></i>
                            </a>
                        </ul>
                    </div>
                </div>
        </div>
    );
};

export default contact;