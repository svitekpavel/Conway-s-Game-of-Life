import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import GridCell from '../GridCell';

chai.use(chaiEnzyme());

describe('<GridCell />', () => {
  it('should have exactly one span with className=\'cell\'', () => {
    const wrapper = shallow(<GridCell cell={0}/>);
    const node = wrapper.find('span');

    expect(node).to.have.length(1);
    expect(node).to.have.className('cell');
  });

  it('with cell={1} should have className \'live\'', () => {
    const wrapper = shallow(<GridCell cell={1}/>);
    const node = wrapper.find('span');

    expect(node).to.have.className('live');
  });

  it('with cell={0} should not have className \'live\'', () => {
    const wrapper = shallow(<GridCell cell={0}/>);
    const node = wrapper.find('span');

    expect(node).to.not.have.className('live');
  });
});
