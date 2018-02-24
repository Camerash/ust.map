import React, { Component } from 'react';
import InlineSVG from 'react-inlinesvg';
import '../styles/Layers.css';
import '../styles/Floor.css';
import floors from '../assets/Floors.json';
import Drag from './DragAndZoom';
import { AC_7, AC_6, AC_5, AC_4, AC_3, AC_2, AC_1, AC_G, AC_LG1, AC_LG3, AC_LG4, AC_LG5, AC_LG7 } from '../components/svg/Floors'

const floorMap = {
  "ac-7": AC_7,
  "ac-6": AC_6,
  "ac-5": AC_5,
  "ac-4": AC_4,
  "ac-3": AC_3,
  "ac-2": AC_2,
  "ac-1": AC_1,
  "ac-g": AC_G,
  "ac-lg1": AC_LG1,
  "ac-lg3": AC_LG3,
  "ac-lg4": AC_LG4,
  "ac-lg5": AC_LG5,
  "ac-lg7": AC_LG7
}

const animDuration = 1000;

class Floor extends Component {

  generateFloor(data, onClick, selected) {
    console.log(data.id)
    const floor = floorMap[data.id];
    return React.createElement(floor, {id:data.id, onClick:onClick, selected:selected, animDuration: animDuration, scale: selected ? data.scale : 1});
  }

  render() {
    return (
      <div
      className={`floor ${this.props.selected ? this.props.data.id : '' } ${!this.props.selected && this.props.inFocus ? 'floor-hidden' : '' }`}
        style={{WebkitTransform: `translateZ(${this.props.data.z}vmin)`,
      	       Transform: `translateZ(${this.props.data.z}vmin)`}}>
        {this.generateFloor(this.props.data, this.props.onClick, this.props.selected)}
      </div>
    );
  }
}

class Layers extends Component {
  constructor(props) {
    super(props);
    var stateMap = new Map();
    Object.keys(floors).forEach(function(key) {
      stateMap.set(floors[key].id, false);
    });
    this.state = {
      floorSelected: stateMap,
      inFocus: false
    }
    this.onFloorClick = this.onFloorClick.bind(this);
    this.showAllFloor = this.showAllFloor.bind(this);
  }

  showAllFloor() {
    if(!this.state.inFocus) return;
    var stateMap = this.state.floorSelected;
    Object.keys(floors).forEach(function(key) {
      stateMap.set(floors[key].id, false);
    });
    this.setState({
      floorSelected: stateMap,
      inFocus: false
    });
  }

  onFloorClick(id) {
    if(this.state.inFocus) return;
    var stateMap = this.state.floorSelected;
    stateMap.set(id, true);
    this.setState({
      floorSelected: stateMap,
      inFocus: true
    });
    this.props.onFloorClick(id);
  }

  render() {
    var floorArr = [];
    Object.keys(floors).forEach(function(key) {
      floorArr.push(floors[key]);
    });

    return (
      <Drag zoomStep={20} maxZoom={200} minZoom={100} active={this.state.inFocus}>
        <div className='maps'>
          <div className='layers' style={{
              WebkitTransform: `rotateX(65deg) rotateY(-3deg) translateZ(-20vmin) rotateZ(${this.state.inFocus ? '-10' : '-25'}deg)`,
              Transform: `rotateX(65deg) rotateY(-3deg) translateZ(-20vmin) rotateZ(${this.state.inFocus ? '-10' : '-25'}deg)`
            }}>
            {floorArr.map(item => <Floor key={item.id} data={item} inFocus={this.state.inFocus} selected={this.state.floorSelected.get(item.id)} onClick={this.onFloorClick} />)}
          </div>
        </div>
      </Drag>
    );
  }
}

export default Layers;
