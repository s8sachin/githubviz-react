import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Piechart from '../../components/Graphs/piechart';

configure({ adapter: new Adapter() });

describe('Piechart', () => {
it('should mount piechart component', () => {
    const wrapper = shallow(<Piechart />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})