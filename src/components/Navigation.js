import React from 'react';
import { NavLink } from 'react-router-dom'; 

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/JorgeDaSilva.jpg" alt="profil.pic" />
                    <h3>Jorge Da Silva</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                        <i className="fas fa-home"></i>
                        <span>Accueil</span>
                        </NavLink>
                    </li>
                
                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive">
                        <i className="fas fa-tree"></i>
                        <span>Compétences</span>
                        </NavLink>
                    </li>
                
                
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                        <i className="fas fa-images"></i>
                        <span>Portfolio</span>
                        </NavLink>
                    </li>
                
                
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                        <i className="fas fa-address-book"></i>
                        <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://fr.linkedin.com/" target ="_blanck"
                        rel="noopener norefermer"><i className="fab fa-linkedin">
                        </i> </a>
                    </li>
                    <li>
                        <a href="https://github.com/JorgeDaSilva72" target ="_blanck"
                        rel="noopener norefermer"><i className="fab fa-github">
                        </i> </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/home" target ="_blanck"
                        rel="noopener norefermer"><i className="fab fa-twitter">
                        </i> </a>
                    </li>
                    <li>
                        <a href="https://codepen.io/" target ="_blanck"
                        rel="noopener norefermer"><i className="fab fa-codepen">
                        </i> </a>
                    </li>
                </ul>
                <div className="signature">
                <p>Jorge Da Silva - 2020</p>
            </div>
            </div>

           

        </div>     
           
          
    );
};

export default Navigation;