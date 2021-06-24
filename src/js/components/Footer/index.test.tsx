import React from "react";
import "babel-polyfill";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import Footer from "./index";

Enzyme.configure({ adapter: new Adapter() });

it("Accordion renders  ", () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.find("footer").length).toBe(1);
});

/*
it("Accordion renders loading  ", () => {
  const wrapper = shallow(<Accordion loading={true} />);
  expect(wrapper.find("button").first().hasClass("loading")).toBe(true);
});

it("Accordion renders disbaled  ", () => {
  const wrapper = shallow(<Accordion disabled={true} />);
  expect(wrapper.find("button").hasClass("disabled")).toBe(true);
});

it("Accordion renders custom class  ", () => {
  const wrapper = shallow(<Accordion className="hi" />);
  expect(wrapper.find("button").hasClass("hi")).toBe(true);
});
*/
