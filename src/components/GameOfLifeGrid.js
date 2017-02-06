import React from 'react';
import uuid from 'uuid';

import GridCell from './GridCell';

class GameOfLifeGrid extends React.Component {
  renderRow(row, y) {
    const rowNodes = row.map((c, idx) => <GridCell cell={c} y={y} x={idx} onGridClick={this.props.onGridClick} key={uuid.v4()}/>);
    return <div className="row" key={uuid.v4()}>{rowNodes}</div>;
  }
  renderGrid(grid) {
    return grid.map((r, idx) => this.renderRow(r, idx));
  }
  render() {
    const grid = this.renderGrid(this.props.epoch);
    return <div className="grid">{grid}</div>;
  }
}

GameOfLifeGrid.propTypes = {
  epoch: React.PropTypes.array,
};

export default GameOfLifeGrid;
