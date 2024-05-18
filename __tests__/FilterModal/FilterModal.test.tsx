import React from 'react'
import { fireEvent, render, renderHook } from '@testing-library/react-native'
import { HomeContext } from '../../src/screens/HomeScreen/context'
import useHome from '../../src/screens/HomeScreen/useHome'
import HomeScreen from '../../src/screens/HomeScreen'

describe('Test <FilterModal/>', () => {
  test('Should be component visible', () => {
    const homeHook = renderHook(() => useHome())
    const { actions, setters, states } = homeHook.result.current
    const { getByTestId, toJSON } = render(
      <HomeContext.Provider value={{ states, actions, setters }}>
        <HomeScreen />
      </HomeContext.Provider>
    )
    const openFiltersBtn = getByTestId('open-filters')
    fireEvent.press(openFiltersBtn)
    const filtersModal = getByTestId('filters-modal')
    expect(filtersModal).toBeTruthy()
    expect(toJSON()).toMatchSnapshot()
  })
})
