import AsyncStorage from '@react-native-async-storage/async-storage'
import { AnimalLiked } from '../models'

const jsonStr = (value: any) => JSON.stringify(value)

export const getLikedsList = async () => {
  try {
    const list = JSON.parse((await AsyncStorage.getItem('liked-animal')) || '[]')

    if (!list.length) {
      return
    }
    return list
  } catch (error) {
    console.log(error)
  }
}

export const likedAnimal = async (value: AnimalLiked) => {
  const animalsList = (await getLikedsList()) || []
  try {
    const dataToSet = jsonStr([...animalsList, value])
    return await AsyncStorage.setItem('liked-animal', dataToSet)
  } catch (err) {
    console.log(err)
  }
}

export const unlikedAnimal = async (id: number) => {
  const animalsList = await getLikedsList()
  try {
    const alreadyLiked = animalsList.find((item: AnimalLiked) => item.id === id)
    if (alreadyLiked) {
      const data = jsonStr(animalsList.filter((item: AnimalLiked) => item.id !== id))
      return await AsyncStorage.setItem('liked-animal', data)
    }
  } catch (err) {
    console.error(err)
  }
}

export const animalByLiked = async (id: number) => {
  const animalsLikedList = (await getLikedsList()) || []
  if (animalByLiked.length > 0) {
    const isLiked = animalsLikedList.some((item: AnimalLiked) => item.id === id)
    return !!isLiked
  }
  return false
}
