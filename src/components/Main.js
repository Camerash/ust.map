import React, { Component } from 'react';
import '../styles/Main.css';
import { Label } from 'semantic-ui-react';
import SearchBar from './SearchBar';
import Layers from './Layers';
import Nav from './Nav';

class Main extends Component {
  constructor(props) {
    super(props);
    this.onClickAllFloors = this.onClickAllFloors.bind(this);
    this.onClickUpFloor = this.onClickUpFloor.bind(this);
    this.onClickDownFloor = this.onClickDownFloor.bind(this);
    this.onFloorClick = this.onFloorClick.bind(this);
    this.onSearchResultClick = this.onSearchResultClick.bind(this);
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

  onClickUpFloor() {

  }

  onClickDownFloor() {

  }

  onFloorClick(name) {
    var buildingName = "";
    var floorName = "";
    var floorArr = name.split("-");
    switch(floorArr[0]) {
      case "ac":
        buildingName = "Academic Building";
        break;
      default:
    }
    floorName = floorArr[1].toUpperCase();

    var displayName = `${buildingName} - Floor ${floorName}`
    this.setState({
      floorFocus: true,
      floorName: displayName
    });
  }

  onSearchResultClick(id) {
    this.layerRef.onSearch(id);
  }

  render() {
    return (
      <div className="container">
        <div className="main">
          <div className="searchBar"><SearchBar onSearchResultClick={this.onSearchResultClick} /></div>
          <Layers ref={(layerRef) => { this.layerRef = layerRef; }} onFloorClick={this.onFloorClick}/>
          <Nav focusing={this.state.floorFocus} onClickAllFloors={this.onClickAllFloors} onClickUpFloor={this.onClickUpFloor} onClickDownFloor={this.onClickDownFloor}/>
          <div className="floorLabel" style={{ opacity: `${this.state.floorFocus ? 1 : 0}` }}>
            <Label className="floorLabelText" size="huge">{this.state.floorName}</Label>
          </div>
        </div>
        <div className="routePanel">
        </div>
      </div>
    );
  }
}

export default Main;
