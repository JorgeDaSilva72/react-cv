import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
 

class Languages extends Component {
    state={
        languages: [
    
            {id: 1, value: "Javascript", xp:1.8},
            {id: 2, value: "Css", xp:2},
            {id: 3, value: "Php", xp:1.2},
            {id: 4, value: "Java", xp:1.2}
        ],
        frameworks: [
    
            {id: 1, value: "React", xp:1.4},
            {id: 2, value: "Bootstrap", xp:2},
            {id: 3, value: "Sass", xp:1.5},
            {id: 4, value: "Material UI", xp:0.5}
        ]
    }

    render() {
        let {languages, frameworks} = this.state; 
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languageDisplay"
                    title="languages"
                />
                <ProgressBar
                    languages={frameworks}
                    title="frameworks & bibilothèques"
                    className="frameworkDisplay"
                />

                
            </div>
        );
    }
}

export default Languages;