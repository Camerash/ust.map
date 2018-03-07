import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import '../styles/Nav.css'
import floors from '../assets/Floors.json';

class LevelNav extends Component {

  render() {
    var floorArr = [];
    Object.keys(floors).forEach(function(key) {
      floorArr.push(floors[key]);
    });

    return (
      <div className='nav' style={{ opacity: `${this.props.focusing ? 0 : 1}`, pointerEvents: `${this.props.focusing ? "none" : "auto"}` }}>
        <Button.Group vertical >
          {floorArr.map(item => <Button className='button-style' key={item.id} onClick={ () => { this.props.onLevelNavClick(item.id) }}>{item.name}</Button>)}
        </Button.Group>
      </div>
    );
  }
}

export default LevelNav;
