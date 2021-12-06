import React from 'react';
import './Bio.scss';
import Contact from './Contact';

export default function Bio(props) {
    return (
        <header className="bio">
            <h1 className="full-name">
                <span className="first-name">{props.firstName}</span>
                <span className="last-name">{props.lastName}</span>
            </h1>
            <section className="title-contact">
                <h3 className="title">{props.title}</h3>
                <Contact {...props} />
            </section>
            <h2 className="section-title">Profile</h2>
            <div className="about">{props.about}</div>
        </header>
    );
}
