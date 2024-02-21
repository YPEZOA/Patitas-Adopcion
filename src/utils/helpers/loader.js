export const isFetching =
  setState =>
  fn =>
  async (...args) => {
    setState(true)
    let ok
    let result

    try {
      ok = true
      result = await fn(...args)
    } catch (error) {
      console.error(error)
      ok = false
      result = error
    }

    setState(false)

    return ok ? Promise.resolve(result) : Promise.reject(result)
  }
