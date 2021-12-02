import React from 'react';
import Bio from './Bio';
import './Resume.scss';

export default function Resume(props) {
    return (
        <div className="resume">
            <Bio {...props}></Bio>
        </div>
    );
}
