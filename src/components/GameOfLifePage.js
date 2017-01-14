import React from 'react';
import classNames from 'classnames';
// import { Link } from 'react-router';
// import '../styles/about-page.css';

import GridCell from './GridCell';

const gridData = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

class GameOfLifePage extends React.Component {
  componentDidMount() {
    // start the evolution here
  }

  renderRow(row) {
    const rowNodes = row.map((c) => <GridCell cell={c}/>);
    return <div className="row">{rowNodes}</div>;
  }

  renderGrid(grid) {
    return grid.map((r) => this.renderRow(r));
  }

  render() {
    const grid = this.renderGrid(gridData);

    return <div className="grid">{grid}</div>;
  }
}

export default GameOfLifePage;
