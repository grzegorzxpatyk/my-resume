import React from 'react';

export default function Skill(props) {
    return (
        <div className="skill">
            <h4 className="skill-name">{props.name}</h4>
            <span className="level">{props.level}</span>
        </div>
    );
}
