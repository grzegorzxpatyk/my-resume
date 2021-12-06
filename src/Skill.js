import React from 'react';

export default function Skill(props) {
    const blank = 6 - props.level;
    let dots = '';
    for (let i = 0; i < props.level; i++) {
        dots += '+ ';
    }
    for (let j = 0; j < blank; j++) {
        dots += '_ ';
    }
    return (
        <div className="skill">
            <h4 className="skill-name">{props.name}</h4>
            <span className="level">{dots}</span>
        </div>
    );
}
