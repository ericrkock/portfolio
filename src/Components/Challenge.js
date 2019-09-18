import React from 'react';
import './challenge.css';
import Button from "react-bootstrap/Button";

class Challenge extends React.Component {
   render() {
      return (
         <div className="challenge">
            <p className="title">{this.props.projecttitle}</p>
            <img src={this.props.projectimg} alt={this.props.projectimgalt} />
            <div className="buttonset">
               <Button variant="warning" href={this.props.repository} target="_blank">Github</Button>
               <Button variant="dark" href={this.props.codepen} target="_blank">CodePen</Button>
               <Button variant="success" href={this.props.live} target="_blank">Live</Button>
            </div>
            <p className="project-date">{this.props.projectdate}</p>
         </div>
      );
   }
}

export default Challenge;