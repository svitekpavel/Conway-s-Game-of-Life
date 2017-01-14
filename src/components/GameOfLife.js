import React from 'react';

import GameOfLifeGrid from './GameOfLifeGrid';

class GameOfLife extends React.Component {
  render() {
    const { epoch, evolutionRunning } = this.props;
    return (
      <div>
        <div className="">
          {!evolutionRunning && <button onClick={this.props.onStartEvolution}>Start evolution</button>}
          {evolutionRunning && <button onClick={this.props.onStopEvolution}>Stop evolution</button>}
        </div>
        <GameOfLifeGrid epoch={epoch}/>
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
