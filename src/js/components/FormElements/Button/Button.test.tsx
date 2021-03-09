import React from "react";
import "babel-polyfill";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import Button from "./Button";

Enzyme.configure({ adapter: new Adapter() });

it("Button renders  ", () => {
  const wrapper = shallow(<Button />);
  expect(wrapper.find("button").length).toBe(1);
});

it("Button renders loading  ", () => {
  const wrapper = shallow(<Button loading={true} />);
  expect(wrapper.find("button").first().hasClass("loading")).toBe(true);
});

it("Button renders disbaled  ", () => {
  const wrapper = shallow(<Button disabled={true} />);
  expect(wrapper.find("button").hasClass("disabled")).toBe(true);
});

it("Button renders custom class  ", () => {
  const wrapper = shallow(<Button className="hi" />);
  expect(wrapper.find("button").hasClass("hi")).toBe(true);
});
