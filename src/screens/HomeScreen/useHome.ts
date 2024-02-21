import { useEffect, useState } from 'react'
import { getAllAnimals, getAnimalsByType } from '../../services/animals'
import { isFetching } from '../../utils/helpers/loader'
import colors from '../../UI/colors'

const useHome = () => {
  const [allAnimals, setAllAnimals] = useState([])
  const [animalTypeSelected, setAnimalTypeSelected] = useState('')
  const [fetching, setFetching] = useState(false)
  const [showFiltersModal, setShowFiltersModal] = useState(false)

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
    states: { allAnimals, animalTypeSelected, fetching, showFiltersModal },
    setters: { setAnimalTypeSelected, setShowFiltersModal },
    actions: {
      filterAnimalsByType: fetchWrap(async (type: string) => {
        if (!type.length) return
        const animalsFiltered = await getAnimalsByType(type)
        setAllAnimals(animalsFiltered.data)
      }),
    },
  }
}

export default useHome
