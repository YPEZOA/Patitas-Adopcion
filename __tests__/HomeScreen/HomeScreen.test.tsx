import React from 'react'
import HomeScreen from '../../src/screens/HomeScreen'
import { fireEvent, render, renderHook, waitFor } from '@testing-library/react-native'
import useHome from '../../src/screens/HomeScreen/useHome'
import { HomeContext } from '../../src/screens/HomeScreen/context'
import Animals from '../../src/screens/HomeScreen/components/Animals/Animals'
import * as api from '../../src/services/animals'
import { animals } from '../../__mock__/mocks'

const mockedNavigation = jest.fn()
jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockedNavigation.mockImplementation(() => {}),
    }),
  }
})

describe('<HomeScreen/> test', () => {
  afterEach(() => jest.clearAllMocks())
  test('Should by render correctly', () => {
    const container = render(<HomeScreen />)
    expect(container).toBeTruthy()
  })

  test('Should be show filter and animals liked buttons', () => {
    const { getByLabelText } = render(<HomeScreen />)
    const likesButton = getByLabelText('Ir a favoritos')
    const openFiltersButton = getByLabelText('Abrir filtros')

    fireEvent.press(likesButton)
    fireEvent.press(openFiltersButton)
    expect(likesButton).toBeDefined()
    expect(openFiltersButton).toBeDefined()
  })

  test('Should be render list buttons of animals type filter', () => {
    const { getAllByTestId } = render(<HomeScreen />)
    const button = getAllByTestId('animalType')
    expect(button).toBeDefined()
    expect(button.length).toEqual(5)
  })

  test('Should be render <WithoutResult/>', async () => {
    const { result } = renderHook(() => useHome())
    const { states, setters, actions } = result.current

    states.fetchWithoutData = true
    states.fetching = false

    const { getByText } = render(
      <HomeContext.Provider value={{ states, setters, actions }}>
        <Animals />
      </HomeContext.Provider>
    )
    expect(getByText('No se encontraron resultados')).toBeTruthy()
  })

  test('Should be render animals list', async () => {
    const fetchingSpy = jest
      .spyOn(api, 'getAllAnimals')
      .mockImplementation(() => Promise.resolve({ data: animals }))

    const { getByTestId, getAllByTestId } = render(<HomeScreen />)
    await waitFor(() => expect(fetchingSpy).toHaveBeenCalledTimes(1))

    expect(getByTestId('animals-list')).toBeTruthy()
    expect(getAllByTestId('animal')).toHaveLength(animals.length)
  })

  test('Should navigate to a specific animal when pressing that box', async () => {
    const fetchingSpy = jest
      .spyOn(api, 'getAllAnimals')
      .mockImplementation(() => Promise.resolve({ data: animals }))

    const { getAllByTestId } = render(<HomeScreen />)
    await waitFor(() => expect(fetchingSpy).toHaveBeenCalledTimes(1))

    const animalProfileNavigate = getAllByTestId('animal-profile-navigate')[0]
    fireEvent.press(animalProfileNavigate)
    expect(mockedNavigation).toHaveBeenCalledWith('AnimalProfile', animals[0])
  })
})
