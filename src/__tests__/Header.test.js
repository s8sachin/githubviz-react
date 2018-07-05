import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Header from '../components/commons/Header';
import Root from '../components/Root';
import LocalStorageMock from '../LocalStorageMock';
import { Link } from 'react-router';
import PieCharts from '../components/piecharts';

global.localStorage = new LocalStorageMock;


configure({ adapter: new Adapter() });

describe('Header', () => {
it('should mount Header component', () => {
    const wrapper = shallow(<Header />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })
   it("should click create github viz link", () => {
    const wrapper = mount(<Header />)
    // console.log(wrapper.instances());
    // expect(wrapper.instances().props.name).toBe('Header');
    // wrapper.find('abc').simulate('click');
    const tag = wrapper.find('#abc')
    // console.log(tag.simulate('click'))
    const output= tag.simulate('click')
    console.log(output)
    console.log(tag)

    // const component = renderer.create(tag.props().onClick)
    const tree = shallow(<Root />)
    expect(toJson(tree)).toMatchSnapshot();
  })

//   it("should click create piechart link", () => {
//     const wrapper = mount(<Header />)
//     const tag1 = wrapper.find('#my_id')
//     // tag1.simulate('click')
//     // const tree1 = shallow(<PieCharts />)
//     // expect(toJson(tree1)).toMatchSnapshot();
//   })





   it("should click create piechart link", () => {
    const wrapper = shallow(<Header />)
    const button = wrapper.find('Navbar').find('Navbar.Collapse').find('Nav').find('NavItem').first()
    // const component = renderer.create(button.props().onClick)
    // let tree = component.toJSON();
    // tree.props.onClick();
    // expect(tree).toMatchSnapshot();
  })



//   it("should click create a allgraph ", () => {
//     const wrapper = shallow(<Header />)
//    console.log(wrapper.instances());
//     // const Button = wrapper.find('Navbar').find('Nav').first().find('Button')
//     const Button = wrapper.find('my_id')
    
//     console.log(Button);
    // const component = renderer.create(card.props().link)
  //   let tree = component.toJSON();
  //   tree.props.onClick();
  //   expect(tree).toMatchSnapshot();
//   })

// it("should click create github viz link", () => {
//     const wrapper = render(<Header />)
//     // console.log(wrapper.instances());
//     // expect(wrapper.instances().props.name).toBe('Header');
//     // const tag = wrapper.find('Navbar').find('Navbar.Brand').first().find('a')
//     // const component = renderer.create(tag.props().href)
//     expect(wrapper.find(Link).props().to).toBe('/Header');
//     let tree = component.toJSON();
//     tree.props.onClick();
//     expect(tree).toMatchSnapshot();
//   })



// it("should click create github viz link", () => {
//     const wrapper = mount(<Header />)
//     // console.log(wrapper.instances());
//     // expect(wrapper.instances().props.name).toBe('Header');
//     // wrapper.find('abc').simulate('click');
//     const tag = wrapper.find('#abc')
//     tag.simulate('click')
//     // const component = renderer.create(tag.props().href)
//     // let tree = component.toJSON();
//     // tree.props.onClick();
//     expect(tag).toMatchSnapshot();
//   })
})