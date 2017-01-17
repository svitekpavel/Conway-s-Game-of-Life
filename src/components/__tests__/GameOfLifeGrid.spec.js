import React from 'react';
import { shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme'

import GameOfLifeGrid from '../GameOfLifeGrid';
import GridCell from '../GridCell';

chai.use(chaiEnzyme())

describe('<GameOfLifeGrid />', () => {
  const epoch = [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ];

  it('should have exactly 1 div with className=\'grid\'', () => {
    const wrapper = shallow(<GameOfLifeGrid epoch={epoch}/>);
    const node = wrapper.find('.grid');

    expect(node).to.have.length(1);
  });

  it('should have exactly 3 divs with className \'rows\'', () => {
    const wrapper = shallow(<GameOfLifeGrid epoch={epoch}/>);
    const nodes = wrapper.find('.row');

    expect(nodes).to.have.length(3);
  });

  it('should have exactly 9 GridCell components', () => {
    const wrapper = shallow(<GameOfLifeGrid epoch={epoch}/>);
    const nodes = wrapper.find(GridCell);

    expect(nodes).to.have.length(9);
  });
});
