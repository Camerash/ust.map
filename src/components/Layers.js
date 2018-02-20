import React, { Component } from 'react';
import InlineSVG from 'react-inlinesvg';
import '../styles/Layers.css';
import '../styles/Floor.css';
import floors from '../assets/Floors.json'
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

class Floor extends Component {

  generateFloor(name) {
    console.log(name)
    const floor = floorMap[name];
    return React.createElement(floor, {});
  }

  render() {
    return (
      <div
        className='floor'
        style={{WebkitTransform: `translateZ(${this.props.data.z}vmin)`,
      	       Transform: `translateZ(${this.props.data.z}vmin)`}}>
        {this.generateFloor(this.props.data.id)}
      </div>
    );
  }
}

class Layers extends Component {
  render() {
    var floorArr = [];
    Object.keys(floors).forEach(function(key) {
      floorArr.push(floors[key]);
    });

    return (
      <div className='maps'>
        <div className='layers'>
          {floorArr.map(item => <Floor key={item.id} data={item} />)}
        </div>
      </div>
    );
  }
}

export default Layers;
