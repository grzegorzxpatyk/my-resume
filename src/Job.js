import React from 'react';

export default function Job(props) {
    return (
        <div className="job">
            <h3 className="job-position">
                <span>{props.position}</span>
                <span className="duration">{props.duration}</span>
            </h3>
            <div className="job-details">
                <span className="company">{props.company}</span>
                <span className="location">{props.location}</span>
                <p
                    className="description"
                    dangerouslySetInnerHTML={{
                        __html: `${props.description}`,
                    }}
                ></p>
            </div>
        </div>
    );
}
