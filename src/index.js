import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProjectHeader from './Components/ProjectHeader';
import Challenge from './Components/Challenge';
import ProjectFooter from './Components/ProjectFooter';

import QuoteMachine from './img/random-quote-machine.jpg';
import MarkdownPreviewer from './img/markdown-previewer.jpg';
import DrumMachine from './img/drum-machine.jpg';
import Calculator from './img/js-calculator.jpg';
import Pomodoro from './img/pomodoro-clock.jpg';
import Certificate from './img/front-end-libraries-certificate.jpg';

class Portfolio extends React.Component {
   constructor(props) {
      super(props);
      this.state = {


         projecttitle: undefined,
         projectimg: undefined,
         projectimgalt: undefined,
         repository: undefined,
         codepen: undefined,
         live: undefined,
         projectdate: undefined

      };
   }
   render() {
      return (
         <div>
            <div className="project-header">
               <ProjectHeader />
            </div>
            <div className="challenge-wrapper">
               <div className="challenge-title">
                  <div>Own Challenges</div>
                  <p>JavaScript & ReactJS projects</p>
               </div>
               <div className="challenges">
                  <Challenge 
                     projecttitle = "Character Count"
                     projectimg = ""
                     projectimgalt = "Character & Word Count"
                     repository = "https://github.com/ericrkock/Character-Count"
                     codepen= ""
                     live = "https://ericrkock.github.io/Character-Count/"
                     projectdate = "Aug 2019"
                  />
                  <Challenge 
                     projecttitle = "Fibonacci Sequences"
                     projectimg = ""
                     projectimgalt = "3 Ways to calculate Fibonacci Sequences"
                     repository = "https://github.com/ericrkock/Fibonacci-Sequences"
                     codepen= ""
                     live = "https://ericrkock.github.io/Fibonacci-Sequences/"
                     projectdate = "Aug 2019"
                  />
                  <Challenge 
                     projecttitle = "Coming Soon"
                     projectimg = ""
                     projectimgalt = "Coming Soon"
                     repository = ""
                     codepen= ""
                     live = ""
                     projectdate = "Coming Soon"
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
                     projecttitle = "Show Local Weather"
                     projectimg = ""
                     projectimgalt = "Local Weather App"
                     repository = "https://github.com/ericrkock/Show-Local-Weather"
                     codepen= ""
                     live = "https://ericrkock.github.io/Show-Local-Weather/"
                     projectdate = "Sep 2019"
                  />
                  <Challenge 
                     projecttitle = "Coming Soon"
                     projectimg = ""
                     projectimgalt = "Coming Soon"
                     repository = ""
                     codepen= ""
                     live = ""
                     projectdate = "Coming Soon"
                  />
                  <Challenge 
                     projecttitle = "Coming Soon"
                     projectimg = ""
                     projectimgalt = "Coming Soon"
                     repository = ""
                     codepen= ""
                     live = ""
                     projectdate = "Coming Soon"
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
                     projecttitle = "Random Quote Machine"
                     projectimg = {QuoteMachine}
                     projectimgalt = "Random Quote Machine"
                     repository = "https://github.com/ericrkock/random-quote-machine"
                     codepen= "https://codepen.io/EricRKock/full/MPaWod"
                     live = "https://ericrkock.github.io/random-quote-machine/"
                     projectdate = "Feb 2019"
                  />
                  <Challenge 
                     projecttitle = "Mardown Previewer"
                     projectimg = {MarkdownPreviewer}
                     projectimgalt = "Mardown Previewer"
                     repository = "https://github.com/ericrkock/markdown-previewer"
                     codepen= "https://codepen.io/EricRKock/full/mvjRQj"
                     live = "https://ericrkock.github.io/markdown-previewer/"
                     projectdate = "Feb 2019"
                  />
                  <Challenge 
                     projecttitle = "Drum Machine"
                     projectimg = {DrumMachine}
                     projectimgalt = "Drum Machine"
                     repository = "https://github.com/ericrkock/mdrum-machine"
                     codepen= "https://codepen.io/EricRKock/full/ZwXEgz"
                     live = "https://ericrkock.github.io/drum-machine/"
                     projectdate = "Feb 2019"
                  />
               </div>
               <hr className="divide-line-challenge"></hr>
               <div className="challenges">
                  <Challenge 
                     projecttitle = "Javascript Calculator"
                     projectimg = {Calculator}
                     projectimgalt = "Javascript Calculator"
                     repository = "https://github.com/ericrkock/js-calculator"
                     codepen= "https://codepen.io/EricRKock/full/mvLzWm"
                     live = "https://ericrkock.github.io/js-calculator/"
                     projectdate = "Feb 2019"
                  />
                  <Challenge 
                     projecttitle = "Pomodoro Clock"
                     projectimg = {Pomodoro}
                     projectimgalt = "Pomodoro Clock"
                     repository = "https://github.com/ericrkock/pomodoro-clock"
                     codepen= "https://codepen.io/EricRKock/full/NoXpzO"
                     live = "https://ericrkock.github.io/pomodoro-clock/"
                     projectdate = "Feb 2019"
                  />
                  <Challenge 
                     projecttitle = "Freecodecamp Certificate"
                     projectimg = {Certificate}
                     projectimgalt = "FCC Front End Libraries Certificater"
                     repository = "https://www.freecodecamp.org/certification/eric-r-kock/front-end-libraries"
                     codepen= ""
                     live = "https://www.freecodecamp.org/certification/eric-r-kock/front-end-libraries"
                     projectdate = "Achieved Feb 2019"
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
                     projecttitle = "Tribute page"
                     projectimg = ""
                     projectimgalt = "Tribute Page"
                     repository = "https://github.com/ericrkock/tribute-page"
                     codepen= "https://codepen.io/EricRKock/full/XYrqZB"
                     live = "https://ericrkock.github.io/tribute-page/"
                     projectdate = "May 2019"
                  />
                  <Challenge 
                     projecttitle = "Survey Form"
                     projectimg = ""
                     projectimgalt = "Survey Form"
                     repository = ""
                     codepen= "https://codepen.io/EricRKock/full/qQpZov"
                     live = "/"
                     projectdate = "Update Coming Soon"
                  />
                  <Challenge 
                     projecttitle = "Product Landing Page"
                     projectimg = ""
                     projectimgalt = "Product Landing Page"
                     repository = ""
                     codepen= "https://codepen.io/EricRKock/full/QJZrpy"
                     live = ""
                     projectdate = "Coming Soon"
                  />
               </div>
               <hr className="divide-line-challenge"></hr>
               <div className="challenges">
                  <Challenge 
                     projecttitle = "Technical Documentation Page"
                     projectimg = ""
                     projectimgalt = "Technical Documentation Page"
                     repository = ""
                     codepen= "https://codepen.io/EricRKock/full/QJzzae"
                     live = ""
                     projectdate = "Coming Soon"
                  />
                  <Challenge 
                     projecttitle = "Personal Portfolio Web Page"
                     projectimg = ""
                     projectimgalt = "Personal Portfolio Web Page"
                     repository = ""
                     codepen= "https://codepen.io/EricRKock/full/bKbKYM"
                     live = ""
                     projectdate = "Coming Soon"
                  />
                  <Challenge 
                     projecttitle = "Freecodecamp Certificate"
                     projectimg = ""
                     projectimgalt = "FCC Front End Libraries Certificater"
                     repository = ""
                     codepen= ""
                     live = ""
                     projectdate = "Achieved Feb 2019"
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


