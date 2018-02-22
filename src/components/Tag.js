import React, { Component } from 'react';
import { Label, Popup, Icon } from 'semantic-ui-react'
import '../styles/Tag.css';

const typeMap = {
  "escalator":""
}

class Tag extends Component {

  render() {
    let tag = null;
    switch(this.props.data.type) {
      case "lift":
        tag = <Label className="tag-icon" circular color="teal">{this.props.data.name.replace("LIFT ", "")}</Label>
        break;
      case "male toilet":
        tag = <Icon className="tag-icon" circular inverted color="blue" name="male"/>
        break;
      case "female toilet":
        tag = <Icon className="tag-icon" circular inverted color="pink" name="female"/>
        break;
      default:
        tag = <Icon className="tag-icon" circular name="heart"/>
    }

    let x = (((this.props.data.x) / this.props.width) * 100);
    let y = (((this.props.data.y) / this.props.height) * 100);

    return (
      <div
        id={this.props.id}
        className="map-tag"
        style={{position: "absolute", top: `${y}%`, left: `${x}%`}}>

          <Popup trigger={<div className="tag-container">{tag}</div>} content={this.props.data.name} position='top center' on={['hover', 'click']}/>

      </div>
    );
  }
}

export default Tag;
