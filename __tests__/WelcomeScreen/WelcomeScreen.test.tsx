import React from 'react'
import renderer from 'react-test-renderer'
import WelcomeScreen from '../../src/screens/WelcomeScreen/WelcomeScreen'

describe('<WelcomeScreen/> test', () => {
  test('Should by render correctly', () => {
    const container = renderer.create(<WelcomeScreen />)
    expect(container).toMatchSnapshot()
  })
})
