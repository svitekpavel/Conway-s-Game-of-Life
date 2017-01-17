import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import AboutPage from './AboutPage';

describe('<AboutPage />', () => {
  it('should have a header called \'Pavel Svitek\'', () => {
    const wrapper = shallow(<AboutPage />);
    const actual = wrapper.find('h1').text();

    expect(actual).to.equal('Pavel Svitek');
  });

  it('should have a sidebar div with \'sidebar\' class', () => {
    const wrapper = shallow(<AboutPage />);
    const actual = wrapper.find('div.sidebar');

    expect(actual).to.have.length(1);
  });

  it('should have 5 paragraphs', () => {
    const wrapper = shallow(<AboutPage />);
    const actual = wrapper.find('p');

    expect(actual).to.have.length(5);
  });
});
