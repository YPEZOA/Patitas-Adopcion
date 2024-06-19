import { useEffect, useState } from 'react'
import { getAllAnimals, getAnimalsByType } from '../../services/animals'
import { isFetching } from '../../utils/helpers/loader'

const useHome = () => {
  const [allAnimals, setAllAnimals] = useState([])
  const [animalTypeSelected, setAnimalTypeSelected] = useState('')
  const [fetching, setFetching] = useState(false)
  const [showFiltersModal, setShowFiltersModal] = useState(false)
  const [animalsFiltered, setAnimalsFiltered] = useState([])
  const [fetchWithoutData, setFetchWithoutData] = useState(false)
  const [filterSubmited, setFilterSubmited] = useState(false)

  const fetchWrap = isFetching(setFetching)

  useEffect(() => {
    // async function getAnimals() {
    //   setFetching(true)
    //   const animals = await getAllAnimals()
    //   dataIsVisible(animals)
    //   setAllAnimals(animals.data)
    //   setFetching(false)
    // }
    // getAnimals()
  }, [])

  const dataIsVisible = ({ data }: any) => {
    return !data?.length ? setFetchWithoutData(true) : setFetchWithoutData(false)
  }

  return {
    states: {
      fetchWithoutData,
      allAnimals,
      animalTypeSelected,
      fetching,
      showFiltersModal,
      animalsFiltered,
      filterSubmited,

      get filterResultLength() {
        return animalsFiltered?.length > 0
      },
    },
    setters: {
      setAnimalTypeSelected,
      setFilterSubmited,
      setShowFiltersModal,
      setAnimalsFiltered,
      setFetching,
    },
    actions: {
      dataIsVisible,
      filterAnimalsByType: fetchWrap(async (type: string) => {
        if (!type.length) return
        const animalsFilter = await getAnimalsByType(type)
        dataIsVisible(animalsFilter)
        setAnimalsFiltered(animalsFilter.data)
      }),
    },
  }
}

export default useHome
