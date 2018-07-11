import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Arcseries from '../../components/Graphs/arcseries';

configure({ adapter: new Adapter() });

describe('Arcseries', () => {
it('should mount arcseries component', () => {
    const wrapper = shallow(<Arcseries />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})