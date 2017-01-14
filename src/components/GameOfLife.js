import React from 'react';

import GameOfLifeGrid from './GameOfLifeGrid';

class GameOfLife extends React.Component {
  render() {
    return (
      <div>
        <div className="">
          <button onClick={this.props.onStartEvolution}>Start evolution</button>
          <button onClick={this.props.onStopEvolution}>Stop evolution</button>
        </div>
        <GameOfLifeGrid epoch={this.props.epoch}/>
      </div>
    );
  }
}

GameOfLife.propTypes = {
  epoch: React.PropTypes.array.isRequired,
  onStartEvolution: React.PropTypes.function,
  onStopEvolution: React.PropTypes.function,
};

export default GameOfLife;
