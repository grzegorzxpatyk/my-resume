import React from 'react';
import './Skills.scss';

export default function Skills(props) {
    return (
        <section className="skills">
            <h3 className="section-title">Skills</h3>
            <div className="skills-list">
                {props.skills.map((skill, skillIndex) => {
                    return (
                        <span className="skill">
                            {skill}
                            {skillIndex === props.skills.length - 1
                                ? '.'
                                : ', '}
                        </span>
                    );
                })}
            </div>
        </section>
    );
}
