import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

const props = {
  title: 'my-button',
  onPressed: jest.fn(),
};
describe('Button Component', () => {
  it('should match its snapshot', () => {
    const wrapper = shallow(<Button {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
  // trigger
  it('should trigger onPressed', () => {
    const wrapper = shallow(<Button {...props} />);

    wrapper.find('button').prop('onClick')();

    expect(props.onPressed).toHaveBeenCalled();
  });
});
