import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';
import setupTest from '../setupTests'

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
