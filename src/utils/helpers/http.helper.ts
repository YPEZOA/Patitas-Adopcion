import { Linking } from 'react-native'

const toJSON = (resp: Response) => resp.json()

const http = {
  async get(url: string) {
    const response = await fetch(url)
    return toJSON(response)
  },
  async gotoAdoptUrl(id: number, name: string) {
    const splitedName = name.split(' ').join('-')
    const url = `https://huachitos.cl/animal/${id}-${splitedName}`
    return await Linking.openURL(url)
  },
}

export default http
