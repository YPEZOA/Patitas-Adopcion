const toJSON = (response: Response) => response.json()

const http = {
  async get(url: string) {
    const response = await fetch(url)
    return toJSON(response)
  },
}

export default http
