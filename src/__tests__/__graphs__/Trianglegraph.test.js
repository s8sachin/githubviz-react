import React from 'react';
import { shallow,  configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import TriangleGraph from '../../components/Graphs/TriangleGraphs/TriangleGraph';

configure({ adapter: new Adapter() });

describe('TriangleGraph', () => {
it('should mount Header component', () => {
    const wrapper = shallow(<TriangleGraph />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})