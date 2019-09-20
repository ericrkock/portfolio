import React from 'react';
import './AboutMe.css';

import Eric from '../img/Eric-R-Kock.jpg';

class AboutMe extends React.Component {
    render() {
        return (
            <div className="about-me-wrapper">
                <div className="about-me">
                    <div className="picture">
                        <img src={Eric} alt="Front-end Developer" />
                    </div>
                    <div className="bio-me">
                        <h1>About me</h1>
                        <ul>
                            <li>Name: <b>Eric R. Kock</b></li>
                            <li>Nationality: Belgian (Elsene - Brussels)</li>
                            <li>Born: October 1968</li>
                        </ul>
                        <ul>
                            <li>Resident: Faro - Portugal (since 2002)</li>
                            <li>Languages: BE/NL - EN - PT - FR - DE</li>
                        </ul>
                    </div>
                    <div className="bio-me-2">
                        <ul>
                            <li>Front-end developer since 2019 (Remote)</li>
                            <li>JavaScript - React JS - Node JS</li>
                            <li>HTML - CSS</li>
                        </ul>
                    </div>
                </div>
                <div className="history">
                    <p>Hello. I’m a software developer working from the Algarve and developing beautiful software. Currently doing work in web development with React and NodeJS, implementing front-end or back-end applications. <b>Committed, organized and always eager to learn and improve</b>.</p>
                    <p>My passion for coding started mid 80's, with Visual Basic and MS-DOS. Even before MS-Windows and internet. In '89 I accomplished successfully my "Complete Invoice Program" thesis.</p>
                    <p>More About Me - Coming Soon</p>
                </div>
            </div>
        );
    }
}

export default AboutMe;