import React from 'react';
import { shallow,  configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import PlotGraph from '../../components/Graphs/PlotGraphs/PlotGraph';

configure({ adapter: new Adapter() });

describe('PlotGraph', () => {
it('should mount Header component', () => {
    const wrapper = shallow(<PlotGraph />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})