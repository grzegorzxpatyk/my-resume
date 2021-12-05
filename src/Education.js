import React from 'react';
import School from './School';

export default function Education(props) {
    return (
        <section className="education">
            <h2 className="section-title">Education</h2>
            {props.schools.map((school, schoolIndex) => {
                return <School key={schoolIndex} {...school} />;
            })}
        </section>
    );
}
