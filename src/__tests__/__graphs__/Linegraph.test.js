import React from 'react';
import { shallow,  configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import LineGraph from '../../components/Graphs/LineGraphs/LineGraph';

configure({ adapter: new Adapter() });

describe('LineGraph', () => {
it('should mount Header component', () => {
    const wrapper = shallow(<LineGraph />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})