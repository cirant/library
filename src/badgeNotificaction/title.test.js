import React from "react";
import { render } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import TitleSection from "./index";
import Icon from "../icons";
import IconListModel from "../icons/models/icon-list.model";


describe('Title tests', () => {

  test('should be rendered', () => {
    const component = render(<TitleSection label="Text" prefix="write" />);
    expect(component).toBeTruthy();
  });

  test('should component contain titleContainer css class', () => {

    const testRenderer = TestRenderer.create(<TitleSection className="test" prefix="write" label="Title Section" />);
    const resultClass = 'titleContainer';

    const testJSON = testRenderer.toJSON();

    expect(testJSON.props.className.toString()).toBe(resultClass.toString());

  });

  test('should component contain default props prefix and label', () => {

    const testRenderer = TestRenderer.create(<TitleSection />);
    const testInstance = testRenderer.root;

    expect(testInstance.props.prefix).toBeTruthy();
    expect(testInstance.props.label).toBe("");

  });

  test('should component contain icon component', () => {

    const testRenderer = TestRenderer.create(<TitleSection prefix="write" label="Title Section" />);
    const testInstance = testRenderer.root;

    expect(testInstance.findByType(Icon)).toBeTruthy()

  });

  test('should component contain expect label', () => {

    const expectLabel = "Text";

    const component = render(<TitleSection label="Text" prefix="write" />);

    const findTest = component.queryAllByText(expectLabel);

    expect(findTest.length > 0).toBeTruthy();

  });

  test('should component have a valid icon', () => {

    const testRenderer = TestRenderer.create(<TitleSection prefix="write" label="Title Section" />);
    const testInstance = testRenderer.root;

    const iconName = testInstance.props.prefix;

    const findValue = IconListModel.iconList.find(data => iconName == data);

    expect(testInstance.props.prefix).toBe(findValue);

  });


});
