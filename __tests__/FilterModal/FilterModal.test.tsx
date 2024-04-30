import React from 'react'
import { fireEvent, render, renderHook, waitFor } from '@testing-library/react-native'
import HomeScreen from '../../src/screens/HomeScreen'
import useHome from '../../src/screens/HomeScreen/useHome'
import { act } from 'react-test-renderer'

describe('Test <FilterModal/>', () => {
  test('Should be component visible', () => {
    const { toJSON, getByTestId } = render(<HomeScreen />)
    const openFilterBtn = getByTestId('open-filters')
    fireEvent.press(openFilterBtn)

    const modalInstance = getByTestId('filters-modal')
    expect(modalInstance).toBeDefined()
    expect(toJSON).toMatchSnapshot()
  })

  test('Should show disabled button to apply filters', () => {
    const { getByTestId } = render(<HomeScreen />)
    const openFilterBtn = getByTestId('open-filters')
    fireEvent.press(openFilterBtn)

    const applyFiltersBtn = getByTestId('apply-filters')
    expect(applyFiltersBtn).toBeDefined()
    expect(applyFiltersBtn.props.accessibilityState.disabled).toBeTruthy()
  })

  test('Should be show enabled button', async () => {
    const { result } = renderHook(() => useHome())
    const { getByTestId, getAllByTestId } = render(<HomeScreen />)
    const openFilterBtn = getByTestId('open-filters')
    fireEvent.press(openFilterBtn)

    const animalStateButtons = getAllByTestId('animal-state')
    expect(animalStateButtons.length).toBe(3)

    fireEvent.press(animalStateButtons[0])
    const { states, setters } = result.current

    await waitFor(() => {
      setters.setFilterParameters({ ...states.filterParameters, state: 'adopcion' })
      const func = jest.fn(() => states.anyFilterSelected())
      func()
    })
  })
})
