import { useEffect, useState } from 'react'
import { getAllAnimals, getAnimalsByType } from '../../services/animals'
import { isFetching } from '../../utils/helpers/loader'

const useHome = () => {
  const [allAnimals, setAllAnimals] = useState([])
  const [animalTypeSelected, setAnimalTypeSelected] = useState('')
  const [fetching, setFetching] = useState(false)
  const [showFiltersModal, setShowFiltersModal] = useState(false)
  const [filterParameters, setFilterParameters] = useState({
    state: '',
    region: { id: 0, region: '', comunas: [] },
    comuna: '',
    type: '',
  })

  const fetchWrap = isFetching(setFetching)

  const getAnimals = async () => {
    setFetching(true)
    const animals = await getAllAnimals()
    setAllAnimals(animals.data)
    setFetching(false)
  }

  useEffect(() => {
    getAnimals()
  }, [])

  return {
    states: {
      allAnimals,
      animalTypeSelected,
      fetching,
      showFiltersModal,
      filterParameters,
      get getAvailableCommunes() {
        return filterParameters.region.comunas
      },
    },
    setters: {
      setAnimalTypeSelected,
      setShowFiltersModal,
      setFilterParameters,
    },
    actions: {
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
        console.log(filterParameters)
      }),
    },
  }
}

export default useHome
