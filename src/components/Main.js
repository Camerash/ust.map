import React, { Component } from 'react';
import '../styles/Main.css';
import Layers from './Layers';
import Nav from './Nav';

class Main extends Component {
  constructor(props) {
    super(props);
    this.onClickAllFloors = this.onClickAllFloors.bind(this);
  }

  onClickAllFloors() {
    this.layerRef.showAllFloor();
  }

  render() {
    return (
      <div className='main'>
        <Layers ref={(layerRef) => { this.layerRef = layerRef; }}/>
        <Nav onClickAllFloors={this.onClickAllFloors}/>
      </div>
    );
  }
}

export default Main;
