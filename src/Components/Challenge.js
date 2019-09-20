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
               <Button variant="success" href={this.props.live} target="_blank">Live</Button>
               <Button variant={this.props.variant} href={this.props.code} target="_blank">{this.props.buttonname}</Button>
            </div>
            <p className="project-date">{this.props.projectdate}</p>
         </div>
      );
   }
}

export default Challenge;