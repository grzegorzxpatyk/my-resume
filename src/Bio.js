import React from 'react';
import './Bio.scss';

export default function Bio(props) {
    return (
        <header className="bio">
            <div className="full-name">
                <span className="first-name">{props.firstName}</span>
                <span className="last-name">{props.lastName}</span>
            </div>
            <div className="contact-info">
                <span className="email">
                    email: <a href={`mailto:${props.email}`}>{props.email}</a>
                </span>
                <span className="phone">phone: {props.phoneNumber}</span>
                <span className="social-icons">
                    <a href="https://www.linkedin.com/in/grzegorz-patyk">
                        {/* <i class="fab fa-lg fa-linkedin-in"></i> */}
                        LinkedIn
                    </a>
                </span>
                <span className="social-icons">
                    <a href="https://github.com/grzegorzp4tyk">
                        {/* <i class="fab fa-lg fa-github"></i> */}
                        GitHub
                    </a>
                </span>
            </div>
            <div className="about">{props.about}</div>
        </header>
    );
}
