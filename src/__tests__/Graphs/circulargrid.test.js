import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Circulargridcharts from '../../components/Graphs/circulargridlinechart';

configure({ adapter: new Adapter() });

describe('Circulargridcharts', () => {
it('should mount circulargrid component', () => {
    const wrapper = shallow(<Circulargridcharts />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})