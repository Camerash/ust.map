import React, { Component } from 'react';
import '../styles/Main.css';
import { Label } from 'semantic-ui-react';
import Layers from './Layers';
import Nav from './Nav';

class Main extends Component {
  constructor(props) {
    super(props);
    this.onClickAllFloors = this.onClickAllFloors.bind(this);
    this.onFloorClick = this.onFloorClick.bind(this);
    this.state = {
      floorFocus: false,
      floorName: ""
    }
  }

  onClickAllFloors() {
    this.setState({
      floorFocus: false,
    });
    setTimeout(() => {this.setState({floorName: ""})}, 1000);
    this.layerRef.showAllFloor();
  }

  onFloorClick(name) {
    var buildingName = "";
    var floorName = "";
    var floorArr = name.split("-");
    switch(floorArr[0]) {
      case "ac":
        buildingName = "Academic Building";
        break;
    }
    floorName = floorArr[1].toUpperCase();

    var displayName = `${buildingName} - Floor ${floorName}`
    this.setState({
      floorFocus: true,
      floorName: displayName
    });
  }

  render() {
    return (
      <div className='main'>
        <Layers ref={(layerRef) => { this.layerRef = layerRef; }} onFloorClick={this.onFloorClick}/>
        <Nav onClickAllFloors={this.onClickAllFloors}/>
        <div className="floorLabel" style={{ opacity: `${this.state.floorFocus ? 1 : 0}` }}>
          <Label className="floorLabelText" size="huge">{this.state.floorName}</Label>
        </div>
      </div>
    );
  }
}

export default Main;
