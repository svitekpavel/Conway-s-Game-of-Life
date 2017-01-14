import React from 'react';

import GameOfLifeGrid from './GameOfLifeGrid';
import getNextEpoch from '../utils/getNextEpoch';
// import createGrid from '../utils/createGrid';

const initialGrid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

class GameOfLifePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      grid: initialGrid,
      // grid: createGrid(50, 50),
    };
  }
  componentDidMount() {
    // start the evolution here
    this.evolutionInterval = setInterval(() => {
      this.setState({
        grid: getNextEpoch(this.state.grid),
      });
    }, 500);
  }
  componentWillUnmount() {
    clearInterval(this.evolutionInterval);
  }

  render() {
    return (
      <div>
        <div className="">
          <button onClick={this.props.onStartEvolution}>Start evolution</button>
          <button onClick={this.props.onStopEvolution}>Stop evolution</button>
        </div>
        <GameOfLifeGrid epoch={this.state.grid}/>
      </div>
    );
  }
}

GameOfLifePage.propTypes = {
  onStartEvolution: React.PropTypes.function,
  onStopEvolution: React.PropTypes.function,
};

export default GameOfLifePage;
