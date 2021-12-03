import React from 'react';
import './School.scss';

export default function School(props) {
    return (
        <div className="school">
            <h3 className="school-name">
                <span>{props.name}</span>
                <span className="duration">{props.duration}</span>
            </h3>
            <div className="school-details">
                <span className="degree">{props.degree}</span>
                <span className="location">{props.location}</span>
            </div>
        </div>
    );
}
