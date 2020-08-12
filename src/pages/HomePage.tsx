import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/HomePage.css';
import { LogoSpinner } from '../components';
import { FaGithub, FaLinkedinIn, FaCommentsDollar } from 'react-icons/fa';

function HomePage() {
    return (
        <div className="page-container">
            <header className="page-header">
                <LogoSpinner logo={logo} />
                <p>
                    <b>andrew richardson</b> - <code>software engineer</code> / <i>graphic designer</i> / entrepreneur
                </p>
                <div className="page-row">
                    <a
                        className="web-link"
                        href="https://github.com/andrewRichardson"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        github
                    </a>
                    < FaGithub size={"calc(10px + 1.5vmin)"} />
                </div>
                <div className="page-row">
                    <a
                        className="web-link"
                        href="https://www.linkedin.com/in/andrew-roland-richardson"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        linkedin
                    </a>
                    < FaLinkedinIn size={"calc(10px + 1.5vmin)"} />
                </div>
                <div className="page-row">
                    <a
                        className="web-link"
                        href="https://www.fiverr.com/arichardson98"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        fiverr
                    </a>
                    < FaCommentsDollar size={"calc(10px + 1.5vmin)"} />
                </div>
            </header>
        </div>
    );
}

export default HomePage;
