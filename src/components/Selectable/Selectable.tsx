import React, { useContext } from 'react'
import { Text, FlatList, TouchableOpacity } from 'react-native'
import { HomeContext } from '../../screens/HomeScreen/context'
import { selectableStyles as St } from './styles'
import IconF from 'react-native-vector-icons/Feather'
import colors from '../../UI/colors'
import useSelectable from './useSelectable'

const Selectable = ({ data }: any) => {
  const { states, setters } = useSelectable()
  const homeContext = useContext(HomeContext)

  const handleSelection = (item: any) => () => {
    setters.setItemSelected(item.region)
    homeContext.setters.setFilterParameters({
      ...homeContext.states.filterParameters,
      region: item,
    })
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          disabled={states.itemSelected === item}
          style={St.itemContainer}
          onPress={handleSelection(item)}
        >
          <Text style={St.itemText}>{item.region}</Text>
          {states.itemSelected === item.region && (
            <IconF name="check" size={20} color={colors.primary} />
          )}
        </TouchableOpacity>
      )}
    />
  )
}

export default Selectable
