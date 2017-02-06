import React from 'react';

import GameOfLifeGrid from './GameOfLifeGrid';

class GameOfLife extends React.Component {
  render() {
    const { epoch, evolutionRunning } = this.props;
    return (
      <div>
        <div className="header">
          <h1>Game of a <span className="colorful">Colorful</span> Life :-)</h1>
          <span>
            Be patient: If you wait long enough, you will see some nice shapes,
            flowers, evolving gliders and part of a heart before the very end
            of the evolution.
          </span>
        </div>
        <div className="toolbar">
          {!evolutionRunning && <button onClick={this.props.onStartEvolution} className="start">Start evolution</button>}
          {evolutionRunning && <button onClick={this.props.onStopEvolution} className="stop">Stop evolution</button>}
          <div>
            Speed: <input type="text" onChange={this.props.onChangeSpeed} value={this.props.speed} />
          </div>
        </div>
        <GameOfLifeGrid epoch={epoch} onGridClick={this.props.onGridClick}/>
      </div>
    );
  }
}

GameOfLife.propTypes = {
  epoch: React.PropTypes.array.isRequired,
  evolutionRunning: React.PropTypes.bool.isRequired,
  onStartEvolution: React.PropTypes.func,
  onStopEvolution: React.PropTypes.func,
};

export default GameOfLife;
