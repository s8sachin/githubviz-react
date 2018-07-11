import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Markserieschart from '../../components/Graphs/markseries';

configure({ adapter: new Adapter() });

describe('Markserieschart', () => {
it('should mount markseries component', () => {
    const wrapper = shallow(< Markserieschart />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})