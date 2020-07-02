import React from "react";
import { cleanup, fireEvent, render } from '@testing-library/react'
import TestRenderer from 'react-test-renderer';
import Icon from "../icons";
import IconListModel from "../icons/models/icon-list.model";
import ContentAction from './index'


describe('ContentActions tests', () => {

  let componentContainter;
  const onClick = jest.fn();

  beforeEach(() => {

    componentContainter = render(
      <ContentAction label="Imprimir" onClick={onClick} icon="line-print">
      </ContentAction>
    );
  })

  afterEach(() => {
    cleanup()
  })

  test('should be rendered', () => {
    expect(componentContainter).toBeTruthy();
  });

  test('should component contain label', () => {

    expect(componentContainter.getAllByText(/Imprimir/)).toBeTruthy();

  });

  test('should click event must call from container', () => {
    fireEvent.click(componentContainter.container.querySelector('div[data-testid="test-container-content-action"]'));
    expect(onClick).toBeCalled();

  });

  test('should be disabled', () => {
    const component = render( <ContentAction label="Imprimir" disabled onClick={()=> console.log('acción')} icon="line-print"></ContentAction>);
    const element = component.container.querySelector('div[data-testid="test-container-content-action"]');
    expect(element.closest('div').className).toBe('contentAction disabled');
  });

  test('should component contain icon component', () => {

    const testRenderer = TestRenderer.create(<ContentAction label="Imprimir" onClick={()=> console.log('acción')} icon="line-print"></ContentAction>);
    const testInstance = testRenderer.root;
    expect(testInstance.findByType(Icon)).toBeTruthy()

  });


  test('should component have a valid icon', () => {

    const testRenderer = TestRenderer.create(<ContentAction label="Imprimir" onClick={()=> console.log('acción')} icon="line-print"></ContentAction>);
    const testInstance = testRenderer.root;

    const iconName = testInstance.props.prefix;

    const findValue = IconListModel.iconList.find(data => iconName == data);

    expect(testInstance.props.prefix).toBe(findValue);

  });


});
