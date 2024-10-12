import { useContext, useState } from 'react'
import { HomeContext } from '../../context'
import { getAnimalsByFilters } from '../../../../services/animals'
import { isFetching } from '../../../../utils/helpers/loader'

const initialState = {
  state: '',
  region: { id: null, region: '', comunas: [] },
  comuna: null,
}

const useFiltersModal = () => {
  const [filterParameters, setFilterParameters] = useState(initialState)

  const { actions, setters } = useContext(HomeContext)

  const resetFilter = () => {
    setFilterParameters(initialState)
    setters.setAnimalsFiltered([])
  }

  const fetchWrap = isFetching(setters.setFetching)

  return {
    filterStates: {
      filterParameters,
      get getAvailableCommunes() {
        return filterParameters.region.comunas
      },
      get anyFilterSelected() {
        return filterParameters !== initialState
      },
      get isRegionSelected() {
        return filterParameters.region.id !== null
      },
      get isCommuneSelected() {
        return filterParameters.comuna !== null
      },
    },
    filterSetters: {
      setFilterParameters,
    },
    filterActions: {
      resetFilter,
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
          actions.dataIsVisible(animalsByComuna)
          setters.setAnimalsFiltered(animalsByComuna.data)
          setters.setAnimalTypeSelected('')
          setters.setFilterSubmited(true)
          setFilterParameters(initialState)
        } else {
          const isRegionSelected = filterPayload.region !== null
          const isStateSelected = filterPayload.state !== ''
          const animalsFilteredBySelection = await getAnimalsByFilters(
            `${
              isRegionSelected && isStateSelected
                ? `region/${region}/estado/${state}`
                : isRegionSelected
                ? `region/${region}`
                : `estado/${state}`
            }`
          )
          setters.setAnimalTypeSelected('')
          setters.setAnimalsFiltered(animalsFilteredBySelection.data)
          setters.setFilterSubmited(true)
          actions.dataIsVisible(animalsFilteredBySelection)
        }
        setters.setShowFiltersModal(false)
      }),
    },
  }
}

export default useFiltersModal
