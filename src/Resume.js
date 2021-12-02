import React from 'react';
import Bio from './Bio';
import Experience from './Experience';
import './Resume.scss';

export default function Resume(props) {
    return (
        <div className="resume">
            <Bio {...props.bio}></Bio>
            <Experience jobs={props.experience} />
        </div>
    );
}
