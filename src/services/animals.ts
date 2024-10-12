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
    const typeLower = type.toLowerCase()
    return http.get(`${URI}/animales/tipo/${typeLower}`)
  } catch (error) {
    console.error(error)
  }
}

export const getAnimalsByFilters = (payload: string) => {
  try {
    return http.get(`${URI}/animales/${payload}`)
  } catch (error) {
    console.error(error)
  }
}
