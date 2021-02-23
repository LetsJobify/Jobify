import React from 'react';
import { expect } from 'chai';
import { configure, shallow, mount } from 'enzyme';

import Nav from '../src/components/Nav';
import { it } from 'date-fns/locale';

configure({ adapter: new Adaper() });

describe('React unit tests.', () => {
  describe('The user navbar.', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(<Nav />);

      it('Renders a <div> tag', () => {
        expect(wrapper.type()).toEqual('div');
      }
      
    });


  });
});
