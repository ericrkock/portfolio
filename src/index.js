import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import ProjectHeader from './Components/ProjectHeader';
import AboutMe from './Components/AboutMe';
import Challenge from './Components/Challenge';
import ProjectFooter from './Components/ProjectFooter';

import Soon from './img/Coming-Soon.jpg';

/* Own Challenges */
import CharCount from './img/character-count.jpg';
import Fibonacci from './img/fibonacci-sequences.jpg';

/* FCC - Take Home Projects */
import LocalWeather from './img/local-weather.jpg';

/* FCC - Front-End Libraries */
import QuoteMachine from './img/random-quote-machine.jpg';
import MarkdownPreviewer from './img/markdown-previewer.jpg';
import DrumMachine from './img/drum-machine.jpg';
import Calculator from './img/js-calculator.jpg';
import Pomodoro from './img/pomodoro-clock.jpg';
import Certificate2 from './img/front-end-libraries-certificate.jpg';

/* FCC - Responsive Web Designs */
import Tribute from './img/tribute-page.jpg';
import SurveyForm from './img/survey-form.jpg';
import ProductPage from './img/product-landingpage.jpg';
import TechDoc from './img/technical-documentation.jpg';
import PersPort from './img/personal-portfolio.jpg';
import Certificate1 from './img/responsive-web-design-certificate.jpg';

class Portfolio extends React.Component {

   render() {
      return (
         <div>
            <div className="project-header">
               <ProjectHeader />
            </div>
            <div className="about-me">
               <AboutMe />
            </div>
            <div className="gap"></div>
            <div className="challenge-wrapper">
               <div className="challenge-title">
                  <div>Own Challenges</div>
                  <p>JavaScript & ReactJS projects</p>
               </div>
               <div className="challenges">
                  <Challenge
                     projecttitle="Character Count"
                     projectimg="https://raw.githubusercontent.com/ericrkock/portfolio/master/src/img/character-count.jpg"
                     projectimgalt="Character & Word Count"
                     variant="warning"
                     code="https://github.com/ericrkock/Character-Count"
                     buttonname="Github"
                     live="https://ericrkock.github.io/Character-Count/"
                     projectdate="Aug 2019"
                  />
                  <Challenge
                     projecttitle="Fibonacci Sequences"
                     projectimg="https://raw.githubusercontent.com/ericrkock/portfolio/master/src/img/fibonacci-sequences.jpg"
                     projectimgalt="3 Ways to calculate Fibonacci Sequences"
                     variant="warning"
                     code="https://github.com/ericrkock/Fibonacci-Sequences"
                     buttonname="Github"
                     live="https://ericrkock.github.io/Fibonacci-Sequences/"
                     projectdate="Aug 2019"
                  />
                  <Challenge
                     projecttitle="New Own Challenge"
                     projectimg={Soon}
                     projectimgalt="Coming Soon"
                     variant="danger"
                     code=""
                     buttonname="Soon"
                     live=""
                     projectdate="Coming Soon"
                  />
               </div>
            </div>
            <div className="gap"></div>
            <div className="challenge-wrapper">
               <div className="challenge-title">
                  <div>Take Home Projects</div>
                  <p>FreeCodeCamp Project Challenges</p>
               </div>
               <div className="challenges">
                  <Challenge
                     projecttitle="Show Local Weather"
                     projectimg={LocalWeather}
                     projectimgalt="Local Weather App"
                     variant="warning"
                     code="https://github.com/ericrkock/Show-Local-Weather"
                     buttonname="Github"
                     live="https://ericrkock.github.io/Show-Local-Weather/"
                     projectdate="Sep 2019"
                  />
                  <Challenge
                     projecttitle="Wikepedia Viewer"
                     projectimg="https://raw.githubusercontent.com/ericrkock/portfolio/master/src/img/wikipedia-viewer.jpg"
                     projectimgalt="Wikepedia Viewer"
                     variant="warning"
                     code="https://github.com/ericrkock/Wikepedia-Viewer"
                     buttonname="Github"
                     live="https://ericrkock.github.io/Wikipedia-Viewer/"
                     projectdate="Oct 2019"
                  />
                  <Challenge
                     projecttitle="New Challenge"
                     projectimg={Soon}
                     projectimgalt="Coming Soon"
                     variant="danger"
                     code=""
                     buttonname="Soon"
                     live=""
                     projectdate="Coming Soon"
                  />
               </div>
            </div>
            <div className="gap"></div>
            <div className="challenge-wrapper">
               <div className="challenge-title">
                  <div>Front-End Libraries</div>
                  <p>FreeCodeCamp Project Challenges</p>
               </div>
               <div className="challenges">
                  <Challenge
                     projecttitle="Random Quote Machine"
                     projectimg={QuoteMachine}
                     projectimgalt="Random Quote Machine"
                     variant="warning"
                     code="https://github.com/ericrkock/random-quote-machine"
                     buttonname="Github"
                     live="https://ericrkock.github.io/random-quote-machine/"
                     projectdate="Feb 2019"
                  />
                  <Challenge
                     projecttitle="Mardown Previewer"
                     projectimg={MarkdownPreviewer}
                     projectimgalt="Mardown Previewer"
                     variant="warning"
                     code="https://github.com/ericrkock/markdown-previewer"
                     buttonname="Github"
                     live="https://ericrkock.github.io/markdown-previewer/"
                     projectdate="Feb 2019"
                  />
                  <Challenge
                     projecttitle="Drum Machine"
                     projectimg={DrumMachine}
                     projectimgalt="Drum Machine"
                     variant="warning"
                     code="https://github.com/ericrkock/mdrum-machine"
                     buttonname="Github"
                     live="https://ericrkock.github.io/drum-machine/"
                     projectdate="Feb 2019"
                  />
               </div>
               <hr className="divide-line-challenge"></hr>
               <div className="challenges">
                  <Challenge
                     projecttitle="Javascript Calculator"
                     projectimg={Calculator}
                     projectimgalt="Javascript Calculator"
                     variant="warning"
                     code="https://github.com/ericrkock/js-calculator"
                     buttonname="Github"
                     live="https://ericrkock.github.io/js-calculator/"
                     projectdate="Feb 2019"
                  />
                  <Challenge
                     projecttitle="Pomodoro Clock"
                     projectimg={Pomodoro}
                     projectimgalt="Pomodoro Clock"
                     variant="warning"
                     code="https://github.com/ericrkock/pomodoro-clock"
                     buttonname="Github"
                     live="https://ericrkock.github.io/pomodoro-clock/"
                     projectdate="Feb 2019"
                  />
                  <Challenge
                     projecttitle="Front End Libraries"
                     projectimg={Certificate2}
                     projectimgalt="FCC Front End Libraries Certificate"
                     variant="info"
                     code="https://www.freecodecamp.org/certification/eric-r-kock/front-end-libraries"
                     buttonname="Certificate"
                     live="https://www.freecodecamp.org/certification/eric-r-kock/front-end-libraries"
                     projectdate="Achieved Feb 2019"
                  />
               </div>
            </div>
            <div className="gap"></div>
            <div className="challenge-wrapper">
               <div className="challenge-title">
                  <div>Responsive Web Designs</div>
                  <p>FreeCodeCamp Project Challenges</p>
               </div>
               <div className="challenges">
                  <Challenge
                     projecttitle="Tribute page"
                     projectimg={Tribute}
                     projectimgalt="Tribute Page"
                     variant="dark"
                     code="https://codepen.io/EricRKock/pen/XYrqZB"
                     buttonname="Codepen"
                     live="https://codepen.io/EricRKock/full/XYrqZB"
                     projectdate="2018"
                  />
                  <Challenge
                     projecttitle="Survey Form"
                     projectimg={SurveyForm}
                     projectimgalt="Survey Form"
                     variant="dark"
                     codepen="https://codepen.io/EricRKock/pen/qQpZov"
                     buttonname="Codepen"
                     live="https://codepen.io/EricRKock/full/qQpZov"
                     projectdate="2018"
                  />
                  <Challenge
                     projecttitle="Product Landing Page"
                     projectimg={ProductPage}
                     projectimgalt="Product Landing Page"
                     variant="dark"
                     code="https://codepen.io/EricRKock/pen/QJZrpy"
                     buttonname="Codepen"
                     live="https://codepen.io/EricRKock/full/QJZrpy"
                     projectdate="2018"
                  />
               </div>
               <hr className="divide-line-challenge"></hr>
               <div className="challenges">
                  <Challenge
                     projecttitle="Technical Documentation Page"
                     projectimg={TechDoc}
                     projectimgalt="Technical Documentation Page"
                     variant="dark"
                     code="https://codepen.io/EricRKock/pen/QJzzae"
                     buttonname="Codepen"
                     live="https://codepen.io/EricRKock/full/QJzzae"
                     projectdate="2018"
                  />
                  <Challenge
                     projecttitle="Personal Portfolio Web Page"
                     projectimg={PersPort}
                     projectimgalt="Personal Portfolio Web Page"
                     variant="dark"
                     code="https://codepen.io/EricRKock/pen/bKbKYM"
                     buttonname="Codepen"
                     live="https://codepen.io/EricRKock/full/bKbKYM"
                     projectdate="2018"
                  />
                  <Challenge
                     projecttitle="Responsive Web Design"
                     projectimg={Certificate1}
                     projectimgalt="FCC Responsive Web Design"
                     variant="info"
                     code="https://www.freecodecamp.org/certification/eric-r-kock/responsive-web-design"
                     buttonname="Certificate"
                     live="https://www.freecodecamp.org/certification/eric-r-kock/responsive-web-design"
                     projectdate="Achieved Dec 2018"
                  />
               </div>
            </div>
            <div className="gap"></div>
            <div className="project-footer">
               <ProjectFooter />
            </div>
         </div>
      );
   }
}


ReactDOM.render(<Portfolio />, document.getElementById('root'));


