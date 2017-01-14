import React from 'react';
import uuid from 'uuid';

import GridCell from './GridCell';

class GameOfLifeGrid extends React.Component {
  renderRow(row) {
    const rowNodes = row.map((c) => <GridCell cell={c} key={uuid.v4()}/>);
    return <div className="row" key={uuid.v4()}>{rowNodes}</div>;
  }
  renderGrid(grid) {
    return grid.map((r) => this.renderRow(r));
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
