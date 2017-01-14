import React from 'react';
import { connect } from 'react-redux';

import GameOfLife from '../components/GameOfLife';
import {
  setEpoch,
  setEvolutionRunning,
} from '../actions/gameOfLifeActions';
import getNextEpoch from '../utils/getNextEpoch';

class GameOfLifePage extends React.Component {
  constructor(props) {
    super(props);
    this.handleStartEvolution = this.handleStartEvolution.bind(this);
    this.handleStopEvolution = this.handleStopEvolution.bind(this);
  }
  componentDidMount() {
    // init epoch here
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
  evolutionRunning: React.PropTypes.bool,
  dispatch: React.PropTypes.function,
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
