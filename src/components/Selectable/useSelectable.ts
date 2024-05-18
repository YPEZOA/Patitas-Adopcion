import { useState } from 'react'

const useSelectable = () => {
  const [itemSelected, setItemSelected] = useState({
    id: 0,
    region: '',
    comunas: [],
  })

  return {
    selectableStates: { itemSelected },
    selectableSetters: { setItemSelected },
  }
}

export default useSelectable
