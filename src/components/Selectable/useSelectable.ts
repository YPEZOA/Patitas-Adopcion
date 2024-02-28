import { useState } from 'react'

const useSelectable = () => {
  const [itemSelected, setItemSelected] = useState({
    id: 0,
    region: '',
    comunas: [],
  })

  return {
    states: { itemSelected },
    setters: { setItemSelected },
  }
}

export default useSelectable
