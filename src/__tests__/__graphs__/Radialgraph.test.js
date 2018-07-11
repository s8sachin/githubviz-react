import React from 'react';
import { shallow,  configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import RadialGraph from '../../components/Graphs/RadialGraphs/RadialGraph';

configure({ adapter: new Adapter() });

describe('RadialGraph', () => {
it('should mount Header component', () => {
    const wrapper = shallow(<RadialGraph />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})