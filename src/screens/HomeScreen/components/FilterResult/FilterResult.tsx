import React, { useContext } from 'react'
import { Pressable, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { HomeContext } from '../../context'
import MasonryList from '@react-native-seoul/masonry-list'
import Animal from '../Animal/Animal'
import { filterResultStyles as St } from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
import WithoutResults from '../../../../components/WithoutResults/WithoutResults'
import IsLoading from '../../../../components/IsLoading/IsLoading'
import colors from '../../../../UI/colors'

const FilterResult: React.FC = () => {
  const { states, actions } = useContext(HomeContext)
  const navigation = useNavigation()

  return (
    <IsLoading isLoading={states.fetching}>
      {states.filterResultLength ? (
        <>
          <MasonryList
            ListHeaderComponent={
              <View style={St.filterList}>
                <Text style={St.titleList}>Resultados del filtro</Text>
                <TouchableOpacity style={St.deleteFilter} onPress={() => actions.resetFilter()}>
                  <Icon name="close-outline" size={25} color={colors.white} />
                </TouchableOpacity>
              </View>
            }
            refreshControl={false}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            data={states.animalsFiltered}
            renderItem={({ item, i }: any) => (
              <Pressable onPress={() => navigation.navigate('AnimalProfile', item)}>
                <Animal data={item} index={i} />
              </Pressable>
            )}
            numColumns={2}
            onEndReachedThreshold={0.1}
            style={{ gap: 10 }}
          />
        </>
      ) : (
        <WithoutResults />
      )}
    </IsLoading>
  )
}

export default FilterResult
