import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import BarGraph from '../../components/Graphs/BarGraphs/BarGraph';

configure({ adapter: new Adapter() });

describe('BarGraph', () => {
it('should mount Header component', () => {
    const wrapper = shallow(<BarGraph />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})