import { useEffect, useState } from 'react'
import { getAllAnimals, getAnimalsByFilters, getAnimalsByType } from '../../services/animals'
import { isFetching } from '../../utils/helpers/loader'

const initialState = {
  state: '',
  region: { id: null, region: '', comunas: [] },
  comuna: null,
}

const useHome = () => {
  const [allAnimals, setAllAnimals] = useState([])
  const [animalTypeSelected, setAnimalTypeSelected] = useState('')
  const [fetching, setFetching] = useState(false)
  const [showFiltersModal, setShowFiltersModal] = useState(false)
  const [filterParameters, setFilterParameters] = useState(initialState)
  const [animalsFiltered, setAnimalsFiltered] = useState([])

  const fetchWrap = isFetching(setFetching)

  useEffect(() => {
    async function fn() {
      setFetching(true)
      const animals = await getAllAnimals()
      setAllAnimals(animals.data)
      setFetching(false)
    }
    fn()
  }, [])

  const resetModalData = () => {
    setFilterParameters(initialState)
  }

  return {
    states: {
      allAnimals,
      animalTypeSelected,
      fetching,
      showFiltersModal,
      filterParameters,
      animalsFiltered,
      get getAvailableCommunes() {
        return filterParameters.region.comunas
      },
      get anyFilterSelected() {
        return filterParameters !== initialState
      },
    },
    setters: {
      setAnimalTypeSelected,
      setShowFiltersModal,
      setFilterParameters,
    },
    actions: {
      resetModalData,
      filterAnimalsByType: fetchWrap(async (type: string) => {
        if (!type.length) return
        const animalsFiltered = await getAnimalsByType(type)
        setAllAnimals(animalsFiltered.data)
      }),
      getAnimalsByFiltered: fetchWrap(async () => {
        const filterPayload = {
          ...filterParameters,
          region: filterParameters.region.id,
        }
        const { comuna, state, region } = filterPayload

        if (filterPayload.comuna !== null) {
          const animalsByComuna = await getAnimalsByFilters(
            `comuna/${comuna}${state.length ? `/estado/${state}` : ''}`
          )
          setAnimalsFiltered(animalsByComuna.data)
          resetModalData()
        } else {
          const regionSelected = filterPayload.region !== null
          const stateSelected = filterPayload.state !== ''
          const animalsFilteredBySelection = await getAnimalsByFilters(
            `${
              regionSelected && stateSelected
                ? `region/${region}/estado/${state}`
                : regionSelected
                ? `region/${region}`
                : `estado/${state}`
            }`
          )
          setAnimalsFiltered(animalsFilteredBySelection.data)
          resetModalData()
        }
      }),
    },
  }
}

export default useHome
