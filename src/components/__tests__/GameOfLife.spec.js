import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import GameOfLife from '../GameOfLife';
import GameOfLifeGrid from '../GameOfLifeGrid';

chai.use(chaiEnzyme());

function getShallowedComponent(epoch, evolutionRunning=false) {
  return shallow(
    <GameOfLife
      evolutionRunning={evolutionRunning}
      epoch={epoch}
      />
  );
}

describe('<GameOfLife />', () => {
  const epoch = [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ];

  it('should have exactly 1 div with className=\'header\'', () => {
    const wrapper = getShallowedComponent(epoch, false);
    const node = wrapper.find('.header');

    expect(node).to.have.length(1);
  });

  it('should have exactly 1 div with className=\'toolbar\'', () => {
    const wrapper = getShallowedComponent(epoch, false);
    const node = wrapper.find('.toolbar');

    expect(node).to.have.length(1);
  });

  it('should have exactly 1 button with className=\'start\' and text \'Start evolution\'', () => {
    const wrapper = getShallowedComponent(epoch, false);
    const node = wrapper.find('button');

    expect(node).to.have.className('start');
    expect(node).to.have.text('Start evolution');
  });

  it('should have exactly 1 button with className=\'stop\' and text \'Start evolution\'', () => {
    const wrapper = getShallowedComponent(epoch, true);
    const node = wrapper.find('button');

    expect(node).to.have.className('stop');
    expect(node).to.have.text('Stop evolution');
  });

  it('should have exactly 1 GameOfLifeGrid component', () => {
    const wrapper = shallow(<GameOfLife epoch={epoch}/>);
    const nodes = wrapper.find(GameOfLifeGrid);

    expect(nodes).to.have.length(1);
  });
});
