import React from 'react'
import renderer from 'react-test-renderer'
import HomeScreen from '../../src/screens/HomeScreen'

describe('<HomeScreen/> test', () => {
  test('Should by render correctly', () => {
    const container = renderer.create(<HomeScreen />)
    expect(container).toMatchSnapshot()
  })
})
