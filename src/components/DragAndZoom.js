import React, { Component } from 'react';
import { number, func, oneOf, shape, string } from 'prop-types';
import Draggable from 'react-draggable';
import '../styles/Drag.css';

const isNegative = n => ((n = +n) || 1 / n) < 0;

const updatePercentageBasedOnScroll = ({ percentage, min, max, step, delta }) => {
  const signedStep = isNegative(delta) ? step : step * -1;
  const newPercentage = percentage + signedStep;
  if (newPercentage > max) return max;
  if (newPercentage < min) return min;
  return newPercentage;
};

class DragAndZoom extends Component {
  static propTypes = {
    zoomStep: number,
    initialZoom: number,
    minZoom: number,
    maxZoom: number,
    onZoom: func,
    onMouseDown: func,
    onDragStart: func,
    onDrag: func,
    onDragStop: func,
    bounds: oneOf([
      shape({ left: number, top: number, right: number, bottom: number }),
      string,
      'parent',
    ]),
  };

  static defaultProps = {
    active: false,
    zoomStep: 0.6,
    initialZoom: 100,
    minZoom: 0,
    maxZoom: Number.MAX_SAFE_INTEGER,
  };

  state = {
    zoom: this.props.initialZoom || 100,
    originX: 50,
    originY: 50,
  };

  handleMouseWheel = e => {
    e.preventDefault();

    if(!this.props.active) return;
    const { minZoom, maxZoom, zoomStep } = this.props;

    const zoom = updatePercentageBasedOnScroll({
      percentage: this.state.zoom,
      min: minZoom,
      max: maxZoom,
      step: zoomStep,
      delta: e.deltaY,
    });

    this.setState({
      zoom,
      originY: this.originCoordinates.y,
      originX: this.originCoordinates.x,
      isScrolling: true,
    });
  };

  handleMouseMove = e => {
    this.setState({ isScrolling: false });

    const { pageX, pageY } = e;
    const relativeX = pageX - this.target.getBoundingClientRect().left;
    const relativeY = pageY - this.target.getBoundingClientRect().top;
    const percentageX = relativeX * 100 / this.target.getBoundingClientRect().width;
    const percentageY = relativeY * 100 / this.target.getBoundingClientRect().height;
    this.originCoordinates = {
      x: percentageX,
      y: percentageY,
    };
  };

  shouldComponentUpdate(nextProps, nextState) {
    if(!nextProps.active) {
      nextState.zoom = 100;
    }
    return true;
  }

  render() {
    var positionProps = null;

    if(!this.props.active) {
      positionProps = { position: {x:0, y:0} };
    }

    const {
      active,
      children,
      initialZoom,
      minZoom,
      maxZoom,
      zoomStep,
      onZoom,
      onMouseDown,
      onDragStart,
      onDrag,
      onDragStop,
      bounds,
      ...other
    } = this.props;

    return (
      <div {...other}>
        <Draggable
          disabled={!active}
          onMouseDown={onMouseDown}
          onStart={onDragStart}
          onDrag={onDrag}
          onStop={onDragStop}
          bounds={bounds}
          {...positionProps}
        >
          <div className="dragContainer" style={{ transition: `transform ${this.props.active ? 0 : 1}s ease-out` }}>
            <div className="dragContainer"
              onWheel={this.handleMouseWheel}
              onMouseMove={this.handleMouseMove}
              ref={node => (this.target = node)}
              style={{
                ...children.props.style,
                pointerEvents: this.props.active ? 'auto' : 'none',
                cursor: this.state.isScrolling ? 'row-resize' : 'move',
                transition: 'transform-origin 0.5s ease-out, transform 0.5s ease-out',
                transform: `scale(${this.state.zoom / 100})`,
                transformOrigin: `${this.state.originX}% ${this.state.originY}%`,
              }}
            >
              {this.props.children}
            </div>
          </div>
        </Draggable>
      </div>
    );
  }
}

export default DragAndZoom;
