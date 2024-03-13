import AsyncStorage from '@react-native-async-storage/async-storage'

interface LikeAnimal {
  id: number
  nombre: string
}

const jsonStr = (value: any) => JSON.stringify(value)
const getLikedsList = async () => JSON.parse((await AsyncStorage.getItem('liked-animal')) || '[]')

export const likedAnimal = async (value: LikeAnimal) => {
  try {
    const animalsList = await getLikedsList()
    const alreadyLiked = animalsList.find((item: LikeAnimal) => item.id === value.id)

    if (alreadyLiked) {
      const data = jsonStr(animalsList.filter((item: LikeAnimal) => item.id !== value.id))
      return await AsyncStorage.setItem('liked-animal', data)
    }

    const dataToSet = jsonStr([...animalsList, value])
    return await AsyncStorage.setItem('liked-animal', dataToSet)
  } catch (err) {
    console.log(err)
  }
}

export const animalByLiked = async (id: number) => {
  const animalsLikedList = await getLikedsList()
  const isLiked = await animalsLikedList.find((item: LikeAnimal) => item.id === id)
  return !!isLiked
}
