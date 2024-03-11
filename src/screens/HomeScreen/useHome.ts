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
  const [filterSubmited, setFilterSubmited] = useState(false)
  const [fetchWithoutData, setFetchWithoutData] = useState(false)

  const fetchWrap = isFetching(setFetching)

  useEffect(() => {
    async function getAnimals() {
      setFetching(true)
      const animals = await getAllAnimals()
      dataIsVisible(animals)
      setAllAnimals(animals.data)
      setFetching(false)
    }
    getAnimals()
  }, [])

  const dataIsVisible = ({ data }: any) => {
    return !data?.length ? setFetchWithoutData(true) : setFetchWithoutData(false)
  }

  const resetFilter = () => {
    setFilterSubmited(false)
    setFilterParameters(initialState)
    setAnimalsFiltered([])
    setFilterSubmited(false)
  }

  return {
    states: {
      fetchWithoutData,
      filterSubmited,
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
      get filterResultLength() {
        return animalsFiltered?.length > 0
      },
    },
    setters: {
      setFilterSubmited,
      setAnimalTypeSelected,
      setShowFiltersModal,
      setFilterParameters,
      setAnimalsFiltered,
    },
    actions: {
      resetFilter,
      filterAnimalsByType: fetchWrap(async (type: string) => {
        if (!type.length) return
        const animalsFilter = await getAnimalsByType(type)
        dataIsVisible(animalsFilter)
        setAnimalsFiltered(animalsFilter.data)
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
          dataIsVisible(animalsByComuna)
          setAnimalsFiltered(animalsByComuna.data)
          setAnimalTypeSelected('')
          setFilterParameters(initialState)
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
          setAnimalTypeSelected('')
          setAnimalsFiltered(animalsFilteredBySelection.data)
          dataIsVisible(animalsFilteredBySelection)
          setFilterParameters(initialState)
        }
      }),
    },
  }
}

export default useHome
