import React from 'react'
import { cleanup, render } from '@testing-library/react'
import PlasticCard from './index'

describe('Plastic Card Component behavior', () => {

  let component;

  beforeEach(() => {
    component = render(
      <PlasticCard
        type={'debit'}
        cardNumber={'N° *** *** 6520'}
        cardTitle={'MasterCard Debit'}
        cardType={'Titular'}
        owner={'Ricardo Olivares'}
        state={'Activa'}>
      </PlasticCard>
    )
  })

  afterEach(() => {
    cleanup()
  })

  test('should be rendered', () => {
    expect(component).toBeTruthy()
  })

  test('should component contain expected info', () => {
    expect(component.getByText(/6520/)).toBeTruthy()
    expect(component.getByText(/Titular/)).toBeTruthy()
    expect(component.getByText(/Ricardo Olivares/)).toBeTruthy()
    expect(component.getByText(/Activa/)).toBeTruthy()
    expect(component.getByText(/MasterCard Debit/)).toBeTruthy()
  })

  test('should debit mobile plastic card must be render', () => {
    const testcomponent = render(
      <PlasticCard
        type={'debit'}
        cardNumber={'N° *** *** 6520'}
        cardTitle={'MasterCard Debit'}
        cardType={'Titular'}
        owner={'Ricardo Olivares'}
        state={'Activa'}>
      </PlasticCard>
    )
    expect(testcomponent.getAllByText(/Tarjetas bancarias mobile black/)).toBeTruthy()
  })

  test('should credit mobile plastic card must be render', () => {
    const testcomponent = render(
      <PlasticCard
        type={'credit'}
        cardNumber={'N° *** *** 6520'}
        cardTitle={'MasterCard Debit'}
        cardType={'Titular'}
        owner={'Ricardo Olivares'}
        state={'Activa'}>
      </PlasticCard>
    )
    expect(testcomponent.getAllByText(/Tarjetas bancarias mobile red/)).toBeTruthy()
  })

  test('should credit desktop plastic card must be render', () => {
    const testcomponent = render(
      <PlasticCard
        type={'credit'}
        cardNumber={'N° *** *** 6520'}
        cardTitle={'MasterCard Debit'}
        cardType={'Titular'}
        forceDesktop={true}
        owner={'Ricardo Olivares'}
        state={'Activa'}>
      </PlasticCard>
    )
    expect(testcomponent.getAllByText(/Tarjetas bancarias desktop red/)).toBeTruthy()
  })

  test('should debit desktop plastic card must be render', () => {
    const testcomponent = render(
      <PlasticCard
        type={'debit'}
        cardNumber={'N° *** *** 6520'}
        cardTitle={'MasterCard Debit'}
        cardType={'Titular'}
        forceDesktop={true}
        owner={'Ricardo Olivares'}
        state={'Activa'}>
      </PlasticCard>
    )
    expect(testcomponent.getAllByText(/Atomo Tarjetas bancarias desktop black/)).toBeTruthy()
  })

})
