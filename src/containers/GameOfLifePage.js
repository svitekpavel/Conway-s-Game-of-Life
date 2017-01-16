import React from 'react';
import { connect } from 'react-redux';

import GameOfLife from '../components/GameOfLife';
import {
  setEpoch,
  setEvolutionRunning,
} from '../actions/gameOfLifeActions';
import getNextEpoch from '../utils/getNextEpoch';
import createGrid from '../utils/createGrid';
import gridInsertPattern from '../utils/gridInsertPattern';

class GameOfLifePage extends React.Component {
  constructor(props) {
    super(props);
    this.handleStartEvolution = this.handleStartEvolution.bind(this);
    this.handleStopEvolution = this.handleStopEvolution.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    // create grid and insert some nice patterns
    let epoch = createGrid(38, 30);

    // add simple glider and one Lightweight spaceship (LWSS)
    epoch = gridInsertPattern('glider', epoch, 15, 7);
    epoch = gridInsertPattern('lwss', epoch, 0, 5);

    // add static blocks to top rows to expose colors
    [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36].map((i) => {
      epoch = gridInsertPattern('block', epoch, i, 0);
    });

    // add nice blinkers to the bottom of the grid
    [0, 4, 8, 12, 16, 20, 24, 28, 32].map((i) => {
      epoch = gridInsertPattern('blinker2', epoch, i+1, 20);
    });

    // add nice beacons to the very bottom of the grid
    [0, 6, 12, 18, 24, 30].map((i) => {
      epoch = gridInsertPattern('beacon', epoch, i+2, 26);
    });

    dispatch(setEpoch(epoch));
  }

  componentWillUnmount() {
    clearInterval(this.evolutionInterval);
  }

  handleStartEvolution() {
    // start the evolution here
    const { dispatch } = this.props;
    dispatch(setEvolutionRunning(true));

    this.evolutionInterval = setInterval(() => {
      const { dispatch, epoch } = this.props;
      const nextEpoch = getNextEpoch(epoch);
      dispatch(setEpoch(nextEpoch));
    }, 500);
  }

  handleStopEvolution() {
    const { dispatch } = this.props;
    dispatch(setEvolutionRunning(false));
    clearInterval(this.evolutionInterval);
  }

  render() {
    return (
      <GameOfLife
        epoch={this.props.epoch}
        evolutionRunning={this.props.evolutionRunning}
        onStartEvolution={this.handleStartEvolution}
        onStopEvolution={this.handleStopEvolution}
        />
    );
  }
}

GameOfLifePage.propTypes = {
  epoch: React.PropTypes.array.isRequired,
  evolutionRunning: React.PropTypes.bool.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    epoch: state.gameOfLife.epoch,
    evolutionRunning: state.gameOfLife.evolutionRunning,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameOfLifePage);
