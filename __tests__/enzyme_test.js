import React from 'react';
import { expect } from 'chai';
import { configure, shallow, mount } from 'enzyme';

import Nav from '../src/components/Nav';
import { it } from 'date-fns/locale';

configure({ adapter: new Adaper() });

describe('The user navbar.', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Nav bar='bar' />);
  });

  it('Allows us to set props.', () => {
    expect(wrapper.props().bar).to.equal('bar');
  });

  // it('Renders a <div> tag', () => {
  //   expect(wrapper.type()).toEqual('div');
  // });
});
