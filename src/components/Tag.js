import React, { Component } from 'react';
import { Popup, Icon } from 'semantic-ui-react'
import '../styles/Tag.css';

class TagIcon extends Component {
  render() {
    return (
      <Icon className="tag" circular name="heart"/>
    );
  }
}

class Tag extends Component {

  render() {
    let x = (((this.props.data.x) / this.props.width) * 100);
    let y = (((this.props.data.y) / this.props.height) * 100);

    return (
      <div
        id={this.props.id}
        className="map-tag"
        style={{position: "absolute",
               top: `${y}%`,
      	       left: `${x}%`}}>
        <Popup
          trigger={<TagIcon type={this.props.data.type} />}
          header={this.props.data.name}/>
      </div>
    );
  }
}

export default Tag;
