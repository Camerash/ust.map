import React, { Component } from 'react';
import { Label } from 'semantic-ui-react'
import '../styles/Tag.css';

class TagIcon extends Component {
  render() {
    return (
      <div></div>
    );
  }
}

class Tag extends Component {

  render() {
    let x = ((this.props.data.x-15) / this.props.width) * 100;
    let y = ((this.props.data.y-30) / this.props.height) * 100;

    return (
      <div
        id={this.props.id}
        className="map-tag"
        style={{position: "absolute",
               top: `${y}%`,
      	       left: `${x}%`}}>
               <TagIcon type={this.props.data.type} />

      </div>
    );
  }
}

export default Tag;
