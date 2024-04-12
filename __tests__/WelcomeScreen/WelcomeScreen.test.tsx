import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react-native'
import WelcomeScreen from '../../src/screens/WelcomeScreen/WelcomeScreen'

describe('<WelcomeScreen/> test', () => {
  test('Should be render correctly', () => {
    const container = render(<WelcomeScreen />).toJSON()
    expect(container).toMatchSnapshot()
  })

  test('Should be render button', () => {
    render(<WelcomeScreen />)
    const button = screen.getByText('Encuentra animales')
    fireEvent.press(button)
    expect(button).toBeDefined()
  })
})
