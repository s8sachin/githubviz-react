import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Donutcharts from '../../components/Graphs/donutchart';

configure({ adapter: new Adapter() });

describe('Donutcharts', () => {
it('should mount donutchart component', () => {
    const wrapper = shallow(<Donutcharts />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})