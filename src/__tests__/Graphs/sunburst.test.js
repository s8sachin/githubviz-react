import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import SunburstWithTooltips from '../../components/Graphs/sunburstchart';

configure({ adapter: new Adapter() });

describe('SunburstWithTooltips', () => {
it('should mount sunburst component', () => {
    const wrapper = shallow(< SunburstWithTooltips />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})