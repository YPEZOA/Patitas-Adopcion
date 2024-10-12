import React, { useContext } from 'react'
import { Pressable, Text, View, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { HomeContext } from '../../context'
import Animal from '../Animal/Animal'
import { filterResultStyles as St } from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
import WithoutResults from '../../../../components/WithoutResults/WithoutResults'
import IsLoading from '../../../../components/IsLoading/IsLoading'
import colors from '../../../../UI/colors'

const FilterResult = () => {
  const { states, setters, actions } = useContext(HomeContext)
  const navigation = useNavigation()

  const handleResetFilter = () => {
    setters.setAnimalTypeSelected('Perro')
    actions.filterAnimalsByType('perro')
    setters.setFilterSubmited(false)
    setters.setAnimalsFiltered([])
  }

  return (
    <IsLoading isLoading={states.fetching}>
      {states.filterResultLength ? (
        <>
          <FlatList
            contentContainerStyle={{ paddingHorizontal: 10 }}
            ListHeaderComponent={
              <View style={St.filterList}>
                <Text style={St.titleList}>Resultados del filtro</Text>
                <TouchableOpacity style={St.deleteFilter} onPress={handleResetFilter}>
                  <Icon name="close-outline" size={25} color={colors.white} />
                </TouchableOpacity>
              </View>
            }
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            data={states.animalsFiltered}
            renderItem={({ item, index }: any) => (
              <Pressable onPress={() => navigation.navigate('AnimalProfile', item)}>
                <Animal data={item} index={index} />
              </Pressable>
            )}
          />
        </>
      ) : (
        <WithoutResults />
      )}
    </IsLoading>
  )
}

export default FilterResult
