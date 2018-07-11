import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import SimpleRadialChart from '../../components/Graphs/simpleradial';

configure({ adapter: new Adapter() });

describe('SimpleRadialChart', () => {
it('should mount simpleradialchart component', () => {
    const wrapper = shallow(< SimpleRadialChart />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})