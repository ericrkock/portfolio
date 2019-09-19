import React from 'react';
import './AboutMe.css';

class AboutMe extends React.Component {
    render() {
        return (
            <div>
                <div className="about-me">
                    <div className="picture">

                    </div>
                    <div className="bio-me">
                        <p>About me</p>
                        <ul>
                            <li>Name: Eric R. Kock</li>
                            <li>Nationality: Belgian (Elsene - Brussels)</li>
                            <li>Born: October 1968</li>
                            <li>Resident: Faro - Portugal</li>
                            <li>Languages: BE/NL - EN - PT - FR - DE</li><br></br>
                            <li>Front-end developer since 2019 (Remote)</li>
                        </ul>
                    </div>
                </div>
                <div className="history">
                    <p>My passion for coding started mid 80's, with Visual Basic and MS-DOS. Even before MS-Windows and internet.</p>
                    <p>In '89 my graduation-shool-end-work was to program an Invoice application. Which I succeed big.</p>
                    <p>More About Me - Coming Soon</p>
                </div>

            </div>
        );
    }
}

export default AboutMe;