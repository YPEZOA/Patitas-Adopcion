const URI = 'https://huachitos.cl/api'

export const getAllAnimals = () => {
  try {
    const response = fetch(`${URI}/animales`).then(res => res.json())
    return response
  } catch (error) {
    console.error(error)
  }
}
