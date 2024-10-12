import React from 'react'
import { Text, FlatList, TouchableOpacity } from 'react-native'
import { selectableStyles as St } from './styles'
import IconF from 'react-native-vector-icons/Feather'
import colors from '../../UI/colors'
import useSelectable from './useSelectable'

const Selectable = ({ data, onHandleSelection }: any) => {
  const { selectableStates, selectableSetters } = useSelectable()

  const handleSelection = (item: any) => () => {
    selectableSetters.setItemSelected(item.region)
    onHandleSelection(item)
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          disabled={selectableStates.itemSelected === item}
          style={St.itemContainer}
          onPress={handleSelection(item)}
        >
          <Text style={St.itemText}>{item.region}</Text>
          {selectableStates.itemSelected === item.region && (
            <IconF name="check" size={20} color={colors.primary} />
          )}
        </TouchableOpacity>
      )}
    />
  )
}

export default Selectable
