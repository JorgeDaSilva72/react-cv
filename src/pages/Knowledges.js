import React from 'react';
import Navigation from '../components/Navigation';
import Languages from '../components/knowledges/Languages';
import Experience from '../components/knowledges/Experience';
import OtherSkills from '../components/knowledges/OtherSkills';
import Formation from '../components/knowledges/Formation';




const Knowledges = () => {
    return (
        <div className= "knowledges">
            <Navigation />
                <div className="knowledgesContent">
                    <Languages/>
                    <Experience/>
                    <OtherSkills/>
                    <Formation/>
                </div>
            </div>
    );
};

export default Knowledges;