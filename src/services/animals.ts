import http from '../utils/helpers/http.helper'

const URI = 'https://huachitos.cl/api'

export const getAllAnimals = () => {
  try {
    return http.get(`${URI}/animales`)
  } catch (error) {
    console.error(error)
  }
}

export const getAnimalsByType = (type: string) => {
  try {
    return http.get(`${URI}/animales/tipo/${type}`)
  } catch (error) {
    console.error(error)
  }
}
