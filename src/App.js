import React, { Component } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

import './App.css';

class ColoredRect extends Component {
  state = {
    color: 'green',
  };
  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor(),
    });
  };
  render() {
    return (
      <Rect
        x={20}
        y={20}
        width={50}
        height={50}
        fill={this.state.color}
        draggable
        onClick={this.handleClick}
      />
    );
  }
}

class App extends Component {
  render() {
    // Stage is a div container
    // Layer is actual canvas element (so you may have several canvases in the stage)
    // And then we have canvas shapes inside the Layer
    return (
      <div
        style={{
          width: '80vw',
          height: '80vh',
          margin: '0 auto',
          border: '1px solid black',
        }}
      >
        <Stage width={window.innerWidth * 0.8} height={window.innerHeight * 0.8}>
          <Layer>
            <Text text="Try click on rect" />
            <ColoredRect />
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default App;
