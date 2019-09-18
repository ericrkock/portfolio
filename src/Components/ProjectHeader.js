import React from 'react';
import './project.css';

class ProjectHeader extends React.Component {
   render() {
      return (
         <div className="header">
            <h1>My Project Portfolio</h1>
            <hr className="divide-line-header" />
            <p>React JS</p>
      </div>
      );
   }
}

export default ProjectHeader;