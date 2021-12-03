import React from 'react';

export default function Interests(props) {
    return (
        <div className="interests">
            <h3 className="section-title">Interests</h3>
            {props.interests.map((thing, i) => {
                return (
                    <span className="interest" key={i}>
                        {thing}
                    </span>
                );
            })}
        </div>
    );
}
