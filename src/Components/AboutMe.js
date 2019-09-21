import React from 'react';
import './AboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Eric from '../img/Eric-R-Kock.jpg';

class AboutMe extends React.Component {
    render() {
        return (
            <div className="about-me-wrapper">
                <div className="about-me">
                    <div className="picture">
                        <img src={Eric} alt="Front-end Developer" />
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />{"    "}
                        <FontAwesomeIcon icon={faFreeCodeCamp} size="2x" />{"    "}
                        <FontAwesomeIcon icon={faGithub} size="2x" />
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
                            <li>Freelancer since 2014</li>
                            <li>Wordpress websites</li>
                            <li>Digital marketer / Online Branding</li>
                            <li>SEO consultant</li>
                        </ul>
                        <ul>
                            <li>Front-end developer since 2019 (Remote)</li>
                            <li>JavaScript - React - Node JS</li>
                            <li>HTML5 - CSS3 - SAAS - ES6</li>
                        </ul>
                    </div>
                </div>
                
                <div className="history">
                    <p>Hello. I’m a software developer working from the Algarve and developing beautiful software. Currently doing work in web development with React and NodeJS, implementing front-end or back-end applications. <b>Committed, organized and always eager to learn and improve</b>.</p>
                    <h5>- Short History</h5>
                        <div className="p-indend">
                            <p >My passion for coding started mid 80's, with Visual Basic and DOS. Even before MS-Windows and internet. In '89 I accomplished successfully my "Complete Invoice Program" thesis in Visual Basic.</p>
                        </div>
                    <h5>- Nowadays ...</h5>
                        <div className="p-indend">
                            <p>Since 2014 as freelancer, I create HTML & Wordpress websites for small businesses. Specialised as well as digital marketer, online branding and SEO consultant. Always ambitious to learn more coding languages, front-end & back-end. Driven to developing beautiful software.</p>
                            <p>Currently doing remote work in web development with JavaScript, React and NodeJS, implementing front-end or back-end applications.</p>
                        </div>
                    <h5>- Education & Courses</h5>
                        <div className="p-indend">
                            <p>Education: CEERIA-COOVI - Brussels / IHB - Brussels</p>
                            <p>Online Courses: FreeCodeCamp / Hackerrank / Codecademy / Udemy</p>
                        </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;