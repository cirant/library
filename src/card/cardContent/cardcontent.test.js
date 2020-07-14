import React from 'react'
import { render } from '@testing-library/react'
import CardContent from '.'
import TestRenderer from 'react-test-renderer'
import Bullets from '../../bullets'


describe('Card Content behavior', () => {

  test('should be rendered', () => {
    const component = render(<CardContent> </CardContent>)
    expect(component).toBeTruthy()
  })

  test('should be contain node if have a children', () => {
    const component = render(<CardContent><p>text</p></CardContent>)
    expect(component.getByText(/text/)).toBeTruthy()
  })

  test('should be contain title if it´s defined', () => {
    const component = render(<CardContent title='test'></CardContent>)
    expect(component.getByText(/test/)).toBeTruthy()
  })

  test('should be contain content if it´s defined', () => {
    const component = render(<CardContent content='test content'></CardContent>)
    expect(component.getByText(/test content/)).toBeTruthy()
  })

  test('should be contain bullets if it´s defined', () => {
    const component = render(<CardContent typeList={'unorder'} bullets={[
      {
        text: 'Tipografía Estilos',
        prefixType: 'info',
        type: 'success'
      },
    ]
    }></CardContent>)
    expect(component.getByText(/Tipografía Estilos/)).toBeTruthy()
  })

  test('should component contain bullet component', () => {

    const testRenderer = TestRenderer.create(<CardContent title='type something' typeList='unorder' bullets={[
      {
        text: 'Tipografía / Estilos',
        type: 'success'
      },
      {
        text: 'Tipografía / Estilos',
        type: 'success'
      },
      {
        text: 'Tipografía / Estilos',
        type: 'success'
      }
    ]
    }>
    </CardContent>);
    const testInstance = testRenderer.root;
    expect(testInstance.findByType(Bullets)).toBeTruthy()

  });


})
