import React from 'react'
import { render } from '@testing-library/react'
import CardBranchOffice from '.'

describe('CardBranchOffice component behavior', () => {

  test('should be rendered', () => {
    const component = render(<CardBranchOffice/>)
    expect(component).toBeTruthy()
  })

  test('should be rendered with the proper texts', () => {
    const component = render(
      <CardBranchOffice
        name='Name of branch office'
        address='Address branch office'
        attentionSchedule={[
          {
            schedule: 'Lunes a Domigo: 09:00 Hrs a 16:00 Hrs'
          },
          {
            schedule: 'Sabado a Domigo: 09:00 Hrs a 12:00 Hrs'
          }
        ]}
      />
    )
    expect(component.getByText(/Name of branch office/)).toBeTruthy()
    expect(component.getByText('Address branch office')).toBeTruthy()
    expect(component.getByText('Lunes a Domigo: 09:00 Hrs a 16:00 Hrs')).toBeTruthy()
    expect(component.getByText('Sabado a Domigo: 09:00 Hrs a 12:00 Hrs')).toBeTruthy()
  })
})
