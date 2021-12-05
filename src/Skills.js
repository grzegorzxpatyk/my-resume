import React from 'react';
import Skill from './Skill';
import './Skills.scss';

export default function Skills(props) {
    return (
        <section className="skills">
            <h3 className="section-title">Skills</h3>
            <div className="skills-list">
                {props.skills.map((skill, skillIndex) => {
                    return <Skill key={skillIndex} {...skill} />;
                })}
            </div>
        </section>
    );
}
