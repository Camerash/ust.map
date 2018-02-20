import React, { Component } from 'react';
import { Segment, Divider, Button } from 'semantic-ui-react';
import '../styles/Nav.css'

class Nav extends Component {

  render() {
    return (
      <div className='nav'>
        <Button.Group vertical>
          <Button size='huge' icon='caret up'/>
          <Button primary size='huge' icon='map' onClick={this.props.onClickAllFloors}/>
          <Button size='huge' icon='caret down'/>
        </Button.Group>
      </div>
    );
  }
}

export default Nav;
