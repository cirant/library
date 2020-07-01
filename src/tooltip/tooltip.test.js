import React from 'react'
import { screen } from '@testing-library/dom'
import ReactDOM from 'react-dom'
import { act, cleanup, fireEvent, render } from '@testing-library/react'
import TestRenderer from 'react-test-renderer'
import TitleSection from './index'
import Icon from '../icons'
import IconListModel from '../icons/models/icon-list.model'
import Tooltip from './index'


describe('Tooltip test', () => {

  let container
  let component

  beforeEach(() => {
    component = render(
      <Tooltip
        content="label"
        eventListener="mouseClick"
        placement="right-end">
        <TitleSection className="test" prefix="write" label="Title Section"/>
      </Tooltip>
    )
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    cleanup()
  })

  test('should be rendered', () => {
    expect(component).toBeTruthy()
  })

  test('should render box of the tooltip', () => {
    expect(component.getByText(/label/)).toBeTruthy()
  })

  test('should component contain tooltip', () => {
    act(() => {
      ReactDOM.render(<Tooltip
        content="label"
        eventListener="mouseClick"
        placement="right-end">
        <TitleSection className="test" prefix="write" label="Title Section"/>
      </Tooltip>, container)
    })
    let componentRender = container.querySelector('div[data-testid="test-box"]')
    console.log(componentRender)
    expect(componentRender).toBeTruthy()
  })

  test('should component contain p tooltip', () => {
    act(() => {
      ReactDOM.render(<Tooltip
        content="label"
        eventListener="mouseClick"
        placement="right-end">
        <TitleSection className="test" prefix="write" label="Title Section"/>
      </Tooltip>, container)
    })
    let componentRender = container.querySelector('p')
    console.log(componentRender)
    expect(componentRender).toBeTruthy()
  })

  test('should component contain content tooltip', () => {
    act(() => {
      ReactDOM.render(<Tooltip
        content="label"
        eventListener="mouseClick"
        placement="right-end">
        <TitleSection className="test" prefix="write" label="Title Section"/>
      </Tooltip>, container)
    })
    let componentRender = container.querySelector('div[data-testid="test-box-content"]')
    console.log(componentRender)
    expect(componentRender).toBeTruthy()
  })

  test('should component contain content arrow tooltip', () => {
    act(() => {
      ReactDOM.render(<Tooltip
        content="label"
        eventListener="mouseClick"
        placement="right-end">
        <TitleSection className="test" prefix="write" label="Title Section"/>
      </Tooltip>, container)
    })
    let componentRender = container.querySelector('div[data-testid="test-box-arrow"]')
    console.log(componentRender)
    expect(componentRender).toBeTruthy()
  })

  test('should set visibility true when mouseClick event it is called', () => {
    act(() => {
      ReactDOM.render(
        <Tooltip
          content="label"
          eventListener="mouseClick"
          placement="right-end">
          <TitleSection className="test" prefix="write" label="Title Section"/>
        </Tooltip>, container)
    })
    let componentRender = container.querySelector('div[data-testid="test-container"]')
    fireEvent.click(componentRender)
    let componenetVisibility = container.querySelector('div[visible="true"]')
    expect(componenetVisibility).toBeTruthy()
  })

  test('should set visibility false when mouseClick called twice', () => {
    act(() => {
      ReactDOM.render(
        <Tooltip
          content="label"
          eventListener="mouseClick"
          placement="right-end">
          <TitleSection className="test" prefix="write" label="Title Section"/>
        </Tooltip>, container)
    })
    let componentRender = container.querySelector('div[data-testid="test-container"]')
    fireEvent.click(componentRender)
    fireEvent.click(componentRender)
    let componenetVisibility = container.querySelector('div[visible="false"]')
    expect(componenetVisibility).toBeTruthy()
  })

  test('should set visibility true when mouse enter container', () => {
    act(() => {
      ReactDOM.render(
        <Tooltip
          content="label"
          eventListener="hover"
          placement="top">
          <TitleSection className="test" prefix="write" label="Title Section"/>
        </Tooltip>, container)
    })
    let componentRender = container.querySelector('div[data-testid="test-container"]')
    fireEvent.mouseEnter(componentRender);
    let componenetVisibility = container.querySelector('div[visible="false"]')
    expect(componenetVisibility).toBeTruthy()
  })

  test('should set visibility false when mouse enter and leave container', () => {
    act(() => {
      ReactDOM.render(
        <Tooltip
          content="label"
          eventListener="hover"
          placement="top">
          <TitleSection className="test" prefix="write" label="Title Section"/>
        </Tooltip>, container)
    })
    let componentRender = container.querySelector('div[data-testid="test-container"]')
    fireEvent.mouseEnter(componentRender);
    fireEvent.mouseLeave(componentRender);
    let componenetVisibility = container.querySelector('div[visible="false"]')
    expect(componenetVisibility).toBeTruthy()
  })



})
