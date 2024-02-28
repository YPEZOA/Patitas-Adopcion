import { Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import IconF from 'react-native-vector-icons/Feather'
import { selectableStyles as St } from './styles'
import colors from '../../UI/colors'
import useSelectable from './useSelectable'

const Selectable = ({ data }: any) => {
  const { states, setters } = useSelectable()

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity style={St.itemContainer} onPress={() => setters.setItemSelected(item)}>
          <Text style={St.itemText}>{item.region}</Text>
          {states.itemSelected?.region === item.region && (
            <IconF name="check" size={20} color={colors.primary} />
          )}
        </TouchableOpacity>
      )}
    />
  )
}

export default Selectable
