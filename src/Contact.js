import React from 'react';

export default function Contact(props) {
    return (
        <div className="contact-info">
            <span className="email">
                <a
                    href={`mailto:${props.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {props.email}
                </a>
            </span>
            <span className="phone">{props.phoneNumber}</span>
            <span className="social-icons">
                <a
                    href="https://www.linkedin.com/in/grzegorz-patyk"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-linkedin"></i>
                </a>
                <a
                    href="https://github.com/grzegorzxpatyk"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-github-square"></i>
                </a>
            </span>
        </div>
    );
}
