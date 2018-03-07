import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import '../styles/Nav.css'

class Nav extends Component {

  render() {
    return (
      <div className='nav' style={{ opacity: `${this.props.focusing ? 1 : 0}`}}>
        <Button.Group vertical>
          <Button className='button-style' size='huge' icon='caret up' onClick={this.props.onClickUpFloor}/>
          <Button className='button-style' primary size='huge' icon='map' onClick={this.props.onClickAllFloors}/>
          <Button className='button-style' size='huge' icon='caret down' onClick={this.props.onClickDownFloor}/>
        </Button.Group>
      </div>
    );
  }
}

export default Nav;
